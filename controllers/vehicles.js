// grabbing from data
const vehicles = require('../data/vehicles');

// lists the  comments
const vehicleList= (req,res) => {
    res.json(vehicles)
}

// find the id and shows the params

const show = (req,res) =>{
    res.json(vehicles.find(comment => vehicles._id == req.params));
}

// this is where we create new comments. 
const create = (req,res) => {
    let payload = req.body;
    payload._id = 1;

    vehicles.map(vehicles => {
        vehicles_id = vehicles._id +1;
    })
    vehicles.push(payload);
    res.json(vehicles);
}

module.exports = {vehicleList, show, create}