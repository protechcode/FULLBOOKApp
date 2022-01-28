const { Router } = require('express');
const userController = require('../controllers/UserController');
const router = Router();

router.get('/users', userController.get_users);
router.get('/users/:id', userController.get_user);
router.post('/users',userController.post_user);
router.put('/users/:id',userController.update_user);
router.delete('/users/:id',userController.delete_user);

module.exports = router;