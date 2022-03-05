const express = require("express");
const noteRouter = express.Router();
const authentication = require("../controllers/middelwares/authentication");
const {
  getNotesByUserId,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
noteRouter.get("/:userID", authentication, getNotesByUserId);
noteRouter.post("/", authentication, createNote);
noteRouter.put("/:noteId", authentication, updateNote);
noteRouter.delete("/:noteId", authentication, deleteNote);
module.exports = noteRouter;
