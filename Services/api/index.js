const express = require("express");
const router = express.Router();

require("./routes/about")(router);

module.exports = router;
