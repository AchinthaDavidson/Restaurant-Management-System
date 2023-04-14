const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/details", userController.getUser);
router.put("/details", userController.updateUser);

module.exports = router;
