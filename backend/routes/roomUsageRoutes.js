const express = require('express');
const roomUsageController = require('../controllers/roomUsageController');



const router = express.Router();

router
  .route('/')
  .get(roomUsageController.getAllRoomUsage)
  .post(
    roomUsageController.createRoomUsage
  );

router
  .route('/:id')
  .get(roomUsageController.getRoomUsage)
  .patch(
    roomUsageController.updateRoomUsage,
  )
  .delete(
    roomUsageController.deleteRoomUsage
  );


module.exports = router;