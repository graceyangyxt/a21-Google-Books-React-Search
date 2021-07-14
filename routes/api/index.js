const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");
const googleBookRoutes = require("./googlebook");

router.use("/books", booksRoutes);
router.use("/googlebook", googleBookRoutes);

module.exports= router;