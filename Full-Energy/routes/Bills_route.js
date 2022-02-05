const { Router } = require('express');
const billController = require('../controllers/BillsController');
const router = Router();

router.get('/bills', billController.get_bills);
router.post('/bills',billController.post_bill);
router.put('/bills/:id',billController.update_bill);
router.delete('/bills/:id',billController.delete_bill);

module.exports = router;