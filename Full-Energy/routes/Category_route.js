const { Router } = require('express');
const categoryController = require('../controllers/CategoryController');
const router = Router();

router.get('/categories', categoryController.get_categories);
router.post('/categories',categoryController.post_category);
router.put('/categories/:id',categoryController.update_category);
router.delete('/categories/:id',categoryController.delete_category);

module.exports = router;