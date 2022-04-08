import React from "react";
import Property1Default from "../Property1Default";
import Property1DefaultHoverFalse2 from "../Property1DefaultHoverFalse2";
import Property1DefaultHoverFalse3 from "../Property1DefaultHoverFalse3";
import "./Home.css";

function Home(props) {
  const {
    iemp,
    hero_Headline,
    hero_Text,
    property1DefaultProps,
    property1DefaultHoverFalse2Props,
    property1DefaultHoverFalse3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="nero_-nav-bar">
          <div className="overlap-group-1">
            <div className="iemp x18pt---bold---monserrat">{iemp}</div>
            <Property1Default>{property1DefaultProps.children}</Property1Default>
            <Property1DefaultHoverFalse2>{property1DefaultHoverFalse2Props.children}</Property1DefaultHoverFalse2>
          </div>
        </div>
        <h1 className="hero_headline x48pt---bold---monserrat">{hero_Headline}</h1>
        <div className="hero_text x24pt---thin---monserrat">{hero_Text}</div>
        <Property1DefaultHoverFalse3>{property1DefaultHoverFalse3Props.children}</Property1DefaultHoverFalse3>
      </div>
    </div>
  );
}

export default Home;
