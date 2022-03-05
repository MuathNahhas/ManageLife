const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
require("../back-end/db/db");

const contactRouter = require("./routers/route/contactRouter");
const signUpRouter = require("./routers/route/signUpRouter");
const loginRouter = require("./routers/route/loginRouter");
const noteRouter = require("./routers/route/noteRouter");
//Rouer
app.use("/contact", contactRouter);
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/getNote", noteRouter);
app.use("/createNote", noteRouter);
app.use("/updateNote", noteRouter);
app.use("/deleteNote", noteRouter);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
