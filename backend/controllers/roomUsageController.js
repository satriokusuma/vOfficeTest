const roomUsage = require('../models/roomUsageModel');
const room = require('../models/roomModel');
const client = require('../models/clientModel');
const methodRelation = require('./handleMethodRelation');


exports.getAllRoomUsage = methodRelation.getAll(roomUsage);
exports.getRoomUsage = methodRelation.getOne(roomUsage);
exports.createRoomUsage = methodRelation.createOne(roomUsage);
exports.updateRoomUsage = methodRelation.updateOne(roomUsage);
exports.deleteRoomUsage = methodRelation.deleteOne(roomUsage);