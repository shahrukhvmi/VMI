import Link from "next/link";
import React from "react";

export default function TaiiaJewellery() {
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
              <img src="/taiia-jewellery.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Web Design & Development
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  TAIIA Jewellery
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">TAIIA Jewellery</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope: <span className="font-bold">Website Design</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country:{" "}
                  <span className="font-bold">United Arab Emirates</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  TAIIA Jewellery, a premium jewellery brand based in the UAE,
                  needed a digital presence that mirrored its sophistication and
                  luxurious aesthetic. Our focus was entirely on website design,
                  ensuring every element felt high-end and elegant.
                </p>
                <p className="poppins-font text-[16px]">
                  The design draws inspiration from opulence and
                  minimalism—balancing rich visuals with clean, spacious
                  layouts. The homepage and product showcase areas were
                  meticulously structured to put the spotlight on their
                  exquisite jewellery collections, while the branding remained
                  sleek and graceful throughout.
                </p>
                <p className="poppins-font text-[16px]">
                  This was a design-centric project, aimed at building a
                  foundation for a visually powerful and future-ready online
                  presence for the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
