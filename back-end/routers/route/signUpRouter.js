const express = require("express");
const signUpRouter = express.Router();
const { createUser } = require("../controllers/signUpController");
signUpRouter.post("/", createUser);
module.exports = signUpRouter;
