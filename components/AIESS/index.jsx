import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Backgrounds from "../Backgrounds";
import AutoLayoutTable2 from "../AutoLayoutTable2";
import GraphFeat34 from "../GraphFeat34";
import GraphFeat12 from "../GraphFeat12";
import * as mdc from "material-components-web";
import "./AIESS.css";

function AIESS(props) {
  const {
    dashboard,
    aiServices,
    essSchedule,
    anomalyDetection,
    dataManagement,
    system,
    load,
    rack,
    clock,
    logo_Text,
    logout,
    cost_Headline,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    stateOfCharge,
    essScheduling,
    peak_Headline,
    peak_Value,
    powerLoad,
    predictedLoad,
    backgroundsProps,
    autoLayoutTable2Props,
  } = props;

  useEffect(() => {
    mdc.autoInit();
    mdc.autoInit();
    mdc.autoInit();
    mdc.autoInit();
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="ai-ess screen">
        <div className="overlap-group6-1">
          <div className="overlap-group2-2">
            <Backgrounds>{backgroundsProps.children}</Backgrounds>
            <div className="nav-menu-2">
              <Link to="/dashboard">
                <div className="dashboard-3 valign-text-middle montserrat-bold-black-14px">{dashboard}</div>
              </Link>
              <div className="nav-menu-item-4 valign-text-middle montserrat-bold-black-14px">{aiServices}</div>
              <div className="nav-menu-item-5 valign-text-middle montserrat-bold-rose-14px">{essSchedule}</div>
              <Link to="/ai-ad" className="align-self-flex-center">
                <div className="anomaly-detection-3 valign-text-middle montserrat-light-black-14px">
                  {anomalyDetection}
                </div>
              </Link>
              <div className="nav-menu-item-4 valign-text-middle montserrat-bold-black-14px">{dataManagement}</div>
              <div className="nav-menu-item-5 valign-text-middle montserrat-light-black-14px">{system}</div>
              <div className="nav-menu-item-5 valign-text-middle montserrat-light-black-14px">{load}</div>
              <div className="nav-menu-item-5 valign-text-middle montserrat-light-black-14px">{rack}</div>
            </div>
            <div className="overlap-group1-3">
              <div className="clock-2 valign-text-middle x18pt---regular---monserrat">{clock}</div>
              <div className="nav_frame-2"></div>
              <Link to="/dashboard">
                <div className="logo_text-2 x18pt---bold---monserrat">{logo_Text}</div>
              </Link>
              <Link to="/home">
                <div className="logout-2 x18pt---bold---monserrat">{logout}</div>
              </Link>
            </div>
          </div>
          <AutoLayoutTable2
            columnFixedProps={autoLayoutTable2Props.columnFixedProps}
            columnFixed2Props={autoLayoutTable2Props.columnFixed2Props}
            columnFill31Props={autoLayoutTable2Props.columnFill31Props}
            columnFill32Props={autoLayoutTable2Props.columnFill32Props}
            columnFill33Props={autoLayoutTable2Props.columnFill33Props}
            columnFill34Props={autoLayoutTable2Props.columnFill34Props}
            columnFill2Props={autoLayoutTable2Props.columnFill2Props}
          />
          <div className="ess-cost">
            <div className="cost-container x18pt---bold---monserrat">
              <div className="cost_headline valign-text-middle">{cost_Headline}</div>
              <div className="off_peak_cost valign-text-middle">
                <span>
                  <span className="x18pt---bold---monserrat">{spanText1}</span>
                  <span className="span1 montserrat-bold-razzmatazz-10px">{spanText2}</span>
                </span>
              </div>
              <div className="mid_peak_cost valign-text-middle">
                <span>
                  <span className="x18pt---bold---monserrat">{spanText3}</span>
                  <span className="span1 montserrat-bold-razzmatazz-10px">{spanText4}</span>
                </span>
              </div>
              <div className="on_peak_cost valign-text-middle">
                <span>
                  <span className="x18pt---bold---monserrat">{spanText5}</span>
                  <span className="span1 montserrat-bold-razzmatazz-10px">{spanText6}</span>
                </span>
              </div>
            </div>
            <div className="overlap-group4-2 border-3px-x000000">
              <div className="flex-row-3">
                <div className="feature_3">
                  <div className="checkbox-selected-disabled-custom">
                    <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                      <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                      <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                          <path
                            className="mdc-checkbox__checkmark-path"
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                      </div>
                      <div className="mdc-checkbox__ripple"></div>
                    </div>
                  </div>
                  <div className="state-of-charge valign-text-middle x18pt---regular---monserrat">{stateOfCharge}</div>
                </div>
                <div className="overlap-group-7">
                  <div className="checkbox-selected-disabled-custom-1">
                    <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                      <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                      <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                          <path
                            className="mdc-checkbox__checkmark-path"
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                      </div>
                      <div className="mdc-checkbox__ripple"></div>
                    </div>
                  </div>
                  <div className="ess-scheduling valign-text-middle x18pt---regular---monserrat">{essScheduling}</div>
                </div>
              </div>
              <GraphFeat34 />
            </div>
          </div>
          <div className="peack-power-threshold">
            <div className="peak_-container x24pt---bold---monserrat">
              <div className="peak_headline valign-text-middle">{peak_Headline}</div>
              <div className="peak_value valign-text-middle">{peak_Value}</div>
            </div>
            <div className="overlap-group5-2 border-3px-x000000">
              <div className="feature_-container">
                <div className="feature_1">
                  <div className="checkbox-selected-disabled-custom-2">
                    <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                      <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                      <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                          <path
                            className="mdc-checkbox__checkmark-path"
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                      </div>
                      <div className="mdc-checkbox__ripple"></div>
                    </div>
                  </div>
                  <div className="power-load valign-text-middle x18pt---regular---monserrat">{powerLoad}</div>
                </div>
                <div className="feature_2">
                  <div className="checkbox-selected-disabled-custom-3">
                    <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                      <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                      <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                          <path
                            className="mdc-checkbox__checkmark-path"
                            fill="none"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                      </div>
                      <div className="mdc-checkbox__ripple"></div>
                    </div>
                  </div>
                  <div className="predicted-load valign-text-middle x18pt---regular---monserrat">{predictedLoad}</div>
                </div>
              </div>
              <GraphFeat12 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIESS;
