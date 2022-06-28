// using express and getting our router from there. Anything exported from contacts will go into {comments}
const express = require('expresss');
const router = express.Router();
const productsControllers = require('../controllers/products');

router.get('/products', productsControllers.list);

router.get('/products/:id', productsControllers.show);

router.post('/products', productsControllers.create);

// we are exporting the router!
module.exports = router;