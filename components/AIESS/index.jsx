import React, { useEffect } from "react";
import Backgrounds from "../Backgrounds";
import AutoLayoutTable from "../AutoLayoutTable";
import SimpleAreaChartShowCartesianGridSho from "../SimpleAreaChartShowCartesianGridSho";
import SimpleAreaChartShowCartesianGridSho2 from "../SimpleAreaChartShowCartesianGridSho2";
import * as mdc from "material-components-web";
import "./AIESS.css";

function AIESS(props) {
  const {
    dataVisualization,
    aiServices1,
    aiServices2,
    system,
    essSchedule,
    rack,
    anomalyDetection,
    iemp,
    logout,
    essScheduling1,
    peakPowerThreshold,
    number,
    historicalLoad,
    stateOfCharge,
    essScheduling2,
    powerLoad,
    predictedLoad,
    costOffPeakMidPeakOnPeak,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    autoLayoutTableProps,
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
        <div className="overlap-group3">
          <div className="overlap-group1">
            <Backgrounds />
            <div className="data-visualization valign-text-middle x18pt---bold---monserrat">{dataVisualization}</div>
            <div className="ai-services valign-text-middle x18pt---bold---monserrat">{aiServices1}</div>
            <div className="ai-services-1 valign-text-middle x18pt---bold---monserrat">{aiServices2}</div>
            <div className="system valign-text-middle x18pt---thin---monserrat">{system}</div>
            <div className="ess-schedule valign-text-middle x18pt---bold---monserrat">{essSchedule}</div>
            <div className="rack valign-text-middle x18pt---thin---monserrat">{rack}</div>
            <div className="anomaly-detection valign-text-middle x18pt---thin---monserrat">{anomalyDetection}</div>
            <div className="overlap-group x18pt---bold---monserrat">
              <div className="iemp">{iemp}</div>
              <img className="icon-notifications" src="/img/group@2x.svg" />
              <div className="logout">{logout}</div>
            </div>
          </div>
          <div className="ess-scheduling valign-text-middle x36pt---bold---monserrat">{essScheduling1}</div>
          <div className="peak-power-threshold valign-text-middle x24pt---bold---monserrat">{peakPowerThreshold}</div>
          <AutoLayoutTable
            columnFixedProps={autoLayoutTableProps.columnFixedProps}
            columnFixed2Props={autoLayoutTableProps.columnFixed2Props}
            columnFill1Props={autoLayoutTableProps.columnFill1Props}
            columnFill2Props={autoLayoutTableProps.columnFill2Props}
            columnFill3Props={autoLayoutTableProps.columnFill3Props}
            columnFill4Props={autoLayoutTableProps.columnFill4Props}
            columnFill5Props={autoLayoutTableProps.columnFill5Props}
          />
          <div className="number valign-text-middle x24pt---bold---monserrat">{number}</div>
          <div className="historical-load valign-text-middle x18pt---regular---monserrat">{historicalLoad}</div>
          <div className="dashboard-image border-3px-x000000">
            <SimpleAreaChartShowCartesianGridSho />
          </div>
          <div className="dashboard-image-1 border-3px-x000000"></div>
          <SimpleAreaChartShowCartesianGridSho2 />
          <div className="power-load-c">
            <div className="checkbox-selected-disabled-custom">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
              </div>
            </div>
            <div className="state-of-charge valign-text-middle x18pt---regular---monserrat">{stateOfCharge}</div>
          </div>
          <div className="overlap-group2">
            <div className="checkbox-selected-disabled-custom-1">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
              </div>
            </div>
            <div className="ess-scheduling-1 valign-text-middle x18pt---regular---monserrat">{essScheduling2}</div>
          </div>
          <div className="power-load-c-1">
            <div className="checkbox-selected-disabled-custom-2">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
              </div>
            </div>
            <div className="power-load valign-text-middle x18pt---regular---monserrat">{powerLoad}</div>
          </div>
          <div className="power-load-c-2">
            <div className="checkbox-selected-disabled-custom-3">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                <input type="checkbox" defaultChecked className="mdc-checkbox__native-control" />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
              </div>
            </div>
            <div className="predicted-load valign-text-middle x18pt---regular---monserrat">{predictedLoad}</div>
          </div>
          <div className="cost-off-peak-mid-peak-on-peak valign-text-middle x18pt---bold---monserrat">
            {costOffPeakMidPeakOnPeak}
          </div>
          <div className="x325-krwk-wh valign-text-middle x18pt---bold---monserrat">
            <span>
              <span className="x18pt---bold---monserrat">{spanText1}</span>
              <span className="span1 montserrat-bold-razzmatazz-10px">{spanText2}</span>
            </span>
          </div>
          <div className="x515-krwk-wh valign-text-middle x18pt---bold---monserrat">
            <span>
              <span className="x18pt---bold---monserrat">{spanText3}</span>
              <span className="span1 montserrat-bold-razzmatazz-10px">{spanText4}</span>
            </span>
          </div>
          <div className="x765-krwk-wh valign-text-middle x18pt---bold---monserrat">
            <span>
              <span className="x18pt---bold---monserrat">{spanText5}</span>
              <span className="span1 montserrat-bold-razzmatazz-10px">{spanText6}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIESS;
