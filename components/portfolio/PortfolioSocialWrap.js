import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioSocialWrap() {
  const router = useRouter();

  const portfolioImages = [
    { img: "/social-1.webp", url: "/social-media-portfolio/tech-ancestry/" },
    { img: "/social-2.webp", url: "/social-media-portfolio/bridle-360/" },
    { img: "/social-3.webp", url: "/social-media-portfolio/ravvrank/" },
    {
      img: "/social-4.webp",
      url: "/social-media-portfolio/tanaal-properties/",
    },
    { img: "/social-5.webp", url: "/social-media-portfolio/salli-sit-happy/" },
    { img: "/social-6.webp", url: "/social-media-portfolio/aaila-foods/" },
  ];

  return (
    <section
      className="portfolio-main-wrapper relative z-10 scroll-mt-40"
      id="social"
    >
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">
              It's Not Just Social
            </span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">It's Strategy</span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider portfolioImages={portfolioImages} concated={false} />
      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/social-media-portfolio")}
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
