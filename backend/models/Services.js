const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    summary: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: [
      {
        name: { type: String },
      },
    ],

    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
