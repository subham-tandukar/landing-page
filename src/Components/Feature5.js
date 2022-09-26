import React from "react";
import feature5 from "../img/feature5.png";
import management from "../img/management.png";

const Feature5 = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={feature5} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <img src={management} alt="" className="icon" />
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              <span>Management</span>
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              To view information about the Management Team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature5;
