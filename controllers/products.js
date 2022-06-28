// grabbing from data
const products = require('../data/products');

// lists the  comments
const productList= (req,res) => {
    res.json(products)
}

// find the id and shows the params

const show = (req,res) =>{
    res.json(products.find(comment => products._id == req.params));
}

// this is where we create new comments. 
const create = (req,res) => {
    let payload = req.body;
    payload._id = 1;

    products.map(products => {
        products_id = products._id +1;
    })
    products.push(payload);
    res.json(products);
}

module.exports = {productList, show, create}