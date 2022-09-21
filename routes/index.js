const express = require("express")
const router = express.Router()

let send_email = require("../controllers/send-email")

router.post("/forget-password", send_email)

module.exports = router