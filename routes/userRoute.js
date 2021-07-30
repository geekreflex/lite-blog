const express = require("express");

const { registerUser, loginUser } = require("../controllers/userController");
const { validRegister } = require("../validation/userValidation");

const router = express.Router();

router.post("/register", validRegister, registerUser);
router.post("/login", loginUser);

module.exports = router;
