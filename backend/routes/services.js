const router = require('express').Router();
const uploader = require('../lib/multer');
const {
  createService,
  getService,
  getServiceById,
  deleteService,
} = require('../controllers/servicesController');

router.post('/', uploader.single('image'), createService);
router.get('/', getService);
router.get('/:id', getServiceById);
router.delete('/:id', deleteService);

module.exports = router;
