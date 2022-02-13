const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');


const roomRoutes = require('./routes/roomRoutes');
const clientRoutes = require('./routes/clientRoutes');
const roomUsageRoutes = require('./routes/roomUsageRoutes');
const userRoutes = require('./routes/userRoutes');



dotenv.config();

const app = express();


app.use(cors());


app.options('*', cors());


// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/assets/imageroom', express.static(path.join(__dirname, 'assets/imageroom')));


// // Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!'
// });
// app.use('/api/v1', limiter);

// Body Parser
app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '10kb' }));


// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// ROUTE


app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/clients', clientRoutes);
app.use('/api/v1/roomusage', roomUsageRoutes);
app.use('/api/v1/users', userRoutes);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));

} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Your Server running in ${process.env.NODE_ENV} mode on port ${PORT} 🔥...`));

