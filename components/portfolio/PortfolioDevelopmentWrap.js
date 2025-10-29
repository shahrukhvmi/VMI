import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioDevelopmentWrap() {
  const router = useRouter();

  const portfolioImages = [
    { img: "/web-1.webp", url: "/development-portfolio/media-co-uk/" },
    { img: "/web-2.webp", url: "/development-portfolio/earthane/" },
    { img: "/web-3.webp", url: "/development-portfolio/rhv-media/" },
    { img: "/floor-port.png", url: "/development-portfolio/floor-express/" },
    { img: "/web-5.webp", url: "/development-portfolio/360-products/" },
    { img: "/web-6.webp", url: "/development-portfolio/loco-customs/" },
    { img: "/web-7.webp", url: "/development-portfolio/fulfill-panda/" },
    { img: "/web-8.webp", url: "/development-portfolio/relish-restaurant/" },
    { img: "/web-9.webp", url: "/development-portfolio/etizan/" },
    { img: "/web-10.webp", url: "/development-portfolio/ferrara/" },
    { img: "/web-11.webp", url: "/development-portfolio/karwan-rent-a-car/" },
    { img: "/web-12.webp", url: "/development-portfolio/taiia-jewellery/" },
  ];

  return (
    <section
      className="portfolio-main-wrapper relative z-10 scroll-mt-40"
      id="development"
    >
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">Web Development</span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">That Performs</span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider portfolioImages={portfolioImages} concated={false} />

      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/development-portfolio")}
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
