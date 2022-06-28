// using express and getting our router from there. Anything exported from contacts will go into {comments}
const express = require('expresss');
const router = express.Router();
const commentsControllers = require('../controllers/comments');

router.get('/comments', commentsControllers.list);

router.get('/comment/:id', commentsControllers.show);

router.post('/comments', commentsControllers.create);

// we are exporting the router!
module.exports = router;