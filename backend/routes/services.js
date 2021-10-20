const router = require('express').Router();
const uploader = require('../lib/multer');
const { createService } = require('../controllers/servicesController');

router.post('/', uploader.single('image'), createService);
router.get('/', async (req, res) => {
  res.send('Hello');
});

module.exports = router;
