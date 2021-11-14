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
  let query;
  const reqQuery = { ...req.query };

  console.log(req.query);
  if (req.query.name) {
    query = Category.find(reqQuery);
  } else {
    query = Category.find();
  }

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',').join(' ');
    query = query.sort(sortByArr);
  }

  try {
    const categories = await query.populate('services');
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
      services: { _id: req.params.id },
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
