const connection = require("../../db/db");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  const { FirstName, LastName, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const RequestInformation = [FirstName, LastName, email, hashPassword];
  const checkEmail = [email];
  const selectEmail =
    "select email from users u where email in(select distinct email from users where u.email=?)";

  const insertQuery =
    "INSERT INTO users (FirstName,LasttName,email,password) values(?,?,?,?)";
  connection.query(selectEmail, checkEmail, (err, result) => {
    if (result[0]) {
      return res.status(500).json({
        success: false,
        message: "User ALREADY EXISTED",
      });
    } else {
      connection.query(insertQuery, RequestInformation, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err,
          });
        }
        return res.status(200).json({
          success: true,
          message: "Success Add User",
          result: result,
        });
      });
    }
  });
};
module.exports = { createUser };
