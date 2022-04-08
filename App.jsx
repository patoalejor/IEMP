import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AIESS from "./components/AIESS";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import AIAD from "./components/AIAD";
import DMRack from "./components/DMRack";
import DMLoad from "./components/DMLoad";
import DMSystem from "./components/DMSystem";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ai-ess">
          <AIESS {...aIESSData} />
        </Route>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...dashboardData} />
        </Route>
        <Route path="/login">
          <Login
            forgetPasswordNewUser="Forget Password / New User"
            property1DefaultHoverFalseProps={loginData.property1DefaultHoverFalseProps}
          />
        </Route>
        <Route path="/newuser">
          <NewUser property1DefaultHoverFalse2Props={newUserData.property1DefaultHoverFalse2Props} />
        </Route>
        <Route path="/ai-ad">
          <AIAD {...aIADData} />
        </Route>
        <Route path="/dm-rack">
          <DMRack {...dMRackData} />
        </Route>
        <Route path="/dm-load">
          <DMLoad {...dMLoadData} />
        </Route>
        <Route path="/dm-system">
          <DMSystem {...dMSystemData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sortIconNone1Data = {
    children: "#",
};

const textAlignmentLeft1Data = {
    children: "1",
};

const textAlignmentLeft2Data = {
    children: "2",
};

const textAlignmentLeft3Data = {
    children: "3",
};

const textAlignmentLeft4Data = {
    children: "4",
};

const textAlignmentLeft5Data = {
    children: "5",
};

const textAlignmentLeft6Data = {
    children: "6",
};

const columnFixed1Data = {
    sortIconNoneProps: sortIconNone1Data,
    textAlignmentLeft1Props: textAlignmentLeft1Data,
    textAlignmentLeft2Props: textAlignmentLeft2Data,
    textAlignmentLeft3Props: textAlignmentLeft3Data,
    textAlignmentLeft4Props: textAlignmentLeft4Data,
    textAlignmentLeft5Props: textAlignmentLeft5Data,
    textAlignmentLeft6Props: textAlignmentLeft6Data,
};

const sortIconNone2Data = {
    children: "Power Load",
    className: "table__cell-header-4",
};

const textAlignmentLeft7Data = {
    children: "234",
    className: "table__cell-1-1",
};

const textAlignmentLeft8Data = {
    children: "234",
    className: "table__cell-1-2",
};

const textAlignmentLeft9Data = {
    children: "234",
    className: "table__cell-1-3",
};

const textAlignmentLeft10Data = {
    children: "234",
    className: "table__cell-1-4",
};

const textAlignmentLeft11Data = {
    children: "234",
    className: "table__cell-1-5",
};

const textAlignmentLeft12Data = {
    children: "234",
    className: "table__cell-1",
};

const columnFixed21Data = {
    sortIconNoneProps: sortIconNone2Data,
    textAlignmentLeft1Props: textAlignmentLeft7Data,
    textAlignmentLeft2Props: textAlignmentLeft8Data,
    textAlignmentLeft3Props: textAlignmentLeft9Data,
    textAlignmentLeft4Props: textAlignmentLeft10Data,
    textAlignmentLeft5Props: textAlignmentLeft11Data,
    textAlignmentLeft6Props: textAlignmentLeft12Data,
};

const sortIconNone3Data = {
    children: "Predicted Load",
    className: "table__cell-header-7",
};

const textAlignmentLeft13Data = {
    children: "123",
    className: "table__cell-2-1",
};

const textAlignmentLeft14Data = {
    children: "123",
    className: "table__cell-2-2",
};

const textAlignmentLeft15Data = {
    children: "123",
    className: "table__cell-2-3",
};

const textAlignmentLeft16Data = {
    children: "123",
    className: "table__cell-2-4",
};

const textAlignmentLeft17Data = {
    children: "123",
    className: "table__cell-2-5",
};

const textAlignmentLeft18Data = {
    children: "123",
    className: "table__cell-2-6",
};

const columnFill1Data = {
    sortIconNoneProps: sortIconNone3Data,
    textAlignmentLeft1Props: textAlignmentLeft13Data,
    textAlignmentLeft2Props: textAlignmentLeft14Data,
    textAlignmentLeft3Props: textAlignmentLeft15Data,
    textAlignmentLeft4Props: textAlignmentLeft16Data,
    textAlignmentLeft5Props: textAlignmentLeft17Data,
    textAlignmentLeft6Props: textAlignmentLeft18Data,
};

const sortIconNone4Data = {
    children: "State of Charge",
    className: "table__cell-header-8",
};

const textAlignmentLeft19Data = {
    children: "ON",
    className: "table__cell-2-7",
};

const textAlignmentLeft20Data = {
    children: "OFF",
    className: "table__cell-2-8",
};

const textAlignmentLeft21Data = {
    children: "OFF",
    className: "table__cell-2-9",
};

const textAlignmentLeft22Data = {
    children: "OFF",
    className: "table__cell-2-10",
};

const textAlignmentLeft23Data = {
    children: "ON",
    className: "table__cell-2-11",
};

const textAlignmentLeft24Data = {
    children: "OFF",
    className: "table__cell-2-12",
};

const columnFill2Data = {
    sortIconNoneProps: sortIconNone4Data,
    textAlignmentLeft1Props: textAlignmentLeft19Data,
    textAlignmentLeft2Props: textAlignmentLeft20Data,
    textAlignmentLeft3Props: textAlignmentLeft21Data,
    textAlignmentLeft4Props: textAlignmentLeft22Data,
    textAlignmentLeft5Props: textAlignmentLeft23Data,
    textAlignmentLeft6Props: textAlignmentLeft24Data,
};

const sortIconNone5Data = {
    children: "Power Cost",
    className: "table__cell-header-9",
};

const textAlignmentLeft25Data = {
    children: "1.0",
    className: "table__cell-2-13",
};

const textAlignmentLeft26Data = {
    children: "2.0",
    className: "table__cell-2-14",
};

const textAlignmentLeft27Data = {
    children: "2.0",
    className: "table__cell-2-15",
};

const textAlignmentLeft28Data = {
    children: "3.0",
    className: "table__cell-2-16",
};

const textAlignmentLeft29Data = {
    children: "2.0",
    className: "table__cell-2-17",
};

const textAlignmentLeft30Data = {
    children: "5.0",
    className: "table__cell-2-18",
};

const columnFill3Data = {
    sortIconNoneProps: sortIconNone5Data,
    textAlignmentLeft1Props: textAlignmentLeft25Data,
    textAlignmentLeft2Props: textAlignmentLeft26Data,
    textAlignmentLeft3Props: textAlignmentLeft27Data,
    textAlignmentLeft4Props: textAlignmentLeft28Data,
    textAlignmentLeft5Props: textAlignmentLeft29Data,
    textAlignmentLeft6Props: textAlignmentLeft30Data,
};

const sortIconNone6Data = {
    children: "ESS Scheduling",
    className: "table__cell-header-10",
};

const textAlignmentLeft31Data = {
    children: "0",
    className: "table__cell-2-19",
};

const textAlignmentLeft32Data = {
    children: "1",
    className: "table__cell-2-20",
};

const textAlignmentLeft33Data = {
    children: "0?",
    className: "table__cell-2-21",
};

const textAlignmentLeft34Data = {
    children: "0",
    className: "table__cell-2-22",
};

const textAlignmentLeft35Data = {
    children: "1",
    className: "table__cell-2-23",
};

const textAlignmentLeft36Data = {
    children: "0",
    className: "table__cell-2-24",
};

const columnFill4Data = {
    sortIconNoneProps: sortIconNone6Data,
    textAlignmentLeft1Props: textAlignmentLeft31Data,
    textAlignmentLeft2Props: textAlignmentLeft32Data,
    textAlignmentLeft3Props: textAlignmentLeft33Data,
    textAlignmentLeft4Props: textAlignmentLeft34Data,
    textAlignmentLeft5Props: textAlignmentLeft35Data,
    textAlignmentLeft6Props: textAlignmentLeft36Data,
};

const sortIconNone7Data = {
    children: "Timestep",
    className: "table__cell-header",
};

const textAlignmentLeft37Data = {
    children: "1:30",
    className: "table__cell-2-25",
};

const textAlignmentLeft38Data = {
    children: "2:00",
    className: "table__cell-2-26",
};

const textAlignmentLeft39Data = {
    children: "2:30",
    className: "table__cell-2-27",
};

const textAlignmentLeft40Data = {
    children: "3:00",
    className: "table__cell-2-28",
};

const textAlignmentLeft41Data = {
    children: "3:30",
    className: "table__cell-2-29",
};

const textAlignmentLeft42Data = {
    children: "4:00",
    className: "table__cell-2",
};

const columnFill5Data = {
    sortIconNoneProps: sortIconNone7Data,
    textAlignmentLeft1Props: textAlignmentLeft37Data,
    textAlignmentLeft2Props: textAlignmentLeft38Data,
    textAlignmentLeft3Props: textAlignmentLeft39Data,
    textAlignmentLeft4Props: textAlignmentLeft40Data,
    textAlignmentLeft5Props: textAlignmentLeft41Data,
    textAlignmentLeft6Props: textAlignmentLeft42Data,
};

const autoLayoutTableData = {
    columnFixedProps: columnFixed1Data,
    columnFixed2Props: columnFixed21Data,
    columnFill1Props: columnFill1Data,
    columnFill2Props: columnFill2Data,
    columnFill3Props: columnFill3Data,
    columnFill4Props: columnFill4Data,
    columnFill5Props: columnFill5Data,
};

const aIESSData = {
    dataVisualization: "Data Visualization",
    aiServices1: "AI Services",
    aiServices2: "AI Services",
    system: "System",
    essSchedule: "ESS Schedule",
    rack: "Rack",
    anomalyDetection: "Anomaly Detection",
    iemp: "IEMP",
    logout: "Logout",
    essScheduling1: "ESS Scheduling",
    peakPowerThreshold: "Peak Power Threshold",
    number: "650",
    historicalLoad: "Historical Load",
    stateOfCharge: " State of Charge",
    essScheduling2: "ESS Scheduling",
    powerLoad: "Power Load",
    predictedLoad: "Predicted Load",
    costOffPeakMidPeakOnPeak: "Cost       Off-Peak   -    Mid-Peak  -   On-Peak",
    spanText1: <>3.25<br /></>,
    spanText2: "KRW/kWh",
    spanText3: <>5.15<br /></>,
    spanText4: "KRW/kWh",
    spanText5: <>7.65<br /></>,
    spanText6: "KRW/kWh",
    autoLayoutTableProps: autoLayoutTableData,
};

const homeData = {
    iemp: "IEMP",
    signUp: "Sign Up",
    intelligentEnergyManagementPlatform: <>Intelligent Energy<br />Management Platform</>,
    aiBasedEnergyStor: "AI-based energy storage system (ESS) charging/discharging scheduling and anomaly detection (AD) for efficient and economical Power Plant operation",
    logIn: "Log in",
    establishmentOfIem: "Establishment of IEMP for securing innovative technologies and platforms for intelligent energy services",
    whatIsIemp: "What is IEMP?",
    iempIsAHybridAi: "IEMP is a hybrid AI structure that combines operational resource data-based derivation and expert knowledge-based method, and is a smart ESS charging/discharging scheduling solution that supports optimal portfolio operation according to considerations such as operation patterns and monetization of distributed resources.",
    techLifeLifeManagement: "/img/tech-life---life-management@2x.png",
    techLifeCommunication: "/img/tech-life---communication@2x.png",
    whatWeDo: "What we do?",
    weDesignedAnOrigi: <>We designed an original platform system architecture with a 7-layer structure by analyzing the service and system requirements of the IEMP platform: <br /><br />Physical energy resource <br />Data Acquisition and Preservation <br />Distributed Resource Management <br />Data management <br />Decision management <br />Service management <br />User interface</>,
    benefitsOfUsingIemp: "Benefits of using IEMP",
    time: "/img/time@2x.png",
    plan: "/img/plan@2x.png",
    investment: "/img/investment@2x.png",
    database: "/img/database@2x.png",
    anOptimalEnergyCo: "An Optimal energy consumption solution to improve environmental conditions",
    hybridAiBasedEner: "Hybrid AI-based energy platform (IEMP) specialized in various forms of energy-based data structure processing.",
    reduceEnergyConsum: "Reduce energy consumption from a long-term perspective, and prevent damage through ESS control.",
    anEfficientEnergy: "An efficient energy management to enhancing national competitiveness and market development.",
};

const backgrounds2Data = {
    className: "backgrounds-1",
};

const dashboardData = {
    iemp: "IEMP",
    logout: "Logout",
    dataManagement: "Data Management",
    system: "System",
    load: "Load",
    rack: "Rack",
    aiServices: "AI Services",
    essSchedule: "ESS Schedule",
    anomalyDetection1: "Anomaly Detection",
    essScheduling: "ESS Scheduling",
    x652Pm4062022: <>6:52PM <br />4/06/2022</>,
    essSchedulingCostReductionRate: "ESS-Scheduling Cost Reduction Rate",
    dashboard: "Dashboard",
    powerLoadByEssScheduling: "Power Load by ESS-Scheduling",
    costWithAiBasedEssS: "Cost with AI-based ESS-S",
    costWithoutEssS: "Cost without ESS-S",
    x325KrwKwh: "3.25   KRW/kWh",
    x515KrwKwh: "5.15   KRW/kWh",
    anormalyDetection: "Anormaly Detection",
    anomalyDetection2: "Anomaly Detection",
    percent: "75  %",
    address: "2 alarms in the last 24 hours",
    lastAbnormalState: "Last Abnormal State registered on  Bank 1 Rack 1 at 4:00 am",
    backgroundsProps: backgrounds2Data,
};

const property1DefaultHoverFalse2Data = {
    className: "button-login-1",
};

const loginData = {
    property1DefaultHoverFalseProps: property1DefaultHoverFalse2Data,
};

const property1DefaultHoverFalse22Data = {
    children: "Create User",
};

const newUserData = {
    property1DefaultHoverFalse2Props: property1DefaultHoverFalse22Data,
};

const backgrounds3Data = {
    className: "backgrounds-2",
};

const generalNav1Data = {
    backgroundsProps: backgrounds3Data,
};

const sortIconNone8Data = {
    children: "#",
};

const textAlignmentLeft43Data = {
    children: "1",
};

const textAlignmentLeft44Data = {
    children: "2",
};

const textAlignmentLeft45Data = {
    children: "3",
};

const textAlignmentLeft46Data = {
    children: "4",
};

const textAlignmentLeft47Data = {
    children: "5",
};

const textAlignmentLeft48Data = {
    children: "6",
};

const columnFixed3Data = {
    className: "column-fixed-1",
    sortIconNoneProps: sortIconNone8Data,
    textAlignmentLeft1Props: textAlignmentLeft43Data,
    textAlignmentLeft2Props: textAlignmentLeft44Data,
    textAlignmentLeft3Props: textAlignmentLeft45Data,
    textAlignmentLeft4Props: textAlignmentLeft46Data,
    textAlignmentLeft5Props: textAlignmentLeft47Data,
    textAlignmentLeft6Props: textAlignmentLeft48Data,
};

const sortIconNone9Data = {
    children: "Time",
    className: "table__cell-header-6",
};

const textAlignmentLeft49Data = {
    children: "1:30",
    className: "table__cell-4-1",
};

const textAlignmentLeft50Data = {
    children: "2:00",
    className: "table__cell-4-2",
};

const textAlignmentLeft51Data = {
    children: "2:30",
    className: "table__cell-4-3",
};

const textAlignmentLeft52Data = {
    children: "3:00",
    className: "table__cell-4-4",
};

const textAlignmentLeft53Data = {
    children: "3:30",
    className: "table__cell-4-5",
};

const textAlignmentLeft54Data = {
    children: "4:00",
    className: "table__cell-4",
};

const columnFixed22Data = {
    className: "column-fixed-3",
    sortIconNoneProps: sortIconNone9Data,
    textAlignmentLeft1Props: textAlignmentLeft49Data,
    textAlignmentLeft2Props: textAlignmentLeft50Data,
    textAlignmentLeft3Props: textAlignmentLeft51Data,
    textAlignmentLeft4Props: textAlignmentLeft52Data,
    textAlignmentLeft5Props: textAlignmentLeft53Data,
    textAlignmentLeft6Props: textAlignmentLeft54Data,
};

const sortIconNone10Data = {
    children: "State",
    className: "table__cell-header-2-1",
};

const textAlignmentLeft55Data = {
    children: "Normal",
    className: "table__cell-6-1",
};

const textAlignmentLeft56Data = {
    children: "Normal",
    className: "table__cell-6-2",
};

const textAlignmentLeft57Data = {
    children: "Normal",
    className: "table__cell-6-3",
};

const textAlignmentLeft58Data = {
    children: "Abnormal",
    className: "table__cell-6-4",
};

const textAlignmentLeft59Data = {
    children: "Normal",
    className: "table__cell-6-5",
};

const textAlignmentLeft60Data = {
    children: "Abnormal",
    className: "table__cell-6-6",
};

const columnFill22Data = {
    sortIconNoneProps: sortIconNone10Data,
    textAlignmentLeft1Props: textAlignmentLeft55Data,
    textAlignmentLeft2Props: textAlignmentLeft56Data,
    textAlignmentLeft3Props: textAlignmentLeft57Data,
    textAlignmentLeft4Props: textAlignmentLeft58Data,
    textAlignmentLeft5Props: textAlignmentLeft59Data,
    textAlignmentLeft6Props: textAlignmentLeft60Data,
};

const sortIconNone11Data = {
    children: "Bank",
    className: "table__cell-header-2-2",
};

const textAlignmentLeft61Data = {
    children: "1",
    className: "table__cell-6-7",
};

const textAlignmentLeft62Data = {
    children: "1",
    className: "table__cell-6-8",
};

const textAlignmentLeft63Data = {
    children: "1",
    className: "table__cell-6-9",
};

const textAlignmentLeft64Data = {
    children: "1",
    className: "table__cell-6-10",
};

const textAlignmentLeft65Data = {
    children: "1",
    className: "table__cell-6-11",
};

const textAlignmentLeft66Data = {
    children: "1",
    className: "table__cell-6-12",
};

const columnFill23Data = {
    sortIconNoneProps: sortIconNone11Data,
    textAlignmentLeft1Props: textAlignmentLeft61Data,
    textAlignmentLeft2Props: textAlignmentLeft62Data,
    textAlignmentLeft3Props: textAlignmentLeft63Data,
    textAlignmentLeft4Props: textAlignmentLeft64Data,
    textAlignmentLeft5Props: textAlignmentLeft65Data,
    textAlignmentLeft6Props: textAlignmentLeft66Data,
};

const sortIconNone12Data = {
    children: "Rack",
    className: "table__cell-header-2",
};

const textAlignmentLeft67Data = {
    children: "1",
    className: "table__cell-6-13",
};

const textAlignmentLeft68Data = {
    children: "5",
    className: "table__cell-6-14",
};

const textAlignmentLeft69Data = {
    children: "9",
    className: "table__cell-6-15",
};

const textAlignmentLeft70Data = {
    children: "12",
    className: "table__cell-6-16",
};

const textAlignmentLeft71Data = {
    children: "6",
    className: "table__cell-6-17",
};

const textAlignmentLeft72Data = {
    children: "1",
    className: "table__cell-6",
};

const columnFill24Data = {
    sortIconNoneProps: sortIconNone12Data,
    textAlignmentLeft1Props: textAlignmentLeft67Data,
    textAlignmentLeft2Props: textAlignmentLeft68Data,
    textAlignmentLeft3Props: textAlignmentLeft69Data,
    textAlignmentLeft4Props: textAlignmentLeft70Data,
    textAlignmentLeft5Props: textAlignmentLeft71Data,
    textAlignmentLeft6Props: textAlignmentLeft72Data,
};

const sortIconNone13Data = {
    children: "Temp",
    className: "table__cell-header-1-1",
};

const textAlignmentLeft73Data = {
    children: "0",
    className: "table__cell-5-1",
};

const textAlignmentLeft74Data = {
    children: "0",
    className: "table__cell-5-2",
};

const textAlignmentLeft75Data = {
    children: "0",
    className: "table__cell-5-3",
};

const textAlignmentLeft76Data = {
    children: "0",
    className: "table__cell-5-4",
};

const textAlignmentLeft77Data = {
    children: "0",
    className: "table__cell-5-5",
};

const textAlignmentLeft78Data = {
    children: "0",
    className: "table__cell-5-6",
};

const columnFill6Data = {
    className: "column-fill-1",
    sortIconNoneProps: sortIconNone13Data,
    textAlignmentLeft1Props: textAlignmentLeft73Data,
    textAlignmentLeft2Props: textAlignmentLeft74Data,
    textAlignmentLeft3Props: textAlignmentLeft75Data,
    textAlignmentLeft4Props: textAlignmentLeft76Data,
    textAlignmentLeft5Props: textAlignmentLeft77Data,
    textAlignmentLeft6Props: textAlignmentLeft78Data,
};

const autoLayoutTable2Data = {
    columnFixedProps: columnFixed3Data,
    columnFixed2Props: columnFixed22Data,
    columnFill21Props: columnFill22Data,
    columnFill22Props: columnFill23Data,
    columnFill23Props: columnFill24Data,
    columnFillProps: columnFill6Data,
};

const sortIconNone14Data = {
    children: "Voltage",
    className: "table__cell-header-1",
};

const textAlignmentLeft79Data = {
    children: "0",
    className: "table__cell-5-7",
};

const textAlignmentLeft80Data = {
    children: "0",
    className: "table__cell-5-8",
};

const textAlignmentLeft81Data = {
    children: "0",
    className: "table__cell-5-9",
};

const textAlignmentLeft82Data = {
    children: "0",
    className: "table__cell-5-10",
};

const textAlignmentLeft83Data = {
    children: "0",
    className: "table__cell-5-11",
};

const textAlignmentLeft84Data = {
    children: "0",
    className: "table__cell-5",
};

const columnFill7Data = {
    className: "column-fill-2",
    sortIconNoneProps: sortIconNone14Data,
    textAlignmentLeft1Props: textAlignmentLeft79Data,
    textAlignmentLeft2Props: textAlignmentLeft80Data,
    textAlignmentLeft3Props: textAlignmentLeft81Data,
    textAlignmentLeft4Props: textAlignmentLeft82Data,
    textAlignmentLeft5Props: textAlignmentLeft83Data,
    textAlignmentLeft6Props: textAlignmentLeft84Data,
};

const tinyBarChartShowCartesianGridShowXA2Data = {
    className: "tiny-bar-chart-show-1",
};

const aIADData = {
    anomalyDetection1: "Anomaly Detection",
    dataVisualization: "Data Visualization",
    aiServices: "AI Services",
    system: "System",
    essSchedule: "ESS Schedule",
    rack: "Rack",
    anomalyDetection2: "Anomaly Detection",
    historicalLoad: "Historical Load",
    address: "2 alarms in the last 24 hours",
    lastAbnormalState: "Last Abnormal State registered on  Bank 1 Rack 1 at 4:00 am",
    date: "Date:",
    bankSelection: "Bank Selection",
    rackSelection: "Rack Selection",
    temp: "Temp",
    voltage: "Voltage",
    generalNavProps: generalNav1Data,
    autoLayoutTable2Props: autoLayoutTable2Data,
    columnFillProps: columnFill7Data,
    tinyBarChartShowCartesianGridShowXAProps: tinyBarChartShowCartesianGridShowXA2Data,
};

const backgrounds4Data = {
    className: "backgrounds-3",
};

const generalNav2Data = {
    backgroundsProps: backgrounds4Data,
};

const dMRackData = {
    cellChargeStatus: "Cell charge status",
    cell1: "Cell #1",
    numV1: "num [V]",
    cell7: "Cell #7",
    numV2: "num [V]",
    cell2: "Cell #2",
    numV3: "num [V]",
    cell8: "Cell #8",
    numV4: "num [V]",
    cell3: "Cell #3",
    numV5: "num [V]",
    cell9: "Cell #9",
    numV6: "num [V]",
    cell4: "Cell #4",
    numV7: "num [V]",
    cell10: "Cell #10",
    numV8: "num [V]",
    cell5: "Cell #5",
    numV9: "num [V]",
    cell11: "Cell #11",
    numV10: "num [V]",
    cell6: "Cell #6",
    numV11: "num [V]",
    dataManagementRackParameters: "Data Management Rack Parameters",
    minV: "min V",
    name: "max V",
    from: "From:",
    to: "To:",
    tempC: "Temp [C]",
    dataVisualization: "Data Visualization",
    aiServices: "AI Services",
    system: "System",
    essSchedule: "ESS Schedule",
    rack: "Rack",
    anomalyDetection: "Anomaly Detection",
    historicalLoad: "Historical Load",
    generalNavProps: generalNav2Data,
};

const backgrounds5Data = {
    className: "backgrounds-4",
};

const generalNav3Data = {
    backgroundsProps: backgrounds5Data,
};

const dMLoadData = {
    energyConsumptionKwh: "Energy Consumption [kWh]",
    costReductionRate: "Cost Reduction Rate [%]",
    historyOfUserPowerConsumption: "History Of User Power Consumption",
    from: "From:",
    to: "To:",
    dataVisualization: "Data Visualization",
    aiServices: "AI Services",
    system: "System",
    essSchedule: "ESS Schedule",
    rack: "Rack",
    anomalyDetection: "Anomaly Detection",
    historicalLoad: "Historical Load",
    generalNavProps: generalNav3Data,
};

const backgrounds6Data = {
    className: "backgrounds-5",
};

const generalNav4Data = {
    backgroundsProps: backgrounds6Data,
};

const dMSystemData = {
    dataManagementSystemParameters: "Data Management System Parameters",
    energyV: "Energy [V]",
    essCapacity: "ESS  Capacity",
    number1: "123",
    minV1: "min V",
    name1: "max V",
    minV2: "min V",
    name2: "max V",
    number2: "0",
    number3: "100",
    number4: "0",
    number5: "100",
    from: "From:",
    to: "To:",
    tempC: "Temp [C]",
    soc: "SoC [%]",
    soh: "SoH [%]",
    vol: "Vol",
    curr: "Curr",
    dataVisualization: "Data Visualization",
    aiServices: "AI Services",
    system: "System",
    essSchedule: "ESS Schedule",
    rack: "Rack",
    anomalyDetection: "Anomaly Detection",
    historicalLoad: "Historical Load",
    generalNavProps: generalNav4Data,
};

