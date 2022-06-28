// using express and getting our router from there. Anything exported from contacts will go into {comments}
const express = require('expresss');
const router = express.Router();
const contactsControllers = require('../controllers/contacts');

router.get('/contacts', contactsControllers.list);

router.get('/contacts/:id', contactsControllers.show);

router.post('/contacts', contactsControllers.create);

// we are exporting the router!
module.exports = router;