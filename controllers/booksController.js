const db = require("../models");
const axios =require ('axios');
module.exports = {
    findAll: function(req,res) {
        db.Book
        .find()
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Book
          .findById(req.params.id)
          .then(data=>res.json(data))
          .catch(err=>res.status(400).json(err));
    },
    searchAll: function(req,res){
        console.log(req.params)
        const {query:params} = req;
        console.log(params)
        axios.get("https://www.googleapis.com/books/v1/volumes",{params})
          .then(result=>{console.log(result)})
    }
}