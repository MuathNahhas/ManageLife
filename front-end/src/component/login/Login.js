import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const checkEmail = (e) => {
    setEmail(e.target.value);
  };
  const checkpassword = (e) => {
    setPassword(e.target.value);
  };
  const endData = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.data.success === true) {
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);

          navigate("/home");
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: `${result.data.message}`,
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: `${result.data.message}`,
          });
        }
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: `${error}`,
        });
      });
  };
  return (
    <div>
      <div className="containers">
        <div className="popup" id="login">
          <div className="containere" id="container">
            <div className="form-container log-in-container">
              <div className="dies">
                <h1>Login</h1>
                <div className="social-container">
                  <a href="#d" className="social">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                  <a href="#d" className="social">
                    <i className="fab fa fa-twitter fa-2x"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" onChange={checkEmail} />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={checkpassword}
                />
                <a href="g">Forgot your password?</a>
                <button onClick={endData}>Log In</button>
              </div>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>Welcome</h1>
                  <p>
                    Welcome! We hope you’ll always feel free to speak up, share
                    your thoughts and challenge us. We’re all going to grow
                    together here, and we look forward to it
                  </p>
                </div>
              </div>
              <a className="popup__close" href="d">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
