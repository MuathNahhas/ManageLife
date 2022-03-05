const connection = require("../../db/db");

const createNote = (req, res) => {
  const userId = req.token.userId;
  const { title, content } = req.body;
  if (title === "" || content === "") {
    return res.json({
      success: false,
      message: "Please Enter Data ",
    });
  } else {
    const requestInformationNote = [userId, title, content];
    const createNoteQuery =
      "INSERT INTO notes(user_id,title,content) values(?,?,?)";
    connection.query(createNoteQuery, requestInformationNote, (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: "hello",
        });
      }
      res.status(200).json({
        success: true,
        message: "The note was created successfully",
        result: result,
      });
    });
  }
};
const getNotesByUserId = (req, res) => {
  const userId = req.token.userId;
  const getNoteOfUserQuery = `SELECT users.user_id,users.FirstName,users.LasttName,notes.id,notes.title,notes.content from users join notes using(user_id) where notes.user_id=${userId} and notes.is_deleted=0`;
  connection.query(getNoteOfUserQuery, (err, result) => {
    if (err) {
      res.status(401).json({
        success: false,
        message: "can't get your notes please try Again",
      });
    }
    res.status(200).json({
      success: true,
      message: "get all notes successfully",
      result: result,
    });
  });
};
const updateNote = (req, res) => {
  const noteId = req.params.noteId;
  const userId = req.token.userId;
  const { title, content } = req.body;
  let newInformation;
  let updateNoteQuery;
  selectInformation = [noteId, userId];
  selectNoteQuery = "select title,content from notes WHERE id=? and user_id=?";
  connection.query(selectNoteQuery, selectInformation, (err, result) => {
    if (result[0].title === title && result[0].content === content) {
      res.json({
        success: false,
        message: "Nothing was Updated",
      });
    } else if (title === "") {
      newInformation = [content, noteId, userId];
      updateNoteQuery = "UPDATE notes SET content=? WHERE id=? and user_id=?";
      connection.query(updateNoteQuery, newInformation, (err, result) => {
        if (err) {
          res.json({
            success: false,
            message: "can't update notes please try Again",
          });
        }
        res.status(200).json({
          success: true,
          message: "The note was updated successfully",
          result: result,
        });
      });
    } else if (content === "") {
      newInformation = [title, noteId, userId];
      updateNoteQuery = "UPDATE notes SET title=? WHERE id=? and user_id=?";
      connection.query(updateNoteQuery, newInformation, (err, result) => {
        if (err) {
          res.json({
            success: false,
            message: "can't update notes please try Again",
          });
        }
        res.status(200).json({
          success: true,
          message: "The note was updated successfully",
          result: result,
        });
      });
    } else {
      newInformation = [title, content, noteId, userId];
      updateNoteQuery =
        "UPDATE notes SET title=?,content=? WHERE id=? and user_id=?";
      connection.query(updateNoteQuery, newInformation, (err, result) => {
        if (err) {
          res.json({
            success: false,
            message: err,
          });
        }
        res.status(200).json({
          success: true,
          message: "The note was updated successfully",
          result: result,
        });
      });
    }
  });
};

const deleteNote = (req, res) => {
  const noteId = req.params.noteId;
  const userId = req.token.userId;
  const numberNoteDeleted = [noteId, userId];
  const deleteNoteQuery =
    "UPDATE notes SET is_deleted=1 WHERE id=? and user_id=?";
  connection.query(deleteNoteQuery, numberNoteDeleted, (err, result) => {
    if (err) {
      res.status(401).json({
        success: false,
        message: "can't delete notes please try Again",
      });
    }
    res.status(200).json({
      success: true,
      message: "The note was deleted successfully",
    });
  });
};
module.exports = { getNotesByUserId, createNote, updateNote, deleteNote };
