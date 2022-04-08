import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NewUser from "./components/NewUser";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AIAD from "./components/AIAD";
import AIESS from "./components/AIESS";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newuser">
          <NewUser property1DefaultHoverFalseProps={newUserData.property1DefaultHoverFalseProps} />
        </Route>
        <Route path="/:path(|home)">
          <Home
            iemp="IEMP"
            hero_Headline={
              <>
                Intelligent Energy
                <br />
                Management Platform
              </>
            }
            hero_Text="AI-based energy storage system (ESS) charging/discharging scheduling and anomaly detection (AD) for efficient and economical Power Plant operation"
            property1DefaultProps={homeData.property1DefaultProps}
            property1DefaultHoverFalse2Props={homeData.property1DefaultHoverFalse2Props}
            property1DefaultHoverFalse3Props={homeData.property1DefaultHoverFalse3Props}
          />
        </Route>
        <Route path="/login">
          <Login
            forgetPasswordNewUser="Forget Password / New User"
            property1DefaultHoverFalse3Props={loginData.property1DefaultHoverFalse3Props}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...dashboardData} />
        </Route>
        <Route path="/ai-ad">
          <AIAD {...aIADData} />
        </Route>
        <Route path="/ai-ess">
          <AIESS {...aIESSData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const property1DefaultHoverFalseData = {
    children: "Create User",
};

const newUserData = {
    property1DefaultHoverFalseProps: property1DefaultHoverFalseData,
};

const property1DefaultData = {
    children: "Sign Up",
};

const property1DefaultHoverFalse2Data = {
    children: "Log in",
};

const property1DefaultHoverFalse31Data = {
    children: "Log in",
};

const homeData = {
    property1DefaultProps: property1DefaultData,
    property1DefaultHoverFalse2Props: property1DefaultHoverFalse2Data,
    property1DefaultHoverFalse3Props: property1DefaultHoverFalse31Data,
};

const property1DefaultHoverFalse32Data = {
    children: "Log in",
    className: "button-login-2",
};

const loginData = {
    property1DefaultHoverFalse3Props: property1DefaultHoverFalse32Data,
};

const backgrounds1Data = {
    children: "Dashboard",
};

const property1DefaultHoverFalse33Data = {
    children: "ESS Scheduling",
    className: "button_ad",
};

const property1DefaultHoverFalse34Data = {
    children: "Anormaly Detection",
    className: "button_ess",
};

const dashboardData = {
    dashboard: "Dashboard",
    aiServices: "AI Services",
    essSchedule: "ESS Schedule",
    anomalyDetection1: "Anomaly Detection",
    dataManagement: "Data Management",
    system: "System",
    load: "Load",
    rack: "Rack",
    clock: "6:52PM     4/06/2022",
    logo_Text: "IEMP",
    logout: "Logout",
    title1: "Power Load by ESS-Scheduling",
    label1: "Cost with AI-based ESS-S",
    cost_Text1: "3.25   KRW/kWh",
    label2: "Cost without ESS-S",
    cost_Text2: "5.15   KRW/kWh",
    title2: "ESS-Scheduling Cost Reduction Rate",
    ratio_Text: "75  %",
    anomalyDetection2: "Anomaly Detection",
    address: "2 alarms in the last 24 hours",
    lastAbnormalState: "Last Abnormal State registered on  Bank 1 Rack 1 at 4:00 am",
    backgroundsProps: backgrounds1Data,
    property1DefaultHoverFalse31Props: property1DefaultHoverFalse33Data,
    property1DefaultHoverFalse32Props: property1DefaultHoverFalse34Data,
};

const backgrounds2Data = {
    children: "Anomaly Detection",
};

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
    children: "Time",
    className: "table__cell-header-3",
};

const textAlignmentLeft7Data = {
    children: "1:30",
    className: "table__cell-1-1",
};

const textAlignmentLeft8Data = {
    children: "2:00",
    className: "table__cell-1-2",
};

const textAlignmentLeft9Data = {
    children: "2:30",
    className: "table__cell-1-3",
};

const textAlignmentLeft10Data = {
    children: "3:00",
    className: "table__cell-1-4",
};

const textAlignmentLeft11Data = {
    children: "3:30",
    className: "table__cell-1-5",
};

const textAlignmentLeft12Data = {
    children: "4:00",
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
    children: "State",
    className: "table__cell-header-8",
};

const textAlignmentLeft13Data = {
    children: "Normal",
    className: "table__cell-2-1",
};

