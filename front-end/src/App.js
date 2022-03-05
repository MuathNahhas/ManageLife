import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contant from "./component/contact/Contant";
import Home from "./component/home/Home";
import NavBar from "./component/navBat/NavBar";
import Footer from "./component/footer/Footer";
import Login from "./component/login/Login";
import SignUp from "./component/signUp/SignUp";
import Note from "./component/notes/Note";
import Abouts from "./component/abouts/Abouts";

function App() {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <NavBar token={token} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contant />} />
        <Route exact path="/login" element={<Login setToken={setToken} />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/Abouts" element={<Abouts />} />
        <Route exact path="/note" element={<Note token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
