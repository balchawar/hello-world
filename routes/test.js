/**
 * Load Module Dependencies.
 */
const express = require("express");

let router = express.Router();

let testController = require("../controller/test.controller");

router.get('/healthcheck', testController.healthCheck);

// Expose Resource Router
module.exports = router;