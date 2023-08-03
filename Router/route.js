const express = require("express")
const router = express.Router()

const UtcAndUnix = require("../Controllers/UtcAndUnix")
const currentTime = require("../Controllers/currentTime")

router.route("/api/:date").get(UtcAndUnix)
router.route("/api").get(currentTime)

module.exports = router