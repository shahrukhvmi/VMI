import React, { useState } from "react";
import LandingPortfolioSliderWeb from "../landingPage/LandigPortfolioSliderWeb";
import LandingPortfolioSliderLogo from "../landingPage/LandigPortfolioSliderLogo";

export default function LandingLogoPortfolio() {
  const [isLogo, setIsLogo] = useState(true);
  return (
    <div>
      <div className="relative max-container-width w-[80%] mx-auto mt-20 responsive-w-90">
        <div className="landing-section-heading gilory-font-bold pt-6">
          <h2 className="text-center">
            Our
            <span className="landing-heading-purple"> Portfolio </span>
          </h2>

          <div className="package-switch-wrapper flex items-center justify-center mb-6 gilory-font-bold gap-3">
            <span className="package-label">Select:</span>

            <div className="package-select-wrap">
              <select
                className="package-dropdown"
                value={isLogo ? "logo" : "website"}
                onChange={(e) => setIsLogo(e.target.value === "logo")}
              >
                <option value="website">Webfolio</option>
                <option value="logo">Logofolio</option>
              </select>

              <span className="package-select-arrow">▾</span>
            </div>
          </div>
        </div>
      </div>

      <div className="crossfade-wrapper mt-4">
        <div
          key="web-packages"
          className={`landing-package-wrap flex gap-4  crossfade-item ${
            !isLogo ? "active" : ""
          }`}
        >
          <LandingPortfolioSliderWeb />
        </div>
        <div
          key="logo-packages"
          className={`crossfade-item landing-package-wrap flex gap-4  ${
            isLogo ? "active" : ""
          }`}
        >
          <LandingPortfolioSliderLogo />
        </div>
      </div>
    </div>
  );
}
