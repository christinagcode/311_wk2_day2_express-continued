// grabbing from data
const contacts = require('../data/contacts');

// lists the  comments
const contactList= (req,res) => {
    res.json(contacts)
}

// find the id and shows the params

const show = (req,res) =>{
    res.json(contacts.find(comment => contacts._id == req.params));
}

// this is where we create new comments. 
const create = (req,res) => {
    let payload = req.body;
    payload._id = 1;

    contacts.map(contacts => {
        contacts_id = contacts._id +1;
    })
    contacts.push(payload);
    res.json(contacts);
}

module.exports = {contactList, show, create}