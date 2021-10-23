const router = require('express').Router();

router.use('/services', require('./services'));
router.use('/reviews', require('./reviews'));

module.exports = router;
