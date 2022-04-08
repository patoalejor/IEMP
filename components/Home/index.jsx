import React from "react";
import { Link } from "react-router-dom";
import Property1DefaultHoverFalse from "../Property1DefaultHoverFalse";
import "./Home.css";

function Home(props) {
  const {
    iemp,
    signUp,
    intelligentEnergyManagementPlatform,
    aiBasedEnergyStor,
    logIn,
    establishmentOfIem,
    whatIsIemp,
    iempIsAHybridAi,
    techLifeLifeManagement,
    techLifeCommunication,
    whatWeDo,
    weDesignedAnOrigi,
    benefitsOfUsingIemp,
    time,
    plan,
    investment,
    database,
    anOptimalEnergyCo,
    hybridAiBasedEner,
    reduceEnergyConsum,
    anEfficientEnergy,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="flex-col">
          <div className="flex-col-1">
            <div className="overlap-group1-1">
              <div className="iemp-1 x18pt---bold---monserrat">{iemp}</div>
              <div className="sign-up x18pt---bold---monserrat">{signUp}</div>
              <Property1DefaultHoverFalse />
            </div>
            <h1 className="intelligent-energy-management-platform x48pt---bold---monserrat">
              {intelligentEnergyManagementPlatform}
            </h1>
            <div className="ai-based-energy-stor x24pt---thin---monserrat">{aiBasedEnergyStor}</div>
            <Link to="/login">
              <div className="group-1">
                <div className="overlap-group-1">
                  <div className="log-in x36pt---bold---monserrat">{logIn}</div>
                </div>
              </div>
            </Link>
            <div className="establishment-of-iem x42pt---regular---monserrat">{establishmentOfIem}</div>
          </div>
          <div className="flex-row">
            <div className="iemp-container">
              <div className="what-is-iemp x42pt---bold---monserrat">{whatIsIemp}</div>
              <div className="iemp-is-a-hybrid-ai x24pt---thin---monserrat">{iempIsAHybridAi}</div>
            </div>
            <img className="tech-life-life-management" src={techLifeLifeManagement} />
          </div>
        </div>
        <div className="flex-row-1">
          <img className="tech-life-communication" src={techLifeCommunication} />
          <div className="we-d-container">
            <div className="what-we-do x42pt---bold---monserrat">{whatWeDo}</div>
            <div className="we-designed-an-origi x24pt---thin---monserrat">{weDesignedAnOrigi}</div>
          </div>
        </div>
        <div className="flex-col-2">
          <div className="benefits-of-using-iemp x42pt---regular---monserrat">{benefitsOfUsingIemp}</div>
          <div className="flex-row-2">
            <img className="time" src={time} />
            <img className="plan" src={plan} />
            <img className="investment" src={investment} />
            <img className="database" src={database} />
          </div>
          <div className="ener-container x24pt---thin---monserrat">
            <div className="an-optimal-energy-co">{anOptimalEnergyCo}</div>
            <div className="hybrid-ai-based-ener">{hybridAiBasedEner}</div>
            <div className="reduce-energy-consum">{reduceEnergyConsum}</div>
            <div className="an-efficient-energy">{anEfficientEnergy}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
