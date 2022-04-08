import React, { useEffect } from "react";
import GeneralNav from "../GeneralNav";
import AutoLayoutTable2 from "../AutoLayoutTable2";
import ColumnFill from "../ColumnFill";
import TinyBarChartShowCartesianGridShowXA from "../TinyBarChartShowCartesianGridShowXA";
import SimpleBarChartShowCartesianGridShow from "../SimpleBarChartShowCartesianGridShow";
import * as mdc from "material-components-web";
import "./AIAD.css";

function AIAD(props) {
  const {
    anomalyDetection1,
    dataVisualization,
    aiServices,
    system,
    essSchedule,
    rack,
    anomalyDetection2,
    historicalLoad,
    address,
    lastAbnormalState,
    date,
    bankSelection,
    rackSelection,
    temp,
    voltage,
    generalNavProps,
    autoLayoutTable2Props,
    columnFillProps,
    tinyBarChartShowCartesianGridShowXAProps,
  } = props;

  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-location .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-1 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-2 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-module .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-resource .mdc-select"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="ai-ad screen">
        <div className="overlap-group1-3">
          <GeneralNav backgroundsProps={generalNavProps.backgroundsProps} />
          <div className="anomaly-detection-3 valign-text-middle x36pt---bold---monserrat">{anomalyDetection1}</div>
          <AutoLayoutTable2
            columnFixedProps={autoLayoutTable2Props.columnFixedProps}
            columnFixed2Props={autoLayoutTable2Props.columnFixed2Props}
            columnFill21Props={autoLayoutTable2Props.columnFill21Props}
            columnFill22Props={autoLayoutTable2Props.columnFill22Props}
            columnFill23Props={autoLayoutTable2Props.columnFill23Props}
            columnFillProps={autoLayoutTable2Props.columnFillProps}
          />
          <ColumnFill {...columnFillProps} />
          <div className="data-visualization-1 valign-text-middle x18pt---bold---monserrat">{dataVisualization}</div>
          <div className="ai-services-3 valign-text-middle x18pt---bold---monserrat">{aiServices}</div>
          <div className="system-2 valign-text-middle x18pt---thin---monserrat">{system}</div>
          <div className="ess-schedule-2 valign-text-middle x18pt---regular---monserrat">{essSchedule}</div>
          <div className="rack-2 valign-text-middle x18pt---thin---monserrat">{rack}</div>
          <div className="anomaly-detection-4 valign-text-middle x18pt---bold---monserrat">{anomalyDetection2}</div>
          <div className="historical-load-1 valign-text-middle x18pt---regular---monserrat">{historicalLoad}</div>
          <div className="dashboard-image-6 border-3px-x000000"></div>
          <img className="akar-iconscircle-alert-1" src="/img/akar-icons-circle-alert@2x.svg" />
          <img className="icon-caution-1" src="/img/jam-triangle-danger-1@2x.svg" />
          <div className="address-1 valign-text-middle x18pt---regular---monserrat">{address}</div>
          <div className="last-abnormal-state-1 valign-text-middle x18pt---regular---monserrat">
            {lastAbnormalState}
          </div>
          <div className="drop-down-location">
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
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">Seoul</span>
                  </li>
                  <li className="mdc-list-item " data-value="Busan" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">Busan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="date valign-text-middle x18pt---bold---monserrat">{date}</div>
          <div className="drop-down-outlined-d">
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
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">2022</span>
                  </li>
                  <li className="mdc-list-item " data-value="2021" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">2021</span>
                  </li>
                  <li className="mdc-list-item " data-value="2020" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">2020</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drop-down-outlined-d-1">
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
          <div className="drop-down-outlined-d-2">
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
          <div className="rectangle-21 border-2px-x000000"></div>
          <div className="rectangle-22 border-2px-x000000"></div>
          <div className="drop-down-module">
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
          <TinyBarChartShowCartesianGridShowXA />
          <TinyBarChartShowCartesianGridShowXA className={tinyBarChartShowCartesianGridShowXAProps.className} />
          <SimpleBarChartShowCartesianGridShow />
          <div className="drop-down-resource">
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
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">BMS 001</span>
                  </li>
                  <li className="mdc-list-item " data-value="BMS 002" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">BMS 002</span>
                  </li>
                  <li className="mdc-list-item " data-value="BMS 003" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">BMS 003</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bank-selection valign-text-middle x18pt---bold---monserrat">{bankSelection}</div>
          <div className="rack-selection valign-text-middle x18pt---bold---monserrat">{rackSelection}</div>
          <div className="temp valign-text-middle x18pt---bold---monserrat">{temp}</div>
          <div className="voltage valign-text-middle x18pt---bold---monserrat">{voltage}</div>
        </div>
      </div>
    </div>
  );
}

export default AIAD;
