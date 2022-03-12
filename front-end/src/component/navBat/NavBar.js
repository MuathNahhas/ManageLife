import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserContext } from "../../App";
function NavBar() {
  const token = useContext(UserContext);
  const [LogedIn, setLogedIn] = useState(
    <a className="btn btn-light action-button button" href="/login/#login">
      Logout
    </a>
  );

  const IsLogedIn = () => {
    if (!token) {
      setLogedIn(
        <>
          <a
            className="btn btn-light action-button button"
            href="/login/#login"
          >
            Login
          </a>

          <a
            className="btn btn-light action-button button"
            href="/SignUp/#signUp"
          >
            SignUp
          </a>
        </>
      );
    } else {
      setLogedIn(
        <a
          className="btn btn-light action-button button"
          onClick={() => {
            localStorage.setItem("token", "");
            return false;
          }}
          href="/login/#login"
        >
          Logout
        </a>
      );
    }
  };
  useEffect(() => {
    IsLogedIn();
  }, [token]);

  return (
    <div className="NavBar">
      <div>
        <div className="header-blue">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <img
              src="./images/Work-life-Balance.png"
              style={{ width: "60px", height: "60px", marginLeft: "50px" }}
              alt=""
            />
            <div className="container">
              <Link className="navbar-brand" to="#">
                Manage Life
              </Link>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/Abouts">
                      About
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {token && (
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link active" to="/note">
                        My Notes
                      </Link>
                    </li>
                  )}
                </ul>
                <form className="form-inline mr-auto" target="_self">
                  <div className="form-group">
                    <label htmlFor="search-field">
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </label>
                    <input
                      className="form-control search-field"
                      type="search"
                      name="search"
                      id="search-field"
                    />
                  </div>
                </form>

                {LogedIn}
              </div>
            </div>
          </nav>
          <div className="container hero">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-5   ">
                <h1>The revolution is here.</h1>
                <p>
                  Mauris egestas tellus non ex condimentum, ac ullamcorper
                  sapien dictum. Nam consequat neque quis sapien viverra
                  convallis. In non tempus lorem.
                </p>
                <button
                  className="btn btn-light btn-lg action-button"
                  type="button"
                >
                  Learn More
                </button>
              </div>
              <div className="col-md-5 col-lg-7 offset-lg-12 d-none d-lg-block phone-holder">
                <div className="iphone-mockup">
                  <img
                    src="https://miro.medium.com/max/1200/1*w92wMLwBGlgfhIDa-AhGmg.png"
                    className="device"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
