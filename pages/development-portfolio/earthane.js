import Link from "next/link";
import React from "react";

export default function Earthane() {
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
              <img src="/earthane.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Web Design & Development
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Earthane
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Earthane</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope:{" "}
                  <span className="font-bold">
                    Custom Website Design and Banners
                  </span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country: <span className="font-bold">Qatar</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  Earthane, an eco-friendly cleaning brand based in Qatar,
                  partnered with us to craft a clean and modern website design
                  that reflects their commitment to sustainability. The goal was
                  to build a design system that feels fresh, minimal, and user
                  friendly while visually aligning with their green mission.
                </p>
                <p className="poppins-font text-[16px]">
                  We focused on creating a full website layout in Figma along
                  with custom hero banners and product showcase sections. The
                  use of calming colors, intuitive structure, and well-balanced
                  white space helped elevate the brand’s digital identity. Every
                  screen was carefully designed to ensure smooth content flow,
                  strong calls to action, and a seamless shopping experience
                  once developed.
                </p>
                <p className="poppins-font text-[16px]">
                  The final result is a scalable design system ready to support
                  Earthane’s product range and brand vision across digital
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
