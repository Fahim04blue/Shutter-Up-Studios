const router = require('express').Router();
const {
  createCategory,
  getCategory,
  getCategoryDataById,
} = require('../controllers/categoryController');

router.post('/', createCategory);
router.get('/', getCategory);
router.get('/:id', getCategoryDataById);

module.exports = router;
