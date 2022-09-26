import React from "react";
import feature3 from "../img/feature3.png";
import complain from "../img/complain.png";

const Feature3 = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={feature3} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <img src={complain} alt="" className="icon" />
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              Apply <span>Complain</span>
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              To provide complaints of neighbors and information to
              organizations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature3;
