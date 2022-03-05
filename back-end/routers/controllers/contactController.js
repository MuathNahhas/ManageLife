const connection = require("../../db/db");

const CreateContact = (req, res) => {
  const { userName, email, message } = req.body;
  const detailUser = [userName, email, message];
  const query = "INSERT INTO contacts (user_name,email,message) values(?,?,?)";
  connection.query(query, detailUser, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: "faild",
        massage: "please contact with customer care",
      });
    }
    res.status(200).json({
      success: true,
      message: `thank you,We will contact you as soon as possible`,
      information: result,
    });
  });
};

module.exports = { CreateContact };
