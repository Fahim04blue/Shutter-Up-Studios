const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', routes);

app.use(errorHandler);

app.listen(8080, () => {
  console.log('App listening at port 8080');
});
