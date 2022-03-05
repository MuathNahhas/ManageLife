import React from "react";
import "./Feature.css";
function Feature() {
  return (
    <>
      <div className="services" id="port">
        <div className="containerr">
          <div className="title ">
            <h1 className="section-title">Amazing Features</h1>
            <p>
              Taking notes gives you the opportunity to highlight key points and
              details that might otherwise slip your mind, and you never know
              when these fragments of knowledge will come in handy!
            </p>
          </div>
          <div className="services-content">
            <div className="card-1">
              <img src="./images/features-1.jpeg" alt="" />
              <div className="info-1">
                <h2>It relieves stress</h2>
                <p>
                  When your mind’s swarming with loose ends to tie, writing them
                  down helps you reduce your cluttered thoughts, which reduces
                  stress. It’s also a great way to set aside your overwhelm so
                  that you can focus on the task at hand.
                </p>
              </div>
            </div>
            <div className="card-1">
              <img src="./images/features-2.jpeg" alt="" />
              <div className="info-1">
                <h2>It helps keep your schedule in tact</h2>
                <p>
                  I’ve found that taking notes throughout my workday is the best
                  way to stay focused on my to-do list. So many requests come to
                  us from so many directions–emails, phone calls, text
                  messages–that it becomes hard not to get sucked into the
                  busy-but-not-productive whirlwind this creates.
                </p>
              </div>
            </div>
            <div className="card-1">
              <img src="./images/features-3.jpeg" alt="" />
              <div className="info-1">
                <h2>Taking notes makes you look good</h2>
                <p>
                  It shows you care and that you’re fully present during the
                  learning process. Taking notes is a subtle action that reveals
                  much about a person’s character: patience, determination, and
                  attention to detail. It also shows you’re efficient and don’t
                  allow what’s important to fall through the cracks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Feature;
