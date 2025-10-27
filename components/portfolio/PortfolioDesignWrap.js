import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioDesignWrap() {
  const router = useRouter();

  const portfolioImages = [
    { img: "/design-1.webp", url: "/design-portfolio/shawarma-lite/" },
    {
      img: "/design-2.webp",
      url: "/design-portfolio/almas-real-estate-services/",
    },
    { img: "/design-3.webp", url: "/design-portfolio/wefix/" },
    { img: "/design-4.webp", url: "/design-portfolio/top-grease/" },
    { img: "/design-5.webp", url: "/design-portfolio/level-orthodontics/" },
    { img: "/design-6.webp", url: "/design-portfolio/marca-beauty-supplies/" },
    { img: "/design-7.webp", url: "/design-portfolio/the-shiny-surface/" },
    { img: "/design-8.webp", url: "/design-portfolio/no-code-low-code/" },
    { img: "/design-9.webp", url: "/design-portfolio/aj-cleaning-london/" },
    { img: "/design-10.webp", url: "/design-portfolio/joe-sells-miami/" },
    {
      img: "/design-11.webp",
      url: "/design-portfolio/lbs-lacrete-backhoe-services/",
    },
    { img: "/design-12.webp", url: "/design-porfolio/jana" },
    { img: "/design-13.png", url: "/design-portfolio/bull-supps/" },
    { img: "/design-14.webp", url: "/design-portfolio/mlaween/" },
    { img: "/design-15.webp", url: "/design-portfolio/alaa-alafaq/" },
  ];

  return (
    <section
      className="portfolio-main-wrapper relative z-10 scroll-mt-40"
      id="design"
    >
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">Creative Design</span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">
              From Idea to Impact
            </span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider portfolioImages={portfolioImages} concated={false} />

      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/design-portfolio")}
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
