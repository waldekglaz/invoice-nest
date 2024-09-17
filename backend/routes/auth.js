const express = require("express");
const passport = require("passport");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", passport.authenticate("jwt", { session: false }), getUser);

module.exports = router;
