const router = require('express').Router();

router.use('/services', require('./services'));
router.use('/reviews', require('./reviews'));
router.use('/category', require('./category'));
router.use('/booking', require('./booking'));
router.use('/user', require('./user'));

module.exports = router;
