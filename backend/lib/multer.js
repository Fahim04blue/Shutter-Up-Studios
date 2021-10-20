const multer = require('multer');
const path = require('path');

const UPLOADS_FOLDER = 'uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname).toLowerCase();
    const fileName = `${file.originalname
      .replace(fileExt, '')
      .toLowerCase()
      .split(' ')
      .join('-')}-${new Date()
      .toISOString()
      .replace(/:/gm, '.')
      .replace('T', '-')
      .replace('Z', '')}`;
    cb(null, fileName + fileExt);
  },
});

const validateFile = (file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const extension = allowedFileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);
  if (extension && mimetype) {
    return cb(null, true);
  }

  cb(new Error('Only .png, .jpg and .jpeg files are allowed'));
};

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    validateFile(file, cb);
  },
});

module.exports = uploader;
