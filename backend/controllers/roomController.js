const multer = require('multer');
const sharp = require('sharp');
const room = require('../models/roomModel');
const method = require('./handleMethod');
const catchAsync = require('../helper/catchAsync');
const AppError = require('../helper/appError');


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadImage = upload.fields([
  { name: 'image', maxCount: 1 },
]);

exports.resizeUploadImage = catchAsync(async (req, res, next) => {
  if (!req.files.image) return next();

  // 1) Cover image
  req.body.image = `room-${req.params.id}-${Date.now()}-voffice.webp`;
  await sharp(req.files.image[0].buffer)
    .resize(500, 500)
    .toFormat('webp')
    .jpeg({ quality: 90 })
    .toFile(`assets/imageroom/${req.body.image}`);

  next();
});



exports.getAllRooms = method.getAll(room);
exports.getRoom = method.getOne(room);
exports.createRoom = method.createOne(room);
exports.updateRoom = method.updateOne(room);
exports.deleteRoom = method.deleteOne(room);



