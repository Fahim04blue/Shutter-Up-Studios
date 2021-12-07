const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

module.exports = stripe;
