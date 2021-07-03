const db = require("../models");

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
}