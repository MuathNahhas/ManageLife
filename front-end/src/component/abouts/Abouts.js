import React from "react";
import { Link } from "react-router-dom";
import "./Abouts.css";
function Abouts() {
  return (
    <div>
      <div className="ct-pageWrapper" id={'ct-js-wrapper'}>
        <section
          className="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding"
          id="section"
        >
          <div className="container text-center">
            <h2>WHAT Manage Life</h2>
            <h3>Why you should use this website </h3>
            <div>
              <div className="red-border"></div>
              <p className="ct-u-size22 ct-u-fontWeight300 marginTop40 ">
                Do you sometimes struggle to determine what to write down during
                lectures? Have you ever found yourself wishing you could take
                better or more effective notes? Whether you are sitting in a
                lecture hall or watching a lecture online, note-taking in class
                can be intimidating, but with a few strategic practices, anyone
                can take clear, effective notes. This handout will discuss the
                importance of note-taking, qualities of good notes, and tips for
                becoming a better note-taker.
              </p>
              <button
                className="btn btn-light btn-lg action-button"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <div className="testimonial4 py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 align-self-center">
                <h3>Thousands of Women are Happy Using Our Products</h3>
                <div className="owl-carousel owl-theme testi4 mt-4">
                  <div className="item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h6 className="mt-4 mb-0 font-weight-normal">
                      Michelle Anderson
                    </h6>
                    <span>Partner, Brevin</span>
                  </div>

                  <div className="item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <img
                  src="https://www.chegg.com/study-101/wp-content/uploads/sites/7/2017/10/note-taking-1.jpg"
                  alt="wrapkit"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="testimonial4 py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <img
                  src="https://i1.wp.com/theminimalplan.com/wp-content/uploads/2020/08/theminimalplan-taking-notes-effectively-02.jpg?fit=1104%2C735&ssl=1"
                  alt="wrapkit"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-7 align-self-center">
                <h3>Thousands of Women are Happy Using Our Products</h3>
                <div className="owl-carousel owl-theme testi4 mt-4">
                  <div className="item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h6 className="mt-4 mb-0 font-weight-normal">
                      Michelle Anderson
                    </h6>
                    <span>Partner, Brevin</span>
                  </div>

                  <div className="item">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h6 className="mt-4 mb-0 font-weight-normal">
                      Michelle Anderson
                    </h6>
                    <span>Partner, Brevin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <main>
        <section id="Workflow">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="section-title">
                  <h2 className="text-center">How It Workflow?</h2>
                  <p className="text-center">
                    <i>
                      You must follow these steps so that you can benefit from
                      the services available on the site and you will have the
                      ability to share your suggestions and tips to improve the
                      ability to record notes
                    </i>
                  </p>
                </div>
                <hr className="border-white mb-4 mt-4" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="work-process">
                  <i className="fas fa-file-alt"></i>
                  <h3>
                    <Link to="#">Enter Your Move Info</Link>
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, The majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-process">
                  <i className="fas fa-envelope-open-text"></i>
                  <h3>
                    <Link to="#">Get Free Quotes</Link>
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-process">
                  <i className="fas fa-copy"></i>
                  <h3>
                    <Link to="#">Compare Pricing & Services</Link>
                  </h3>
                  <p>
                    Many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="site-section pt-0">
        <div className="containerdd">
          <div className="">
            <div className="title">
              <h2 className="section-title">
                Self <strong>Improvement</strong>
              </h2>
            </div>
          </div>
          <div className="rows">
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-user">01</span>
                <h5>Take an honest look at yourself.</h5>
                <p>Explore deepening levels of self-awareness.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-money">02</span>
                <h5>Recognize and acknowledge a need for change</h5>
                <p>
                  Identify and own up to a habit, trait, or pattern that is
                  preventing you from going forward
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-glass">03</span>
                <h5>Pray to God.</h5>
                <p>
                  Reach out for things that are most needed for positive change.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step last">
                <span className="wrap-icon icon-trophy">04</span>
                <h5>Begin a new life.</h5>
                <p>
                  Abstain from the old life and discover the new. Choose it,
                  live it in God, and keep going forward..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
