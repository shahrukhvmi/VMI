import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import { useRouter } from "next/router";

function HomePortfolioSection() {
  const router = useRouter();

  return (
    <section className="portfolio-main-wrapper relative z-10" id="portfolio">
      <div className="w-6xl mx-auto max-container-width">
        <div className="inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="inner-heading-top">What We’ve</span> <br />
            <span className="inner-heading-span">Achieved Till Now</span>
          </h2>
        </div>
      </div>
      <PortfolioSlider />
      {/* Desktop CTA Button */}
      <div className="flex justify-center mt-3">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/portfolio")}
            className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
            style={{
              background:
                "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
              boxShadow: `
                0 0 100px #9561c540,
                0 0 40px #9561c550,
                0 0 80px #9561c570,
                0 0 120px #9561c530
              `,
            }}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePortfolioSection;
