const catchAsync = require('./../helper/catchAsync');
const AppError = require('./../helper/appError');


exports.getAll = Model => async function (req, res) {
  try {
    await Model.findAll({
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
      limit: 1,
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

exports.getOneQuery = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findAll({
      id: req.params.id,
      attributes: {
        exclude: ['password']
      }
    });
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: doc
    });
  });

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



