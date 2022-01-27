const { Router } = require('express');
const authController = require('../controllers/AuthControllers');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/user', auth, AuthController.get_user);

module.exports = router;