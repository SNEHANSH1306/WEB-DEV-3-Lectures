require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const data = [
  { name: "Study Table", sku: "FURN-TB-812", category: "Furniture", price: 3999, quantity: 2, reorderLevel: 4, supplier: "IKEA India" },
  { name: "Office Chair", sku: "FURN-CH-201", category: "Furniture", price: 5499, quantity: 15, reorderLevel: 5, supplier: "Godrej" },
  { name: "Laptop 15 inch", sku: "ELEC-LP-101", category: "Electronics", price: 55000, quantity: 5, reorderLevel: 5, supplier: "Dell India" },
  { name: "Wireless Mouse", sku: "ELEC-MS-102", category: "Electronics", price: 799, quantity: 60, reorderLevel: 15, supplier: "Logitech" },
  { name: "Bluetooth Speaker", sku: "ELEC-SP-103", category: "Electronics", price: 2499, quantity: 25, reorderLevel: 10, supplier: "boAt" },
  { name: "USB-C Cable", sku: "ELEC-CB-104", category: "Electronics", price: 299, quantity: 6, reorderLevel: 20, supplier: "Anker" },
  { name: "Cotton T-Shirt", sku: "APRL-TS-301", category: "Apparel", price: 599, quantity: 50, reorderLevel: 20, supplier: "Raymond" },
  { name: "Denim Jeans", sku: "APRL-JN-302", category: "Apparel", price: 2199, quantity: 28, reorderLevel: 10, supplier: "Levi's" },
  { name: "Notebook A4", sku: "STNY-NB-401", category: "Stationery", price: 80, quantity: 120, reorderLevel: 30, supplier: "Classmate" },
  { name: "Gel Pen Pack of 10", sku: "STNY-PN-402", category: "Stationery", price: 100, quantity: 8, reorderLevel: 20, supplier: "Cello Pens" },
  { name: "Basmati Rice 5kg", sku: "GROC-RC-501", category: "Grocery", price: 650, quantity: 40, reorderLevel: 15, supplier: "India Gate" },
  { name: "Olive Oil 1L", sku: "GROC-OL-502", category: "Grocery", price: 850, quantity: 30, reorderLevel: 10, supplier: "Figaro" },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(data);
    console.log(`Seeded ${data.length} products`);
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
})();