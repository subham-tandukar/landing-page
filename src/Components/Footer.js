import React from "react";
import footer from "../img/footer.png";
import appStore from "../img/app-store.png";
import googlePlay from "../img/google-play.png";

const Footer = () => {
  return (
    <>
      <div className="feature-page">
        <div className="uk-grid uk-child-width-1-2@s feature-page-wrapper">
          <div
            className="left"
            uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
          >
            <div>
              <img src={footer} alt="" />
            </div>
          </div>

          <div className="right">
            <div uk-scrollspy="cls: uk-animation-fade; delay: 1200; repeat: true">
              <div className="uk-margin-bottom">
                <img src={appStore} alt="" className="icon" />
              </div>
              <div className="uk-margin-bottom">
                <img src={googlePlay} alt="" className="icon" />
              </div>
            </div>
            <h3 uk-scrollspy="cls: uk-animation-slide-left; delay: 600; repeat: true">
              <span>Download</span> Now
            </h3>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 900; repeat: true">
              Available on Playstore !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
