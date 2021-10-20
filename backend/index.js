const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

app.use(express.json());
connectDB();

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ error: err });
};

app.use(errorHandler);

app.listen(8080, () => {
  console.log('App listening at port 8080');
});
