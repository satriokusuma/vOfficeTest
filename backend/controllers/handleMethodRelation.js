const room = require('../models/roomModel');
const client = require('../models/clientModel');


exports.getAll = Model => async function (req, res) {
  try {
    await Model.findAll({
      include: [
        {
          model: room,
          attributes: ['roomName', 'costPerHour']
        },
        {
          model: client,
          attributes: ['name', 'email', 'phone', 'credit']
        }
      ],
      order: [['id', 'desc']]
    }).then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          status: 'success',
          message: 'Get All Data',
          data: result
        });
      } else {
        res.status(200).json({
          status: 'success',
          message: 'Sorry no data',
          data: []
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};


exports.getOne = Model => async function (req, res) {
  try {
    let doc = await Model.findAll({
      include: [
        {
          model: room,
          attributes: ['roomName', 'costPerHour']
        },
        {
          model: client,
          attributes: ['name', 'email', 'phone', 'credit']
        }
      ],
      where: {
        id: req.params.id
      }
    });
    if (doc.length > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Get One Data',
        data: doc
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Sorry no data',
        data: []
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.createOne = Model => async function (req, res) {
  try {
    let doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Created success',
      data: doc
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.updateOne = Model => async function (req, res) {
  try {
    let doc = await Model.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({
      status: 'success',
      message: 'Updated success',
      data: doc
    });

  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.deleteOne = Model => async function (req, res) {
  try {
    await Model.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({
      status: 'success',
      message: 'Deleted success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};



