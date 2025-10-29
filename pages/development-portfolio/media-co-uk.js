import Link from "next/link";
import React from "react";

export default function MediaCoUk() {
  return (
    <main className="relative text-white  overflow-hidden z-10">
      <section>
        <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 single-portfolio-inner-responsive-spacing">
          <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
        </div>

        <div className="w-6xl mx-auto max-container-width">
          <div className="porfolio-back-icon">
            <Link
              href="/development-portfolio"
              className="flex text-[18px] poppins-font items-center"
            >
              <span className="me-2">
                <img src="/back-icon.svg" />
              </span>
              Back
            </Link>
          </div>

          <div className="single-portfolio-wrapper flex mt-5 gap-9 mb-30">
            <div className="single-portfolio-left">
              <img src="/media-co-uk.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Web Design & Development
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Media Project
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Media</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope:
                  <span className="font-bold">Custom Website Design</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country: <span className="font-bold">UK</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  Media, a UK based advertising platform, partnered with us to
                  create a high impact website design tailored for a dynamic and
                  content rich user experience. Our primary objective was to
                  design an interface that could simplify complex user journeys
                  such as filtering by city, country, and advertising type while
                  maintaining a premium visual appeal.
                </p>
                <p className="poppins-font text-[16px]">
                  The project began with in depth research and wireframing in
                  Figma, where we focused on structure, usability, and flow. We
                  designed each page to be clean, modern, and user focused,
                  ensuring every screen was visually consistent and easy to
                  navigate. Key attention was given to content hierarchy, call
                  to action placement, and responsive behavior for mobile and
                  desktop views.
                </p>
                <p className="poppins-font text-[16px]">
                  From layout to interactive elements, every part of the design
                  was meticulously planned to reflect the brand’s positioning as
                  a leader in the advertising space. The final UI delivers a
                  balance of simplicity and sophistication, setting the
                  foundation for a seamless user experience once developed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
