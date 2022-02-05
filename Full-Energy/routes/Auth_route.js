const { Router } = require('express');
const authController = require('../controllers/AuthControllers');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/user', auth, authController.get_user);
router.get('/',authController.hello);
//3rd route router.post('/user',auth, authController.get_user); needs Header 'x-auth-token'
module.exports = router;