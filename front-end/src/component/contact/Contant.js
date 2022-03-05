import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Contact.css";
function Contant() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const UsernameFunction = (u) => {
    setUserName(u.target.value);
  };
  const emailFunction = (u) => {
    setEmail(u.target.value);
  };
  const contentFunction = (u) => {
    setMessage(u.target.value);
  };
  const sendDate = () => {
    axios
      .post("http://localhost:5000/contact", {
        userName,
        email,
        message,
      })
      .then((result) => {
        setUserName("");
        setEmail("");
        setMessage("");
        console.log(result);
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
          title: `${result.data.message}`,
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
      <div className="containert">
        <span className="big-circle"></span>
        <img src="images/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="images/location.png" className="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="images/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="images/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="s">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#s">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="s#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#s">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <div id="s">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  value={userName}
                  placeholder="name"
                  className="input"
                  onChange={UsernameFunction}
                />

                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  placeholder="email"
                  className="input"
                  onChange={emailFunction}
                />

                <span>Email</span>
              </div>

              <div className="input-container textarea">
                <textarea
                  placeholder="message"
                  value={message}
                  className="input inputs"
                  onChange={contentFunction}
                ></textarea>

                <span>Message</span>
              </div>
              <button onClick={sendDate} className="btnSend">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contant;
