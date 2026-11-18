module.exports = (err, req, res, next) => {
  // Schema validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }
  // Duplicate SKU
  if (err.code === 11000) {
    return res.status(409).json({
      message: `Duplicate value for: ${Object.keys(err.keyValue).join(", ")}`,
    });
  }
  // Wrong data type, e.g. price: "abc"
  if (err.name === "CastError") {
    return res.status(400).json({ message: `Invalid value for ${err.path}` });
  }
  console.error(err);
  res.status(err.statusCode || 500).json({ message: err.message || "Server error" });
};