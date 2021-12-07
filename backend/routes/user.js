const router = require('express').Router();
const {
  createUser,
  getSpecificUser,
  makeAdmin,
} = require('../controllers/userController');

router.post('/', createUser);
router.post('/makeAdmin', makeAdmin);
router.get('/', getSpecificUser);
// router.post('/:id', updateBookingStatus);

module.exports = router;
