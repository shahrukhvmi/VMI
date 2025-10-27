import React from "react";

function Technologia() {
  return (
    <div className="tech-main-shadow relative overflow-x-hidden mt-30 z-10 relative">
      <div className="tech-main-shadow-wrap">
        <img src="/tech-main-shadow.png" />
      </div>
      <div className="technologia-main relative">
        <div className="max-container-width w-6xl mx-auto">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font">
              <span className="inner-heading-top">Trusted Tools Behind </span>
              <br />
              <span className="inner-heading-span">Every Deliverable</span>
            </h2>
          </div>

          <div className="technologia-logos mt-30">
            <img src="/tech-logos.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologia;
