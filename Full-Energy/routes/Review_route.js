const { Router } = require('express');
const reviewController = require('../controllers/ReviewController');
const router = Router();

router.get('/reviews', reviewController.get_reviews);
router.get('/reviews/:id', reviewController.get_review);
router.put('/reviews/:id', reviewController.update_review);
router.post('/reviews',reviewController.post_review);
router.delete('/reviews/:id',reviewController.delete_review);

module.exports = router;