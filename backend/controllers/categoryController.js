const Category = require('../models/Category');

const createCategory = async (req, res) => {
  try {
    const category = req.body;

    const newCategory = new Category(category);
    await newCategory.save();
    res.status(200).json({
      message: 'Category created Successfully',
      result: newCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate('services');
    res.status(200).json({
      message: 'All Category',
      result: categories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryDataById = async (req, res) => {
  try {
    const categoryByID = await Category.findById({
      _id: req.params.id,
    }).populate('services');
    res.status(200).json({
      message: 'Category Data by ID',
      result: categoryByID,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createCategory, getCategory, getCategoryDataById };
