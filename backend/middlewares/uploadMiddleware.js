const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg"];
  allowed.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error("Only .jpeg, .jpg and .png formats are allowed"), false);
};

module.exports = multer({ storage, fileFilter });
