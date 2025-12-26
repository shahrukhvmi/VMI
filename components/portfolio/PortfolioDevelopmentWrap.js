import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioDevelopmentWrap({ webDev, slider, viewAll }) {
  const router = useRouter();

  return (
    <section
      className="portfolio-main-wrapper relative z-10 scroll-mt-40"
      id="development"
    >
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">
              {webDev?.[1]?.value || "Web Development"}
            </span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">That Performs</span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider slider={slider} viewAll={viewAll} concated={false} />

      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push(viewAll)}
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
