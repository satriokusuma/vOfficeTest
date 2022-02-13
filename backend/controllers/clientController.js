const client = require('../models/clientModel');
const method = require('./handleMethod');


exports.getAllClient = method.getAll(client);
exports.getClient = method.getOne(client);
exports.createClient = method.createOne(client);
exports.updateClient = method.updateOne(client);
exports.deleteClient = method.deleteOne(client);


