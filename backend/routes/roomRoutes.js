const express = require('express');
const roomController = require('../controllers/roomController');



const router = express.Router();

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(
    roomController.uploadImage,
    roomController.resizeUploadImage,
    roomController.createRoom,
  );


router
  .route('/:id')
  .get(roomController.getRoom)
  .patch(
    roomController.uploadImage,
    roomController.resizeUploadImage,
    roomController.updateRoom,
    // roomController.resizeRoomImages,
  )
  .delete(
    roomController.deleteRoom
  );


module.exports = router;