const Admin = require('../models/Admin');

const createAdmin = async (req, res) => {
  try {
    const admin = req.body;

    const newAdmin = new Admin(admin);
    await newAdmin.save();
    res.status(200).json({
      message: 'Admin created Successfully',
      result: newAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const isAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const isValidAdmin = await Admin.findOne({ email });
    res.status(200).json({
      message: 'Admin found',
      result: isValidAdmin,
    });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = { createAdmin, isAdmin };
