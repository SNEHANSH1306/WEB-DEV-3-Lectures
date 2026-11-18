const express = require("express");
const router = express.Router();
const c = require("../controllers/productController");
const validateId = require("../middleware/validateId");

// Static routes MUST come before "/:id", otherwise "low-stock" is read as an id
router.get("/low-stock", c.getLowStock);
router.get("/summary", c.getSummary);

router.route("/").get(c.getProducts).post(c.createProduct);

router
  .route("/:id")
  .get(validateId, c.getProductById)
  .put(validateId, c.updateProduct)
  .delete(validateId, c.deleteProduct);

router.patch("/:id/stock", validateId, c.adjustStock);

module.exports = router;