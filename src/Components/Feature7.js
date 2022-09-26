import React from "react";
import feature7 from "../img/feature7.png";
import news from "../img/news.png";

const Feature7 = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={feature7} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <img src={news} alt="" className="icon" />
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              <span>News</span> Portal
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              To view news and blogs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature7;
