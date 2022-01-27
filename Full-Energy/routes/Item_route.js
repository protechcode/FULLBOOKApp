const { Router } = require('express');
const itemController = require('../controllers/ItemController');
const router = Router();

router.get('/items', ItemController.get_items);
router.post('/items',ItemController.post_item);
router.put('/items/:id',ItemController.update_item);
router.delete('/items/:id',ItemController.delete_item);

module.exports = router;