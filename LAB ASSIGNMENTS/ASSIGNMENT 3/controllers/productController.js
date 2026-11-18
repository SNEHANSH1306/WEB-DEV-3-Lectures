const Product = require("../models/Product");

// Escape special regex characters so user input can't break the query
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// ---------- CREATE ----------
// POST /api/products
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

// ---------- READ ALL (filter, sort, paginate) ----------
// GET /api/products?category=&supplier=&search=&minPrice=&maxPrice=&sort=&page=&limit=
exports.getProducts = async (req, res, next) => {
  try {
    const { category, supplier, search, minPrice, maxPrice, sort, page = 1, limit = 10 } = req.query;

    // 1. Filtering
    const filter = {};
    if (category) filter.category = new RegExp(`^${escapeRegex(category)}$`, "i");
    if (supplier) filter.supplier = new RegExp(escapeRegex(supplier), "i");
    if (search) filter.name = new RegExp(escapeRegex(search), "i");
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // 2. Sorting: ?sort=price,-quantity  ->  "price -quantity"
    const sortBy = sort ? sort.split(",").join(" ") : "-createdAt";

    // 3. Pagination
    const pageNum = Math.max(parseInt(page) || 1, 1);
    const limitNum = Math.min(Math.max(parseInt(limit) || 10, 1), 100);

    const [total, products] = await Promise.all([
      Product.countDocuments(filter),
      Product.find(filter)
        .sort(sortBy)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
    ]);

    res.json({
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      count: products.length,
      products,
    });
  } catch (err) {
    next(err);
  }
};

// ---------- READ ONE ----------
// GET /api/products/:id
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// ---------- UPDATE ----------
// PUT /api/products/:id
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // return the updated document
      runValidators: true, // apply schema validation on update
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// ---------- STOCK ADJUSTMENT (restock / sale) ----------
// PATCH /api/products/:id/stock   body: { "change": 10 } or { "change": -3 }
exports.adjustStock = async (req, res, next) => {
  try {
    const change = Number(req.body.change);
    if (!Number.isInteger(change) || change === 0) {
      return res.status(400).json({ message: "'change' must be a non-zero integer" });
    }

    // For a sale (negative change), only match if enough stock exists.
    // $inc is atomic, so two simultaneous sales can't push stock below zero.
    const filter = { _id: req.params.id };
    if (change < 0) filter.quantity = { $gte: -change };

    const product = await Product.findOneAndUpdate(
      filter,
      { $inc: { quantity: change } },
      { new: true, runValidators: true }
    );

    if (!product) {
      const exists = await Product.exists({ _id: req.params.id });
      return exists
        ? res.status(400).json({ message: "Insufficient stock for this sale" })
        : res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Stock updated", product });
  } catch (err) {
    next(err);
  }
};

// ---------- DELETE ----------
// DELETE /api/products/:id
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted", id: product._id });
  } catch (err) {
    next(err);
  }
};

// ---------- LOW-STOCK REPORT ----------
// GET /api/products/low-stock   (quantity <= reorderLevel)
exports.getLowStock = async (req, res, next) => {
  try {
    const lowStockItems = await Product.find({
      $expr: { $lte: ["$quantity", "$reorderLevel"] },
    }).sort("quantity");
    res.json({ count: lowStockItems.length, lowStockItems });
  } catch (err) {
    next(err);
  }
};

// ---------- CATEGORY SUMMARY (aggregation pipeline) ----------
// GET /api/products/summary
exports.getSummary = async (req, res, next) => {
  try {
    const summary = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalItems: { $sum: 1 },
          totalQuantity: { $sum: "$quantity" },
          totalStockValue: { $sum: { $multiply: ["$price", "$quantity"] } },
          avgPrice: { $avg: "$price" },
        },
      },
      { $sort: { totalStockValue: -1 } },
    ]);
    res.json({ categories: summary.length, summary });
  } catch (err) {
    next(err);
  }
};