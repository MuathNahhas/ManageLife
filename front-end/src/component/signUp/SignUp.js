import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../login/Login.css";
function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLasttName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const firstNameData = (f) => {
    setFirstName(f.target.value);
  };
  const lastNameData = (l) => {
    setLasttName(l.target.value);
  };
  const emailData = (e) => {
    setEmail(e.target.value);
  };
  const passwordData = (p) => {
    setPassword(p.target.value);
  };
  const sendDate = () => {
    axios
      .post("http://localhost:5000/signUp", {
        FirstName: firstName,
        LastName: lastName,
        email,
        password,
      })
      .then((result) => {
        setFirstName("");
        setLasttName("");
        setEmail("");
        setPassword("");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `${result.data.message} Go to login Page`,
        });
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: `${error.data.message}`,
        });
      });
  };
  return (
    <div>
      <div className="containers">
        <div className="popup" id={"signUp"}>
          <div className="containere" id="container">
            <div className="form-container log-in-container">
              <div className="dies">
                <h1>Sign Up</h1>
                <br /> <br />
                <input
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  onChange={firstNameData}
                />
                <input
                  type="text"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={lastNameData}
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={emailData}
                  value={email}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={passwordData}
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Confirm Password"
                />
                <button onClick={sendDate}>Sign Up</button>
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
              <Link className="popup__close" to="d">
                X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