const textAlignmentLeft14Data = {
    children: "Normal",
    className: "table__cell-2-2",
};

const textAlignmentLeft15Data = {
    children: "Normal",
    className: "table__cell-2-3",
};

const textAlignmentLeft16Data = {
    children: "Abnormal",
    className: "table__cell-2-4",
};

const textAlignmentLeft17Data = {
    children: "Normal",
    className: "table__cell-2-5",
};

const textAlignmentLeft18Data = {
    children: "Abnormal",
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
    children: "Bank",
    className: "table__cell-header-9",
};

const textAlignmentLeft19Data = {
    children: "1",
    className: "table__cell-2-7",
};

const textAlignmentLeft20Data = {
    children: "1",
    className: "table__cell-2-8",
};

const textAlignmentLeft21Data = {
    children: "1",
    className: "table__cell-2-9",
};

const textAlignmentLeft22Data = {
    children: "1",
    className: "table__cell-2-10",
};

const textAlignmentLeft23Data = {
    children: "1",
    className: "table__cell-2-11",
};

const textAlignmentLeft24Data = {
    children: "1",
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
    children: "Rack",
    className: "table__cell-header",
};

const textAlignmentLeft25Data = {
    children: "1",
    className: "table__cell-2-13",
};

const textAlignmentLeft26Data = {
    children: "5",
    className: "table__cell-2-14",
};

const textAlignmentLeft27Data = {
    children: "9",
    className: "table__cell-2-15",
};

const textAlignmentLeft28Data = {
    children: "12",
    className: "table__cell-2-16",
};

const textAlignmentLeft29Data = {
    children: "6",
    className: "table__cell-2-17",
};

const textAlignmentLeft30Data = {
    children: "1",
    className: "table__cell-2",
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
    children: "Temp",
    className: "table__cell-header-4",
};

const textAlignmentLeft31Data = {
    children: "0",
    className: "table__cell-3-1",
};

const textAlignmentLeft32Data = {
    children: "0",
    className: "table__cell-3-2",
};

const textAlignmentLeft33Data = {
    children: "0",
    className: "table__cell-3-3",
};

const textAlignmentLeft34Data = {
    children: "0",
    className: "table__cell-3-4",
};

const textAlignmentLeft35Data = {
    children: "0",
    className: "table__cell-3-5",
};

const textAlignmentLeft36Data = {
    children: "0",
    className: "table__cell-3",
};

const columnFill22Data = {
    sortIconNoneProps: sortIconNone6Data,
    textAlignmentLeft1Props: textAlignmentLeft31Data,
    textAlignmentLeft2Props: textAlignmentLeft32Data,
    textAlignmentLeft3Props: textAlignmentLeft33Data,
    textAlignmentLeft4Props: textAlignmentLeft34Data,
    textAlignmentLeft5Props: textAlignmentLeft35Data,
    textAlignmentLeft6Props: textAlignmentLeft36Data,
};

const autoLayoutTableData = {
    sortIconNone1Props: columnFixed1Data,
    sortIconNone2Props: columnFixed21Data,
    columnFill1Props: columnFill1Data,
    columnFill2Props: columnFill2Data,
    columnFill3Props: columnFill3Data,
    columnFill3Props2: columnFill22Data,
};

const graphTemperature2Data = {
    className: "graph_voltage",
};

const aIADData = {
    dashboard: "Dashboard",
    aiServices: "AI Services",
    essSchedule: "ESS Schedule",
    anomalyDetection: "Anomaly Detection",
    dataManagement: "Data Management",
    system: "System",
    load: "Load",
    rack: "Rack",
    clock: "6:52PM     4/06/2022",
    logo_Text: "IEMP",
    logout: "Logout",
    summary_Alarm_Text: "2 alarms in the last 24 hours",
    last_Alarm_Text: "Last Abnormal State registered on  Bank 1 Rack 1 at 4:00 am",
    date: "Date:",
    location: "Location:",
    label: "Bank Selection",
    rackSelectionLabel: "Rack Selection",
    temp_Text: "Temp",
    voltage_Text: "Voltage",
    backgroundsProps: backgrounds2Data,
    autoLayoutTableProps: autoLayoutTableData,
    graphTemperatureProps: graphTemperature2Data,
};

const backgrounds3Data = {
    children: "ESS Scheduling",
};

const sortIconNone7Data = {
    children: "#",
};

const textAlignmentLeft37Data = {
    children: "1",
};

const textAlignmentLeft38Data = {
    children: "2",
};

const textAlignmentLeft39Data = {
    children: "3",
};

