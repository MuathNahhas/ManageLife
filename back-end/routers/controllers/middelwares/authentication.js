const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        message: `Forbidden`,
      });
    }
    const token = req.headers.authorization.split(" ").pop();
    const SECRET = "SECRET";

    jwt.verify(token, SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: `The token is invalid or expired`,
          // err: err,
        });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      // err: err,
    });
  }
};

module.exports = authentication;