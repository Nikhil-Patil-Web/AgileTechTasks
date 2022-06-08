const express = require('express');
const app = express();
const morgan = require('morgan');
//const globalErrorHandler = require('./controllers/errorController');
// const userRouter = require('./routes/userRoutes');
const reportRouter = require('./reportRoutes');

const newLocal = process.env.NODE_ENV === 'development';
// MiddleWare

if (newLocal) {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use('/api/v3/app', reportRouter);


app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find the ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`Can't find the ${req.originalUrl} on this server`, 404));
});



module.exports = app;
