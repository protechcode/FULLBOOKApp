const { Router } = require('express');
const orderController = require('../controllers/OrderController');
const router = Router();

router.get('/order/',orderController.get_orders);
router.post('/order/new',orderController.create_order);

module.exports = router;