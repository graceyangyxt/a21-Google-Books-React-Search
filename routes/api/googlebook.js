const router = require("express").Router();
const googleBookController = require("../../controllers/googlebookController");

router.route("/")
.get(googleBookController.findAll)

module.exports= router;
