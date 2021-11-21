const router = require('express').Router();

router.use('/services', require('./services'));
router.use('/reviews', require('./reviews'));
router.use('/category', require('./category'));
router.use('/admin', require('./admin'));

module.exports = router;
