const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "../public/images/products");
    fs.mkdirSync(dir, { recursive: true }); // Crea la carpeta si no existe
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 }, // Limita el tamaño del archivo a 1 MB
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const newFilename = `resized-${file.filename}`;
      const newPath = path.join('public/images/products', newFilename);
      await sharp(file.path)
        .resize(300, 300)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(newPath);
      fs.unlinkSync(file.path); // Eliminar el archivo original
      file.path = newPath; // Actualiza la ruta del archivo
      file.filename = newFilename; // Actualiza el nombre del archivo
    })
  );
  next();
};

const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const newFilename = `resized-${file.filename}`;
      const newPath = path.join('public/images/blogs', newFilename);
      await sharp(file.path)
        .resize(300, 300)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(newPath);
      fs.unlinkSync(file.path); // Eliminar el archivo original
      file.path = newPath; // Actualiza la ruta del archivo
      file.filename = newFilename; // Actualiza el nombre del archivo
    })
  );
  next();
};

module.exports = { uploadPhoto, productImgResize, blogImgResize };
