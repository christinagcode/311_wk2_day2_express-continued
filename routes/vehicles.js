// using express and getting our router from there. Anything exported from contacts will go into {comments}
const express = require('expresss');
const router = express.Router();
const vehiclesControllers = require('../controllers/vehicles');

router.get('/vehicles', vehiclesControllers.list);

router.get('/vehicles/:id', vehiclesControllers.show);

router.post('/vehicles', vehiclesControllers.create);

// we are exporting the router!
module.exports = router;