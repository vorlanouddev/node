const express = require("express");
const router = express.Router();

const Validate = require("../middleware/validator/AuthVAlidate");

const controller = require("../controllers/AuthController");
router.post("/Login", Validate.Login, Validate.Check, controller.Login);

router.post(
  "/register",
  Validate.Register,
  Validate.Check,
  controller.Register
);

module.exports = router;
