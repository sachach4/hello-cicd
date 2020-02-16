const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/auth");

router.post("/signup", auth_controller.signup);
router.post("/login", auth_controller.login);
router.get("/logout", function(req, res) {
    res.clearCookie("token").sendStatus(200)
});

module.exports = router;
