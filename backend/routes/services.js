const router = require('express').Router();
const uploader = require('../lib/multer');
const {
  createService,
  getService,
  getServiceById,
  updateServiceById,
  deleteService,
} = require('../controllers/servicesController');

router.post('/', uploader.single('image'), createService);
router.get('/', getService);
router.get('/:id', getServiceById);
router.patch('/:id', uploader.single('image'), updateServiceById);
router.delete('/:id', deleteService);

module.exports = router;