const textAlignmentLeft40Data = {
    children: "4",
};

const textAlignmentLeft41Data = {
    children: "5",
};

const textAlignmentLeft42Data = {
    children: "6",
};

const columnFixed3Data = {
    className: "column-fixed-1",
    sortIconNoneProps: sortIconNone7Data,
    textAlignmentLeft1Props: textAlignmentLeft37Data,
    textAlignmentLeft2Props: textAlignmentLeft38Data,
    textAlignmentLeft3Props: textAlignmentLeft39Data,
    textAlignmentLeft4Props: textAlignmentLeft40Data,
    textAlignmentLeft5Props: textAlignmentLeft41Data,
    textAlignmentLeft6Props: textAlignmentLeft42Data,
};

const sortIconNone8Data = {
    children: "Power Load",
    className: "table__cell-header-6",
};

const textAlignmentLeft43Data = {
    children: "234",
    className: "table__cell-5-1",
};

const textAlignmentLeft44Data = {
    children: "234",
    className: "table__cell-5-2",
};

const textAlignmentLeft45Data = {
    children: "234",
    className: "table__cell-5-3",
};

const textAlignmentLeft46Data = {
    children: "234",
    className: "table__cell-5-4",
};

const textAlignmentLeft47Data = {
    children: "234",
    className: "table__cell-5-5",
};

const textAlignmentLeft48Data = {
    children: "234",
    className: "table__cell-5",
};

const columnFixed22Data = {
    className: "column-fixed-3",
    sortIconNoneProps: sortIconNone8Data,
    textAlignmentLeft1Props: textAlignmentLeft43Data,
    textAlignmentLeft2Props: textAlignmentLeft44Data,
    textAlignmentLeft3Props: textAlignmentLeft45Data,
    textAlignmentLeft4Props: textAlignmentLeft46Data,
    textAlignmentLeft5Props: textAlignmentLeft47Data,
    textAlignmentLeft6Props: textAlignmentLeft48Data,
};

const sortIconNone9Data = {
    children: "Predicted Load",
    className: "table__cell-header-1-1",
};

const textAlignmentLeft49Data = {
    children: "123",
    className: "table__cell-7-1",
};

const textAlignmentLeft50Data = {
    children: "123",
    className: "table__cell-7-2",
};

const textAlignmentLeft51Data = {
    children: "123",
    className: "table__cell-7-3",
};

const textAlignmentLeft52Data = {
    children: "123",
    className: "table__cell-7-4",
};

const textAlignmentLeft53Data = {
    children: "123",
    className: "table__cell-7-5",
};

const textAlignmentLeft54Data = {
    children: "123",
    className: "table__cell-7-6",
};

const columnFill32Data = {
    sortIconNoneProps: sortIconNone9Data,
    textAlignmentLeft1Props: textAlignmentLeft49Data,
    textAlignmentLeft2Props: textAlignmentLeft50Data,
    textAlignmentLeft3Props: textAlignmentLeft51Data,
    textAlignmentLeft4Props: textAlignmentLeft52Data,
    textAlignmentLeft5Props: textAlignmentLeft53Data,
    textAlignmentLeft6Props: textAlignmentLeft54Data,
};

const sortIconNone10Data = {
    children: "State of Charge",
    className: "table__cell-header-1-2",
};

const textAlignmentLeft55Data = {
    children: "ON",
    className: "table__cell-7-7",
};

const textAlignmentLeft56Data = {
    children: "OFF",
    className: "table__cell-7-8",
};

const textAlignmentLeft57Data = {
    children: "OFF",
    className: "table__cell-7-9",
};

const textAlignmentLeft58Data = {
    children: "OFF",
    className: "table__cell-7-10",
};

const textAlignmentLeft59Data = {
    children: "ON",
    className: "table__cell-7-11",
};

const textAlignmentLeft60Data = {
    children: "OFF",
    className: "table__cell-7-12",
};

const columnFill33Data = {
    sortIconNoneProps: sortIconNone10Data,
    textAlignmentLeft1Props: textAlignmentLeft55Data,
    textAlignmentLeft2Props: textAlignmentLeft56Data,
    textAlignmentLeft3Props: textAlignmentLeft57Data,
    textAlignmentLeft4Props: textAlignmentLeft58Data,
    textAlignmentLeft5Props: textAlignmentLeft59Data,
    textAlignmentLeft6Props: textAlignmentLeft60Data,
};

const sortIconNone11Data = {
    children: "Power Cost",
    className: "table__cell-header-1-3",
};

