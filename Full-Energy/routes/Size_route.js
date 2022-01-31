const { Router } = require('express');
const sizeController = require('../controllers/SizeController');
const router = Router();

router.get('/sizes', sizeController.get_sizes);
router.get('/size/:id', sizeController.get_size);


router.post('/size',sizeController.post_size);

router.put('/size/:id',sizeController.update_size);
router.delete('/size/:id',sizeController.delete_size);

router.get('/mario',sizeController.hello);

module.exports = router;