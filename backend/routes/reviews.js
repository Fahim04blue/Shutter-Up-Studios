const router = require('express').Router();
const { createReview, getReview } = require('../controllers/reviewsController');

router.post('/', createReview);
router.get('/', getReview);

module.exports = router;
