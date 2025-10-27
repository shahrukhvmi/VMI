import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioSeoWrap() {
  const router = useRouter();

  const portfolioImages = [
    { img: "/seo-1.png", url: "/seo-portfolio/loco-customs/" },
    { img: "/seo-2.png", url: "/seo-portfolio/suja-driving-school/" },
    { img: "/seo-3.png", url: "/seo-portfolio/floor-express/" },
    { img: "/seo-4.png", url: "/seo-portfolio/franc-laurent/" },
  ];

  return (
    <section
      className="portfolio-main-wrapper relative z-10 scroll-mt-40"
      id="seo"
    >
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">
              Search is the Map
            </span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">
              We're the Compass.
            </span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider portfolioImages={portfolioImages} concated={true} />
      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/seo-portfolio")}
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
