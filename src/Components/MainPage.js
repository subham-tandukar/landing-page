import React from "react";
import logo from "../img/logo.png";
import appStore from "../img/app-store.png";
import googlePlay from "../img/google-play.png";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div className="uk-grid uk-child-width-1-2@m main-page-wrapper">
          <div>
            <div
              className="left"
              uk-scrollspy="cls: uk-animation-slide-top; delay: 300; repeat: true"
            >
              <div>
                <img src={logo} alt="logo" className="logo" />
              </div>
              <h2>
                Hami <span>Chhimeki</span>{" "}
              </h2>
              <p className="uk-margin-small-top">Bringing neighbors together</p>

              <div
                className="uk-flex uk-flex-wrap uk-flex-center"
                uk-scrollspy="cls: uk-animation-fade; delay: 900; repeat: true"
              >
                <div>
                  <img src={appStore} alt="" className="pic" />
                </div>
                <div>
                  <img src={googlePlay} alt="" className="pic" />
                </div>
              </div>

              <p className="footer" uk-scrollspy="cls: uk-animation-fade; delay: 1300; repeat: true">
                By Elite Infotech
              </p>
            </div>
          </div>

          <div className="right">
            <h1 uk-scrollspy="cls: uk-animation-slide-left; delay: 700; repeat: true">
              Grand <span>Opening</span>{" "}
            </h1>
            <p uk-scrollspy="cls: uk-animation-slide-left; delay: 1000; repeat: true">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quisquam odit laboriosam architecto voluptatibus modi,
              sit suscipit, ex laudantium maiores est quidem reprehenderit
              consequatur pariatur, consectetur in! Culpa, ratione facilis.
            </p>

            <div
              className="quick-links uk-margin-medium-top"
              uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1300; repeat: true"
            >
              <ul className="uk-list">
                <li>
                  <p>
                    <MdLocationPin
                      color="#db7912"
                      size="1.5em"
                      className="uk-margin-small-right"
                    />
                    Kalimati,Kathmandu
                  </p>
                </li>
                <li>
                  <p>
                    <FaPhoneAlt
                      color="#db7912"
                      size="1.5em"
                      className="uk-margin-small-right"
                    />
                    9866336577,9851073301
                  </p>
                </li>
                <li>
                  <p>
                    <MdEmail
                      color="#db7912"
                      size="1.5em"
                      className="uk-margin-small-right"
                    />
                    Hamichhimekiofficial@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <FaGlobe
                      color="#db7912"
                      size="1.5em"
                      className="uk-margin-small-right"
                    />
                    Hamichhimeki.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
