const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/userModel');
const catchAsync = require('./../helper/catchAsync');
const AppError = require('./../helper/appError');


const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, req, res) => {

  const token = signToken(user.id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: user

  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findAll({
      where: { email },
    });
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) return res.status(400).json({
      status: 'error',
      message: 'Wrong Password try again',
    });
    if (user && match) {
      createSendToken(user, 200, req, res);
    }

  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Email not found',
    });
  }
};


exports.protect = catchAsync(async (req, res, next) => {

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }
  if (token == null) return res.sendStatus(401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await users.findAll(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  req.user = currentUser;
  res.locals.user = currentUser;

  next();
}); 