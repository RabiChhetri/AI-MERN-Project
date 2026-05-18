const express = require("express");
const { googleAuth, logOut } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/google", googleAuth);
router.post("/logout", logOut);

module.exports = router;