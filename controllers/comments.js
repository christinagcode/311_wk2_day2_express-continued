// grabbing from data
const comments = require('../data/comments');

// lists the  comments
const commentList= (req,res) => {
    res.json(comments)
}

// find the id and shows the params

const show = (req,res) =>{
    res.json(comments.find(comment => comments._id == req.params));
}

// this is where we create new comments. 
const create = (req,res) => {
    let payload = req.body;
    payload._id = 1;

    comments.map(comment => {
        comment._id = comment._id +1;
    })
    comments.push(payload);
    res.json(comments);
}

module.exports = {commentsList, show, create}