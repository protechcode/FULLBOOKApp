const { Router } = require('express');
const orderController = require('../controllers/OrderController');
const router = Router();

router.get('/order/:id',orderController.get_orders);
router.post('/order/:id',orderController.create_order);

module.exports = router;