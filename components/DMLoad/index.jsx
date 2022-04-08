import React, { useEffect } from "react";
import GeneralNav from "../GeneralNav";
import TinyAreaChartShowCartesianGridShowX from "../TinyAreaChartShowCartesianGridShowX";
import TinyLineChartShowCartesianGridShowX from "../TinyLineChartShowCartesianGridShowX";
import * as mdc from "material-components-web";
import "./DMLoad.css";

function DMLoad(props) {
  const {
    energyConsumptionKwh,
    costReductionRate,
    historyOfUserPowerConsumption,
    from,
    to,
    dataVisualization,
    aiServices,
    system,
    essSchedule,
    rack,
    anomalyDetection,
    historicalLoad,
    generalNavProps,
  } = props;

  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-location .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-1 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-2 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-3 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-4 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-5 .mdc-select"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="dm-load screen">
        <div className="overlap-group1-5">
          <GeneralNav backgroundsProps={generalNavProps.backgroundsProps} />
          <div className="rectangle-17 border-3px-x000000"></div>
          <div className="energy-consumption-k-wh valign-text-middle x24pt---bold---monserrat">
            {energyConsumptionKwh}
          </div>
          <div className="cost-reduction-rate valign-text-middle x24pt---bold---monserrat">{costReductionRate}</div>
          <div className="history-of-user-power-consumption valign-text-middle x24pt---bold---monserrat">
            {historyOfUserPowerConsumption}
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
          <div className="from-1 valign-text-middle x18pt---bold---monserrat">{from}</div>
          <div className="to-1 valign-text-middle x18pt---bold---monserrat">{to}</div>
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
          <div className="drop-down-outlined-d-3">
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
          <div className="drop-down-outlined-d-4">
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
          <div className="drop-down-outlined-d-5">
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
          <TinyAreaChartShowCartesianGridShowX />
          <TinyLineChartShowCartesianGridShowX />
          <div className="data-visualization-3 valign-text-middle x18pt---bold---monserrat">{dataVisualization}</div>
          <div className="ai-services-5 valign-text-middle x18pt---bold---monserrat">{aiServices}</div>
          <div className="system-4 valign-text-middle x18pt---thin---monserrat">{system}</div>
          <div className="ess-schedule-4 valign-text-middle x18pt---regular---monserrat">{essSchedule}</div>
          <div className="rack-4 valign-text-middle x18pt---thin---monserrat">{rack}</div>
          <div className="anomaly-detection-6 valign-text-middle x18pt---thin---monserrat">{anomalyDetection}</div>
          <div className="historical-load-3 valign-text-middle x18pt---bold---monserrat">{historicalLoad}</div>
        </div>
      </div>
    </div>
  );
}

export default DMLoad;
