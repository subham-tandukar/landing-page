import React from "react";
import feature2 from "../img/feature2.png";
import notice from "../img/notice.png";

const Feature2 = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={feature2} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <img src={notice} alt="" className="icon" />
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              <span>Notice</span>
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              To informed about the events and activities of the society.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature2;
