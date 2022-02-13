const users = require('../models/userModel');
const method = require('./handleMethod');


exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};


exports.getUser = method.getOneQuery(users);
exports.getAllUser = method.getAll(users);
exports.createUser = method.createOne(users);
exports.updateUser = method.updateOne(users);
exports.deleteUser = method.deleteOne(users);

