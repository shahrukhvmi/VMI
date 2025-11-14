import React from "react";

function Technologia({ techData }) {
  console.log(techData, "techData");

  return (
    <div className="tech-main-shadow relative overflow-x-hidden mt-30 z-10">
      <div className="tech-main-shadow-wrap">
        <img src="/tech-main-shadow.png" />
      </div>
      <div className="technologia-main relative">
        <div className="max-container-width w-6xl mx-auto">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font">
              <span className="inner-heading-top">{techData?.[4]?.value} </span>
              <br />
              <span className="inner-heading-span">{techData?.[3]?.value}</span>
            </h2>
          </div>

          <div className="technologia-logos mt-30 flex justify-center">
            <img src={techData?.[2]?.value} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologia;
