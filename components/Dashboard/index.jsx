import React from "react";
import { Link } from "react-router-dom";
import Backgrounds from "../Backgrounds";
import Graph from "../Graph";
import GraphCost from "../GraphCost";
import Graph2 from "../Graph2";
import Property1DefaultHoverFalse3 from "../Property1DefaultHoverFalse3";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    dashboard,
    aiServices,
    essSchedule,
    anomalyDetection1,
    dataManagement,
    system,
    load,
    rack,
    clock,
    logo_Text,
    logout,
    title1,
    label1,
    cost_Text1,
    label2,
    cost_Text2,
    title2,
    ratio_Text,
    anomalyDetection2,
    address,
    lastAbnormalState,
    backgroundsProps,
    property1DefaultHoverFalse31Props,
    property1DefaultHoverFalse32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <div className="overlap-group5">
          <div className="overlap-group2">
            <Backgrounds>{backgroundsProps.children}</Backgrounds>
            <div className="nav-menu">
              <div className="dashboard-1 valign-text-middle montserrat-bold-rose-14px">{dashboard}</div>
              <div className="nav-menu-item valign-text-middle montserrat-bold-black-14px">{aiServices}</div>
              <Link to="/ai-ess">
                <div className="ess-schedule valign-text-middle montserrat-light-black-14px">{essSchedule}</div>
              </Link>
              <Link to="/ai-ad" className="align-self-flex-center">
                <div className="anomaly-detection valign-text-middle montserrat-light-black-14px">
                  {anomalyDetection1}
                </div>
              </Link>
              <div className="nav-menu-item valign-text-middle montserrat-bold-black-14px">{dataManagement}</div>
              <div className="nav-menu-item-1 valign-text-middle montserrat-light-black-14px">{system}</div>
              <div className="nav-menu-item-1 valign-text-middle montserrat-light-black-14px">{load}</div>
              <div className="nav-menu-item-1 valign-text-middle montserrat-light-black-14px">{rack}</div>
            </div>
            <div className="overlap-group1">
              <div className="clock valign-text-middle x18pt---regular---monserrat">{clock}</div>
              <div className="nav_frame"></div>
              <div className="logo_text x18pt---bold---monserrat">{logo_Text}</div>
              <Link to="/home">
                <div className="logout x18pt---bold---monserrat">{logout}</div>
              </Link>
            </div>
          </div>
          <div className="ess_power">
            <div className="overlap-group3">
              <div className="title valign-text-middle x24pt---bold---monserrat">{title1}</div>
              <div className="overlap-group-3 border-3px-x000000">
                <div className="flex-row x18pt---bold---monserrat">
                  <div className="label valign-text-middle">{label1}</div>
                  <div className="cost_text valign-text-middle">{cost_Text1}</div>
                </div>
                <Graph />
              </div>
            </div>
            <div className="overlap-group1-1 x18pt---bold---monserrat">
              <div className="border border-3px-x000000"></div>
              <GraphCost />
              <div className="label-1 valign-text-middle">{label2}</div>
              <div className="cost_text-1 valign-text-middle">{cost_Text2}</div>
            </div>
          </div>
          <div className="ess_cost_-rate">
            <div className="title-1 valign-text-middle x24pt---bold---monserrat">{title2}</div>
            <div className="overlap-group4">
              <div className="border-1 border-3px-x000000"></div>
              <div className="ratio_text valign-text-middle x36pt---bold---monserrat">{ratio_Text}</div>
              <Graph2 />
            </div>
          </div>
          <div className="dash_anomaly_detection">
            <div className="icon-container">
              <img className="akar-iconscircle-alert" src="/img/akar-icons-circle-alert@2x.svg" />
              <img className="icon-caution" src="/img/jam-triangle-danger@2x.svg" />
            </div>
            <div className="flex-col">
              <div className="anomaly-detection-1 valign-text-middle x24pt---bold---monserrat">{anomalyDetection2}</div>
              <div className="address valign-text-middle x18pt---regular---monserrat">{address}</div>
              <div className="last-abnormal-state valign-text-middle x18pt---regular---monserrat">
                {lastAbnormalState}
              </div>
            </div>
          </div>
          <Property1DefaultHoverFalse3 className={property1DefaultHoverFalse31Props.className}>
            {property1DefaultHoverFalse31Props.children}
          </Property1DefaultHoverFalse3>
          <Property1DefaultHoverFalse3 className={property1DefaultHoverFalse32Props.className}>
            {property1DefaultHoverFalse32Props.children}
          </Property1DefaultHoverFalse3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
