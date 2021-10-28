const router = require('express').Router();
const { createAdmin, isAdmin } = require('../controllers/adminController');

router.post('/', createAdmin);
router.post('/isAdmin', isAdmin);
