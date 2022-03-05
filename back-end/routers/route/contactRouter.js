const express = require("express");
const contactRouter = express.Router();
const { CreateContact } = require("../controllers/contactController");
contactRouter.post("/", CreateContact);
module.exports = contactRouter;
