const { Router } = require('express');
const providerController = require('../controllers/ProviderController');
const router = Router();

router.get('/providers', providerController.get_providers);
router.get('/providers/:id', providerController.get_provider);
router.post('/providers',providerController.post_provider);
router.put('/providers/:id',providerController.update_provider);
router.delete('/providers/:id',providerController.delete_provider);

module.exports = router;