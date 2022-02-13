const { Router } = require('express');
const orderController = require('../controllers/OrderController');
const router = Router();
router.get('/order',orderController.get_orders);
router.get('/order/:id',orderController.get_order);
router.post('/order',orderController.create_order);

module.exports = router;