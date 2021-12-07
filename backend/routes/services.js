const router = require('express').Router();
const uploader = require('../lib/multer');
const {
  createService,
  getService,
  getServiceById,
  updateServiceById,
  deleteService,
} = require('../controllers/servicesController');
const auth = require('../middlewares/auth');

router.post('/', uploader.single('image'), createService);
router.get('/', auth, getService);
router.get('/:id', getServiceById);
router.patch('/:id', uploader.single('image'), updateServiceById);
router.delete('/:id', deleteService);

module.exports = router;
