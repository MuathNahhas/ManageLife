import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="title ">
          <h1 className="section-title">About</h1>
        </div>
        <div className="content">
          <div className="column col-left ">
            <div className="img-card">
              <img src="./images/home.png" alt="home" />
            </div>
          </div>
          <div className="column col-right">
            <h3 className="content-title">
              {" "}
              Increase the creativity and your thoughts using our fully hosted
              online Notes software.
            </h3>
            <hr />
            <p>
              When your mind’s swarming with loose ends to tie, writing them
              down helps you reduce your cluttered thoughts, which reduces
              stress. It’s also a great way to set aside your overwhelm so that
              you can focus on the task at hand
            </p>
            <Link className="buttons button-primarys" to="/Abouts">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
