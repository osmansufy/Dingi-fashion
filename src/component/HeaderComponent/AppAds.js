import React from 'react';
import phoneApp from "../../assets/img/banner-phone.png";
const AppAds = (props) => {
    const isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return (
            navigator.userAgent.match(/IEMobile/i) ||
            navigator.userAgent.match(/WPDesktop/i)
          );
        },
        any: function () {
          return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
          );
        },
      };
      let appClasses = ["appShow"];
  if (props.hide) {
    appClasses = ["appShow", "close"];
  }
  let appLink =
    "https://play.google.com/store/apps/details?id=com.dingi.dailyplus";
  if (isMobile.iOS()) {
    appLink = "https://apps.apple.com/us/app/id1520548400";
  }
    return (
        <div className={appClasses.join(" ")}>
        <div className="d-flex justify-content-center">
          <span onClick={props.clicked} className="appClose">
            X
          </span>
          <a href={appLink} target="_blank">
            {" "}
            <img src={phoneApp} />
          </a>
        </div>
      </div>
    );
};

export default AppAds;