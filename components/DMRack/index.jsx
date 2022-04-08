import React, { useEffect } from "react";
import GeneralNav from "../GeneralNav";
import * as mdc from "material-components-web";
import "./DMRack.css";

function DMRack(props) {
  const {
    cellChargeStatus,
    cell1,
    numV1,
    cell7,
    numV2,
    cell2,
    numV3,
    cell8,
    numV4,
    cell3,
    numV5,
    cell9,
    numV6,
    cell4,
    numV7,
    cell10,
    numV8,
    cell5,
    numV9,
    cell11,
    numV10,
    cell6,
    numV11,
    dataManagementRackParameters,
    minV,
    name,
    from,
    to,
    tempC,
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
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="dm-rack screen">
        <div className="overlap-group11">
          <GeneralNav backgroundsProps={generalNavProps.backgroundsProps} />
          <div className="rectangle-20 border-2px-x000000"></div>
          <div className="cell-charge-status valign-text-middle x24pt---bold---monserrat">{cellChargeStatus}</div>
          <div className="group-13">
            <div className="overlap-group-container">
              <div className="overlap-group10">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell1}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV1}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
              <div className="overlap-group-9">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell7}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV2}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
            </div>
            <div className="overlap-group-container-1">
              <div className="overlap-group9">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell2}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV3}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
              <div className="overlap-group-9">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell8}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV4}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
            </div>
            <div className="overlap-group-container-2">
              <div className="overlap-group-10">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell3}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV5}</div>
                <img className="battery" src="/img/battery-full-6@2x.svg" />
              </div>
              <div className="overlap-group2-2">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell9}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV6}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
            </div>
            <div className="overlap-group-container-3">
              <div className="overlap-group-10">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell4}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV7}</div>
                <img className="battery" src="/img/battery-full-2@2x.svg" />
              </div>
              <div className="overlap-group1-4">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell10}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV8}</div>
                <img className="battery" src="/img/battery-full-1@2x.svg" />
              </div>
            </div>
            <div className="overlap-group-container-4">
              <div className="overlap-group6">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell5}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV9}</div>
                <img className="battery" src="/img/battery-full-6@2x.svg" />
              </div>
              <div className="overlap-group-11">
                <div className="cell valign-text-middle x18pt---bold---monserrat">{cell11}</div>
                <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV10}</div>
                <img className="battery" src="/img/battery-full@2x.svg" />
              </div>
            </div>
            <div className="overlap-group5">
              <div className="cell valign-text-middle x18pt---bold---monserrat">{cell6}</div>
              <div className="num-v valign-text-middle x18pt---regular---monserrat">{numV11}</div>
              <img className="battery" src="/img/battery-full-2@2x.svg" />
            </div>
          </div>
          <div className="data-management-rack-parameters valign-text-middle x24pt---bold---monserrat">
            {dataManagementRackParameters}
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
          <div className="min-v valign-text-middle x18pt---thin---monserrat">{minV}</div>
          <div className="name valign-text-middle x18pt---thin---monserrat">{name}</div>
          <div className="from valign-text-middle x18pt---bold---monserrat">{from}</div>
          <div className="to valign-text-middle x18pt---bold---monserrat">{to}</div>
          <div className="temp-c valign-text-middle x18pt---thin---monserrat">{tempC}</div>
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
          <div className="data-visualization-2 valign-text-middle x18pt---bold---monserrat">{dataVisualization}</div>
          <div className="ai-services-4 valign-text-middle x18pt---bold---monserrat">{aiServices}</div>
          <div className="system-3 valign-text-middle x18pt---thin---monserrat">{system}</div>
          <div className="ess-schedule-3 valign-text-middle x18pt---regular---monserrat">{essSchedule}</div>
          <div className="rack-3 valign-text-middle x18pt---bold---monserrat">{rack}</div>
          <div className="anomaly-detection-5 valign-text-middle x18pt---thin---monserrat">{anomalyDetection}</div>
          <div className="historical-load-2 valign-text-middle x18pt---regular---monserrat">{historicalLoad}</div>
        </div>
      </div>
    </div>
  );
}

export default DMRack;