const textAlignmentLeft61Data = {
    children: "1.0",
    className: "table__cell-7-13",
};

const textAlignmentLeft62Data = {
    children: "2.0",
    className: "table__cell-7-14",
};

const textAlignmentLeft63Data = {
    children: "2.0",
    className: "table__cell-7-15",
};

const textAlignmentLeft64Data = {
    children: "3.0",
    className: "table__cell-7-16",
};

const textAlignmentLeft65Data = {
    children: "2.0",
    className: "table__cell-7-17",
};

const textAlignmentLeft66Data = {
    children: "5.0",
    className: "table__cell-7-18",
};

const columnFill34Data = {
    sortIconNoneProps: sortIconNone11Data,
    textAlignmentLeft1Props: textAlignmentLeft61Data,
    textAlignmentLeft2Props: textAlignmentLeft62Data,
    textAlignmentLeft3Props: textAlignmentLeft63Data,
    textAlignmentLeft4Props: textAlignmentLeft64Data,
    textAlignmentLeft5Props: textAlignmentLeft65Data,
    textAlignmentLeft6Props: textAlignmentLeft66Data,
};

const sortIconNone12Data = {
    children: "ESS Scheduling",
    className: "table__cell-header-1",
};

const textAlignmentLeft67Data = {
    children: "0",
    className: "table__cell-7-19",
};

const textAlignmentLeft68Data = {
    children: "1",
    className: "table__cell-7-20",
};

const textAlignmentLeft69Data = {
    children: "0?",
    className: "table__cell-7-21",
};

const textAlignmentLeft70Data = {
    children: "0",
    className: "table__cell-7-22",
};

const textAlignmentLeft71Data = {
    children: "1",
    className: "table__cell-7-23",
};

const textAlignmentLeft72Data = {
    children: "0",
    className: "table__cell-7",
};

const columnFill35Data = {
    sortIconNoneProps: sortIconNone12Data,
    textAlignmentLeft1Props: textAlignmentLeft67Data,
    textAlignmentLeft2Props: textAlignmentLeft68Data,
    textAlignmentLeft3Props: textAlignmentLeft69Data,
    textAlignmentLeft4Props: textAlignmentLeft70Data,
    textAlignmentLeft5Props: textAlignmentLeft71Data,
    textAlignmentLeft6Props: textAlignmentLeft72Data,
};

const sortIconNone13Data = {
    children: "Timestep",
    className: "table__cell-header-7",
};

const textAlignmentLeft73Data = {
    children: "1:30",
    className: "table__cell-6-1",
};

const textAlignmentLeft74Data = {
    children: "2:00",
    className: "table__cell-6-2",
};

const textAlignmentLeft75Data = {
    children: "2:30",
    className: "table__cell-6-3",
};

const textAlignmentLeft76Data = {
    children: "3:00",
    className: "table__cell-6-4",
};

const textAlignmentLeft77Data = {
    children: "3:30",
    className: "table__cell-6-5",
};

const textAlignmentLeft78Data = {
    children: "4:00",
    className: "table__cell-6",
};

const columnFill23Data = {
    className: "column-fill-2",
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
    columnFill31Props: columnFill32Data,
    columnFill32Props: columnFill33Data,
    columnFill33Props: columnFill34Data,
    columnFill34Props: columnFill35Data,
    columnFill2Props: columnFill23Data,
};

const aIESSData = {
    dashboard: "Dashboard",
    aiServices: "AI Services",
    essSchedule: "ESS Schedule",
    anomalyDetection: "Anomaly Detection",
    dataManagement: "Data Management",
    system: "System",
    load: "Load",
    rack: "Rack",
    clock: "6:52PM     4/06/2022",
    logo_Text: "IEMP",
    logout: "Logout",
    cost_Headline: "Cost       Off-Peak   -    Mid-Peak  -   On-Peak",
    spanText1: <>3.25<br /></>,
    spanText2: "KRW/kWh",
    spanText3: <>5.15<br /></>,
    spanText4: "KRW/kWh",
    spanText5: <>7.65<br /></>,
    spanText6: "KRW/kWh",
    stateOfCharge: " State of Charge",
    essScheduling: "ESS Scheduling",
    peak_Headline: "Peak Power Threshold",
    peak_Value: "650",
    powerLoad: "Power Load",
    predictedLoad: "Predicted Load",
    backgroundsProps: backgrounds3Data,
    autoLayoutTable2Props: autoLayoutTable2Data,
};

