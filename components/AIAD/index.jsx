import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Backgrounds from "../Backgrounds";
import AutoLayoutTable from "../AutoLayoutTable";
import GraphBankModule from "../GraphBankModule";
import GraphTemperature from "../GraphTemperature";
import * as mdc from "material-components-web";
import "./AIAD.css";

function AIAD(props) {
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
    summary_Alarm_Text,
    last_Alarm_Text,
    date,
    location,
    label,
    rackSelectionLabel,
    temp_Text,
    voltage_Text,
    backgroundsProps,
    autoLayoutTableProps,
    graphTemperatureProps,
  } = props;

  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".location_drop .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".year_drop .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".month_drop .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".day_drop .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".bank_drop .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".rack_drop .mdc-select"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="ai-ad screen">
        <div className="overlap-group9">
          <div className="overlap-group2-1">
            <Backgrounds>{backgroundsProps.children}</Backgrounds>
            <div className="nav-menu-1">
              <Link to="/dashboard">
                <div className="dashboard-2 valign-text-middle montserrat-bold-black-14px">{dashboard}</div>
              </Link>
              <div className="nav-menu-item-2 valign-text-middle montserrat-bold-black-14px">{aiServices}</div>
              <Link to="/ai-ess">
                <div className="ess-schedule-1 valign-text-middle">{essSchedule}</div>
              </Link>
              <div className="anomaly-detection-2 valign-text-middle montserrat-bold-rose-14px">{anomalyDetection}</div>
              <div className="nav-menu-item-2 valign-text-middle montserrat-bold-black-14px">{dataManagement}</div>
              <div className="nav-menu-item-3 valign-text-middle montserrat-light-black-14px">{system}</div>
              <div className="nav-menu-item-3 valign-text-middle montserrat-light-black-14px">{load}</div>
              <div className="nav-menu-item-3 valign-text-middle montserrat-light-black-14px">{rack}</div>
            </div>
            <div className="overlap-group1-2">
              <div className="clock-1 valign-text-middle x18pt---regular---monserrat">{clock}</div>
              <div className="nav_frame-1"></div>
              <Link to="/dashboard">
                <div className="logo_text-1 x18pt---bold---monserrat">{logo_Text}</div>
              </Link>
              <Link to="/home">
                <div className="logout-1 x18pt---bold---monserrat">{logout}</div>
              </Link>
            </div>
          </div>
          <AutoLayoutTable
            sortIconNone1Props={autoLayoutTableProps.sortIconNone1Props}
            sortIconNone2Props={autoLayoutTableProps.sortIconNone2Props}
            columnFill1Props={autoLayoutTableProps.columnFill1Props}
            columnFill2Props={autoLayoutTableProps.columnFill2Props}
            columnFill3Props={autoLayoutTableProps.columnFill3Props}
            columnFill3Props2={autoLayoutTableProps.columnFill3Props2}
          />
          <div className="flex-row-1 border-3px-x000000">
            <div className="flex-col-1">
              <img className="notice_logo" src="/img/notice-logo@2x.svg" />
              <img className="icon-caution-1" src="/img/warning-logo@2x.svg" />
            </div>
            <div className="_alarm_text-container x18pt---regular---monserrat">
              <div className="summary_alarm_text valign-text-middle">{summary_Alarm_Text}</div>
              <div className="last_alarm_text valign-text-middle">{last_Alarm_Text}</div>
            </div>
          </div>
          <div className="parameter-selection">
            <div className="overlap-group6">
              <div className="location_drop">
                <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                  <div
                    className="mdc-select__anchor custom-enhanced-select-width"
                    role="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                  >
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading"></span>
                      <span className="mdc-notched-outline__notch">
                        <span id="demo-label" className="mdc-floating-label">
                          Location
                        </span>
                      </span>
                      <span className="mdc-notched-outline__trailing"></span>
                    </span>
                    <span className="mdc-select__selected-text-container">
                      <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                    </span>
                    <span className="mdc-select__dropdown-icon">
                      <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                      <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                    </span>
                    <span className="mdc-line-ripple"></span>
                  </div>
                  <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                    <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                      <li className="mdc-list-item " data-value="Seoul" role="option">
                        <span className="mdc-list-item__ripple"></span>{" "}
                        <span className="mdc-list-item__text">Seoul</span>
                      </li>
                      <li className="mdc-list-item " data-value="Busan" role="option">
                        <span className="mdc-list-item__ripple"></span>{" "}
                        <span className="mdc-list-item__text">Busan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overlap-group5-1">
                <div className="overlap-group4-1 x18pt---bold---monserrat">
                  <div className="date valign-text-middle">{date}</div>
                  <div className="location valign-text-middle">{location}</div>
                </div>
                <div className="year_drop">
                  <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                    <div
                      className="mdc-select__anchor custom-enhanced-select-width"
                      role="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                    >
                      <span className="mdc-notched-outline">
                        <span className="mdc-notched-outline__leading"></span>
                        <span className="mdc-notched-outline__notch">
                          <span id="demo-label" className="mdc-floating-label">
                            Year
                          </span>
                        </span>
                        <span className="mdc-notched-outline__trailing"></span>
                      </span>
                      <span className="mdc-select__selected-text-container">
                        <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                      </span>
                      <span className="mdc-select__dropdown-icon">
                        <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                        <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                      </span>
                      <span className="mdc-line-ripple"></span>
                    </div>
                    <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                      <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                        <li className="mdc-list-item " data-value="2022" role="option">
                          <span className="mdc-list-item__ripple"></span>{" "}
                          <span className="mdc-list-item__text">2022</span>
                        </li>
                        <li className="mdc-list-item " data-value="2021" role="option">
                          <span className="mdc-list-item__ripple"></span>{" "}
                          <span className="mdc-list-item__text">2021</span>
                        </li>
                        <li className="mdc-list-item " data-value="2020" role="option">
                          <span className="mdc-list-item__ripple"></span>{" "}
                          <span className="mdc-list-item__text">2020</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_drop-container">
              <div className="month_drop">
                <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                  <div
                    className="mdc-select__anchor custom-enhanced-select-width"
                    role="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                  >
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading"></span>
                      <span className="mdc-notched-outline__notch">
                        <span id="demo-label" className="mdc-floating-label">
                          Month
                        </span>
                      </span>
                      <span className="mdc-notched-outline__trailing"></span>
                    </span>
                    <span className="mdc-select__selected-text-container">
                      <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                    </span>
                    <span className="mdc-select__dropdown-icon">
                      <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                      <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                    </span>
                    <span className="mdc-line-ripple"></span>
                  </div>
                  <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                    <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                      <li className="mdc-list-item " data-value="1" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">1</span>
                      </li>
                      <li className="mdc-list-item " data-value="2" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">2</span>
                      </li>
                      <li className="mdc-list-item " data-value="3" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">3</span>
                      </li>
                      <li className="mdc-list-item " data-value="4" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">4</span>
                      </li>
                      <li className="mdc-list-item " data-value="5" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">5</span>
                      </li>
                      <li className="mdc-list-item " data-value="6" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">6</span>
                      </li>
                      <li className="mdc-list-item " data-value="7" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">7</span>
                      </li>
                      <li className="mdc-list-item " data-value="8" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">8</span>
                      </li>
                      <li className="mdc-list-item " data-value="9" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">9</span>
                      </li>
                      <li className="mdc-list-item " data-value="10" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">10</span>
                      </li>
                      <li className="mdc-list-item " data-value="11" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">11</span>
                      </li>
                      <li className="mdc-list-item " data-value="12" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="day_drop">
                <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                  <div
                    className="mdc-select__anchor custom-enhanced-select-width"
                    role="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                  >
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading"></span>
                      <span className="mdc-notched-outline__notch">
                        <span id="demo-label" className="mdc-floating-label">
                          Day
                        </span>
                      </span>
                      <span className="mdc-notched-outline__trailing"></span>
                    </span>
                    <span className="mdc-select__selected-text-container">
                      <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                    </span>
                    <span className="mdc-select__dropdown-icon">
                      <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                      <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                    </span>
                    <span className="mdc-line-ripple"></span>
                  </div>
                  <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                    <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                      <li className="mdc-list-item " data-value="0" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">0</span>
                      </li>
                      <li className="mdc-list-item " data-value="1" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">1</span>
                      </li>
                      <li className="mdc-list-item " data-value="2" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">2</span>
                      </li>
                      <li className="mdc-list-item " data-value="3" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">3</span>
                      </li>
                      <li className="mdc-list-item " data-value="4" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">4</span>
                      </li>
                      <li className="mdc-list-item " data-value="5" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">5</span>
                      </li>
                      <li className="mdc-list-item " data-value="6" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">6</span>
                      </li>
                      <li className="mdc-list-item " data-value="7" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">7</span>
                      </li>
                      <li className="mdc-list-item " data-value="8" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">8</span>
                      </li>
                      <li className="mdc-list-item " data-value="9" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">9</span>
                      </li>
                      <li className="mdc-list-item " data-value="10" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">10</span>
                      </li>
                      <li className="mdc-list-item " data-value="11" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">11</span>
                      </li>
                      <li className="mdc-list-item " data-value="12" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">12</span>
                      </li>
                      <li className="mdc-list-item " data-value="13" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">13</span>
                      </li>
                      <li className="mdc-list-item " data-value="14" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">14</span>
                      </li>
                      <li className="mdc-list-item " data-value="15" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">15</span>
                      </li>
                      <li className="mdc-list-item " data-value="16" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">16</span>
                      </li>
                      <li className="mdc-list-item " data-value="17" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">17</span>
                      </li>
                      <li className="mdc-list-item " data-value="18" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">18</span>
                      </li>
                      <li className="mdc-list-item " data-value="19" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">19</span>
                      </li>
                      <li className="mdc-list-item " data-value="20" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">20</span>
                      </li>
                      <li className="mdc-list-item " data-value="21" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">21</span>
                      </li>
                      <li className="mdc-list-item " data-value="22" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">22</span>
                      </li>
                      <li className="mdc-list-item " data-value="23" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">23</span>
                      </li>
                      <li className="mdc-list-item " data-value="24" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">24</span>
                      </li>
                      <li className="mdc-list-item " data-value="25" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">25</span>
                      </li>
                      <li className="mdc-list-item " data-value="26" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">26</span>
                      </li>
                      <li className="mdc-list-item " data-value="27" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">27</span>
                      </li>
                      <li className="mdc-list-item " data-value="28" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">28</span>
                      </li>
                      <li className="mdc-list-item " data-value="29" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">29</span>
                      </li>
                      <li className="mdc-list-item " data-value="30" role="option">
                        <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">30</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group7 border-2px-x000000">
            <div className="flex-row-2">
              <div className="label-2 valign-text-middle x18pt---bold---monserrat">{label}</div>
              <div className="bank_drop">
                <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                  <div
                    className="mdc-select__anchor custom-enhanced-select-width"
                    role="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                  >
                    <span className="mdc-notched-outline">
                      <span className="mdc-notched-outline__leading"></span>
                      <span className="mdc-notched-outline__notch">
                        <span id="demo-label" className="mdc-floating-label">
                          Resource
                        </span>
                      </span>
                      <span className="mdc-notched-outline__trailing"></span>
                    </span>
                    <span className="mdc-select__selected-text-container">
                      <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                    </span>
                    <span className="mdc-select__dropdown-icon">
                      <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                      <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                    </span>
                    <span className="mdc-line-ripple"></span>
                  </div>
                  <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                    <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                      <li className="mdc-list-item " data-value="BMS 001" role="option">
                        <span className="mdc-list-item__ripple"></span>{" "}
                        <span className="mdc-list-item__text">BMS 001</span>
                      </li>
                      <li className="mdc-list-item " data-value="BMS 002" role="option">
                        <span className="mdc-list-item__ripple"></span>{" "}
                        <span className="mdc-list-item__text">BMS 002</span>
                      </li>
                      <li className="mdc-list-item " data-value="BMS 003" role="option">
                        <span className="mdc-list-item__ripple"></span>{" "}
                        <span className="mdc-list-item__text">BMS 003</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <GraphBankModule />
          </div>
          <div className="overlap-group8">
            <div className="border-2 border-2px-x000000"></div>
            <div className="rack_drop">
              <div className="mdc-select   mdc-select--outlined  demo-width-class" data-id="anima-widget">
                <div
                  className="mdc-select__anchor custom-enhanced-select-width"
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                >
                  <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                      <span id="demo-label" className="mdc-floating-label">
                        Module
                      </span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                  </span>
                  <span className="mdc-select__selected-text-container">
                    <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                  </span>
                  <span className="mdc-select__dropdown-icon">
                    <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                    <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                  </span>
                  <span className="mdc-line-ripple"></span>
                </div>
                <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                  <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                    <li className="mdc-list-item " data-value="M001" role="option">
                      <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">M001</span>
                    </li>
                    <li className="mdc-list-item " data-value="M002" role="option">
                      <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">M002</span>
                    </li>
                    <li className="mdc-list-item " data-value="M003" role="option">
                      <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">M003</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <GraphTemperature />
            <GraphTemperature className={graphTemperatureProps.className} />
            <div className="rack-selection-label valign-text-middle x18pt---bold---monserrat">{rackSelectionLabel}</div>
            <div className="temp_text valign-text-middle x18pt---regular---monserrat">{temp_Text}</div>
            <div className="voltage_text valign-text-middle x18pt---regular---monserrat">{voltage_Text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAD;
