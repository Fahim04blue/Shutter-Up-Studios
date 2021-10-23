const Review = require('../models/Reviews');

const createReview = async (req, res) => {
  try {
    const review = req.body;

    const newReview = new Review(review);
    await newReview.save();
    res.status(200).json({
      message: 'Review created Successfully',
      result: newReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReview = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      message: 'All Services',
      result: reviews,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReview, getReview };
