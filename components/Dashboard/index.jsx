import React from "react";
import Backgrounds from "../Backgrounds";
import SimpleAreaChartShowCartesianGridSho3 from "../SimpleAreaChartShowCartesianGridSho3";
import SimpleAreaChartShowCartesianGridSho4 from "../SimpleAreaChartShowCartesianGridSho4";
import SimpleDonutChartShowTooltipShowLege from "../SimpleDonutChartShowTooltipShowLege";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    iemp,
    logout,
    dataManagement,
    system,
    load,
    rack,
    aiServices,
    essSchedule,
    anomalyDetection1,
    essScheduling,
    x652Pm4062022,
    essSchedulingCostReductionRate,
    dashboard,
    powerLoadByEssScheduling,
    costWithAiBasedEssS,
    costWithoutEssS,
    x325KrwKwh,
    x515KrwKwh,
    anormalyDetection,
    anomalyDetection2,
    percent,
    address,
    lastAbnormalState,
    backgroundsProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <div className="overlap-group3-1">
          <div className="general-nav">
            <div className="overlap-group-2 x18pt---bold---monserrat">
              <div className="iemp-2">{iemp}</div>
              <img className="icon-notifications-1" src="/img/group-5@2x.svg" />
              <div className="logout-1">{logout}</div>
            </div>
            <div className="overlap-group1-2">
              <Backgrounds className={backgroundsProps.className} />
              <div className="nav-menu">
                <div className="data-management valign-text-middle x18pt---bold---monserrat">{dataManagement}</div>
                <div className="system-1 valign-text-middle x18pt---thin---monserrat">{system}</div>
                <div className="load valign-text-middle x18pt---thin---monserrat">{load}</div>
                <div className="rack-1 valign-text-middle x18pt---thin---monserrat">{rack}</div>
                <div className="ai-services-2 valign-text-middle x18pt---bold---monserrat">{aiServices}</div>
                <div className="ess-schedule-1 valign-text-middle x18pt---thin---monserrat">{essSchedule}</div>
                <div className="anomaly-detection-1 valign-text-middle x18pt---thin---monserrat">
                  {anomalyDetection1}
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-16"></div>
          <div className="ess-scheduling-2 valign-text-middle x24pt---bold---monserrat">{essScheduling}</div>
          <div className="dashboard-image-2 border-3px-x000000">
            <SimpleAreaChartShowCartesianGridSho3 />
          </div>
          <div className="dashboard-image-3 border-3px-x000000">
            <SimpleAreaChartShowCartesianGridSho4 />
          </div>
          <div className="x652-pm-4062022 valign-text-middle x18pt---regular---monserrat">{x652Pm4062022}</div>
          <div className="ess-scheduling-cost-reduction-rate valign-text-middle x24pt---bold---monserrat">
            {essSchedulingCostReductionRate}
          </div>
          <div className="dashboard-1 valign-text-middle x36pt---bold---monserrat">{dashboard}</div>
          <div className="power-load-by-ess-scheduling valign-text-middle x24pt---bold---monserrat">
            {powerLoadByEssScheduling}
          </div>
          <div className="cost-with-ai-based-ess-s valign-text-middle x18pt---bold---monserrat">
            {costWithAiBasedEssS}
          </div>
          <div className="cost-without-ess-s valign-text-middle x18pt---bold---monserrat">{costWithoutEssS}</div>
          <div className="x325-krwk-wh-1 valign-text-middle x18pt---bold---monserrat">{x325KrwKwh}</div>
          <div className="x515-krwk-wh-1 valign-text-middle x18pt---bold---monserrat">{x515KrwKwh}</div>
          <img className="icon-clock" src="/img/akar-icons-clock@2x.svg" />
          <div className="overlap-group2-1">
            <div className="anormaly-detection valign-text-middle x24pt---bold---monserrat">{anormalyDetection}</div>
          </div>
          <div className="anomaly-detection-2 valign-text-middle x24pt---bold---monserrat">{anomalyDetection2}</div>
          <div className="dashboard-image-4 border-3px-x000000"></div>
          <div className="dashboard-image-5 border-3px-x000000"></div>
          <div className="percent valign-text-middle x36pt---bold---monserrat">{percent}</div>
          <SimpleDonutChartShowTooltipShowLege />
          <img className="akar-iconscircle-alert" src="/img/akar-icons-circle-alert@2x.svg" />
          <img className="icon-caution" src="/img/jam-triangle-danger@2x.svg" />
          <div className="address valign-text-middle x18pt---regular---monserrat">{address}</div>
          <div className="last-abnormal-state valign-text-middle x18pt---regular---monserrat">{lastAbnormalState}</div>
          <img className="eos-iconsai-operator" src="/img/eos-icons-ai-operator@2x.svg" />
          <img className="eos-iconssystem-warning" src="/img/eos-icons-system-warning@2x.svg" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
