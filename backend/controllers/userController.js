const dotenv = require('dotenv');
const stripe = require('../lib/stripe');
const User = require('../models/User');

dotenv.config();

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(404).json({ message: 'User already exists' });

    const customer = await stripe.customers.create(
      { email },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );

    const newUser = await User.create({
      email,
      name,
      stripeCustomerId: customer.id,
    });

    res.status(200).json({
      message: 'User created Successfully',
      result: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSpecificUser = async (req, res) => {
  let query;
  const reqQuery = { ...req.query };
  query = User.find(reqQuery);

  if (req.query.email) {
    query;
  } else {
    query = User.find();
  }
  try {
    const existingUser = await query;
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });
    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const makeAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    await User.updateOne(existingUser, { $set: { role: 'admin' } });
    res.status(200).json({
      message: 'Role Updated',
      result: existingUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getSpecificUser, makeAdmin };
