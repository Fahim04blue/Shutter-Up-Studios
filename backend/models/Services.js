const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  summary: {
    type: String,
  },
  price: {
    type: Number,
  },
  desc1: {
    type: String,
  },
  desc2: {
    type: String,
  },
  desc3: {
    type: String,
  },
  desc4: {
    type: String,
  },
  image: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
