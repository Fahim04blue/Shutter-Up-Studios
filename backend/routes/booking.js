const router = require('express').Router();
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  payment,
} = require('../controllers/bookingController');
const auth = require('../middlewares/auth');

router.post('/', auth, createBooking);
router.get('/', getBookings);
router.get('/sessions/:id', auth, payment);
router.patch('/:id', updateBookingStatus);

module.exports = router;
