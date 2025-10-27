import React from "react";

function PortfolioHero() {
  return (
    <section>
      <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
        <div className="portfolio-banner-shadow"></div>
        <div className="portfolio-banner-shadow-right"></div>
        <span className="bg-white/10 text-sm available-text px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
          <span className="me-1 text-[#30D21A] text-[18px]">●</span>Still
          confused about us
        </span>
        <h1 className="hero-text leading-tight z-10 olivera-font poppins-font mb-5">
          Stories Told in <br /> Pixels and Code
          {/* <span className="hero-span olivera-font">Development</span> Agency */}
        </h1>
        <div className="flex justify-between gap-6 portfolio-fields">
          <div className="portfolio-banner-badge flex items-center justify-center">
            <img src="/design-icon.svg" alt="Design" />
            <p className="ms-2 poppins-font">Designing</p>
          </div>

          <div className="portfolio-banner-badge flex items-center justify-center">
            <img src="/development-icon.svg" alt="Design" />
            <p className="ms-2 poppins-font">Web Development</p>
          </div>

          <div className="portfolio-banner-badge flex items-center justify-center">
            <img src="/social-icon.svg" alt="Design" />
            <p className="ms-2 poppins-font">Social Media Marketing</p>
          </div>

          <div className="portfolio-banner-badge flex items-center justify-center">
            <img src="/seo-icon.svg" alt="Design" />
            <p className="ms-2 poppins-font">Search engine optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
