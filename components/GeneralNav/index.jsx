import React from "react";
import Backgrounds from "../Backgrounds";
import "./GeneralNav.css";

function GeneralNav(props) {
  const { backgroundsProps } = props;

  return (
    <div className="general-nav-1">
      <div className="overlap-group-5 x18pt---bold---monserrat">
        <div className="iemp-3">IEMP</div>
        <img className="icon-notifications-2" src="/img/group-11@2x.svg" />
        <div className="logout-2">Logout</div>
      </div>
      <Backgrounds className={backgroundsProps.className} />
    </div>
  );
}

export default GeneralNav;
