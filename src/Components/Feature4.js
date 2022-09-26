import React from "react";
import feature4 from "../img/feature4.png";
import events from "../img/events.png";

const Feature4 = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={feature4} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <img src={events} alt="" className="icon" />
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              <span>Upcoming</span> Event & Meeting
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              To inform about the events and meetings in the society.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature4;
