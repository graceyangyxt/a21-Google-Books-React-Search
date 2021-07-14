const db = require("../models");
const axios =require ('axios');
module.exports = {
    findAll: function(req,res) {
        const {query:params} = req;
        console.log("inside findall"+req)
        axios.get(`https://www.googleapis.com/${params}/v1/volumes`)
        .then(data=>{console.log(data)})
        .catch(err => res.status(422).json(err))
    },
    
}