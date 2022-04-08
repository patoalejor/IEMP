import React, { useEffect } from "react";
import GeneralNav from "../GeneralNav";
import TinyBarChartShowCartesianGridShowXA2 from "../TinyBarChartShowCartesianGridShowXA2";
import TinyAreaChartShowCartesianGridShowX2 from "../TinyAreaChartShowCartesianGridShowX2";
import * as mdc from "material-components-web";
import "./DMSystem.css";

function DMSystem(props) {
  const {
    dataManagementSystemParameters,
    energyV,
    essCapacity,
    number1,
    minV1,
    name1,
    minV2,
    name2,
    number2,
    number3,
    number4,
    number5,
    from,
    to,
    tempC,
    soc,
    soh,
    vol,
    curr,
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
    new mdc.select.MDCSelect(document.querySelector(".drop-down-resource .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-module .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-rack .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-1 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-2 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-3 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-4 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-outlined-d-5 .mdc-select"));
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary .mdc-slider")[0]);
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary-1 .mdc-slider")[0]);
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary-2 .mdc-slider")[0]);
    mdc.autoInit();
    new mdc.slider.MDCSlider(document.querySelectorAll(".slider-continuous-disabled-primary-3 .mdc-slider")[0]);
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="dm-system screen">
        <div className="overlap-group1-6">
          <GeneralNav backgroundsProps={generalNavProps.backgroundsProps} />
          <div className="data-management-system-parameters valign-text-middle x24pt---bold---monserrat">
            {dataManagementSystemParameters}
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
          <div className="drop-down-rack">
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
                      Rack
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
                  <li className="mdc-list-item " data-value="R001" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">R001</span>
                  </li>
                  <li className="mdc-list-item " data-value="R002" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">R002</span>
                  </li>
                  <li className="mdc-list-item " data-value="R003" role="option">
                    <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">R003</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="energy-v valign-text-middle x18pt---thin---monserrat">{energyV}</div>
          <div className="ess-capacity valign-text-middle x18pt---thin---monserrat">{essCapacity}</div>
          <div className="number-1 valign-text-middle x18pt---thin---monserrat">{number1}</div>
          <div className="min-v-1 valign-text-middle x18pt---thin---monserrat">{minV1}</div>
          <div className="name-1 valign-text-middle x18pt---thin---monserrat">{name1}</div>
          <div className="min-v-2 valign-text-middle x18pt---thin---monserrat">{minV2}</div>
          <div className="name-2 valign-text-middle x18pt---thin---monserrat">{name2}</div>
          <div className="number-2 valign-text-middle x18pt---thin---monserrat">{number2}</div>
          <div className="number-3 valign-text-middle x18pt---thin---monserrat">{number3}</div>
          <div className="number-4 valign-text-middle x18pt---thin---monserrat">{number4}</div>
          <div className="number-5 valign-text-middle x18pt---thin---monserrat">{number5}</div>
          <div className="from-2 valign-text-middle x18pt---bold---monserrat">{from}</div>
          <div className="to-2 valign-text-middle x18pt---bold---monserrat">{to}</div>
          <div className="temp-c-1 valign-text-middle x18pt---thin---monserrat">{tempC}</div>
          <div className="so-c valign-text-middle x18pt---thin---monserrat">{soc}</div>
          <div className="so-h valign-text-middle x18pt---thin---monserrat">{soh}</div>
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
          <div className="slider-continuous-disabled-primary">
            <div className="mdc-slider " data-id="anima-widget">
              <input
                className="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div className="mdc-slider__track">
                <div className="mdc-slider__track--inactive"></div>
                <div className="mdc-slider__track--active">
                  <div className="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div className="mdc-slider__thumb">
                <div className="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
          <div className="slider-continuous-disabled-primary-1">
            <div className="mdc-slider " data-id="anima-widget">
              <input
                className="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div className="mdc-slider__track">
                <div className="mdc-slider__track--inactive"></div>
                <div className="mdc-slider__track--active">
                  <div className="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div className="mdc-slider__thumb">
                <div className="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
          <div className="slider-continuous-disabled-primary-2">
            <div className="mdc-slider " data-id="anima-widget">
              <input
                className="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div className="mdc-slider__track">
                <div className="mdc-slider__track--inactive"></div>
                <div className="mdc-slider__track--active">
                  <div className="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div className="mdc-slider__thumb">
                <div className="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
          <div className="slider-continuous-disabled-primary-3">
            <div className="mdc-slider " data-id="anima-widget">
              <input
                className="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div className="mdc-slider__track">
                <div className="mdc-slider__track--inactive"></div>
                <div className="mdc-slider__track--active">
                  <div className="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div className="mdc-slider__thumb">
                <div className="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
          <div className="rectangle-16-1 border-3px-x000000"></div>
          <TinyBarChartShowCartesianGridShowXA2 />
          <TinyAreaChartShowCartesianGridShowX2 />
          <div className="vol valign-text-middle x24pt---bold---monserrat">{vol}</div>
          <div className="curr valign-text-middle x24pt---bold---monserrat">{curr}</div>
          <div className="data-visualization-4 valign-text-middle x18pt---bold---monserrat">{dataVisualization}</div>
          <div className="ai-services-6 valign-text-middle x18pt---bold---monserrat">{aiServices}</div>
          <div className="system-5 valign-text-middle x18pt---bold---monserrat">{system}</div>
          <div className="ess-schedule-5 valign-text-middle x18pt---regular---monserrat">{essSchedule}</div>
          <div className="rack-5 valign-text-middle x18pt---thin---monserrat">{rack}</div>
          <div className="anomaly-detection-7 valign-text-middle x18pt---thin---monserrat">{anomalyDetection}</div>
          <div className="historical-load-4 valign-text-middle x18pt---regular---monserrat">{historicalLoad}</div>
        </div>
      </div>
    </div>
  );
}

export default DMSystem;
