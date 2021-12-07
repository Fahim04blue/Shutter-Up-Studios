const Booking = require('../models/Booking');
const User = require('../models/User');
const stripe = require('../lib/stripe');

const createBooking = async (req, res) => {
  try {
    const user = User.findOne({ email: req.user });
    const booking = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'BDT',
            unit_amount: booking.packageInfo.price * 100,
            product_data: {
              name: booking.packageInfo.name,
              // category: booking.packageInfo.category,
            },
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/dashboard/bookingList',
      cancel_url: 'http://localhost:3000/services',
      customer: user.stripeCustomerId,
    });

    const newBooking = new Booking({
      ...booking,
      stripeSessionId: session.id,
    });
    await newBooking.save();
    res.status(200).json({
      message: 'Booking created Successfully',
      result: { newBooking, sessionUrl: session.url },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookings = async (req, res) => {
  let query;
  const reqQuery = { ...req.query };
  query = Booking.find(reqQuery);

  if (req.query.email) {
    query;
  } else {
    query = Booking.find();
  }
  try {
    const bookings = await query;
    res.status(200).json({
      message: req.query.email
        ? `Bookings of ${req.query.email}`
        : `All Bookings`,
      result: bookings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const payment = async (req, res) => {
  try {
    const user = User.findOne({ email: req.user });
    const sessions = await stripe.checkout.sessions.retrieve(req.params.id);
    res.status(200).json({
      message: `All checkout sessions of ${req.user}`,
      result: sessions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { eventStatus } = req.body;
    await Booking.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { eventStatus } }
    );
    res.status(200).json({
      message: `Booking updated`,
      result: eventStatus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
  payment,
};
