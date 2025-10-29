import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Mlaween() {
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
              href="/design-portfolio"
              className="flex text-[18px] poppins-font items-center"
            >
              <span className="me-2">
                <Image src="/back-icon.svg" width={20} height={20} />
              </span>
              Back
            </Link>
          </div>

          <div className="single-portfolio-wrapper flex mt-5 gap-6 mb-30">
            <div className="single-portfolio-left">
              <Image src="/mlaween.png" width={500} height={500} />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Branding
              </span>
              <div className="portfolio-single-title olivera-font mt-2 mb-5">
                <h1 className="text-[68px] leadning-none single-portfolio-heading">
                  Mlaween
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Mlaween</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope: <span className="font-bold">Custom Logo Design</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country: <span className="font-bold">KSA</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  Mlaween, a Saudi-based brand, approached us to design a
                  culturally resonant and energetic logo. We crafted a custom
                  mascot-style logo featuring a bold camel illustration paired
                  with strong Arabic typography to create a memorable identity.
                </p>
                <p className="poppins-font text-[16px]">
                  The design blends tradition with a modern edge, capturing
                  attention across both physical and digital spaces. The final
                  look reflects confidence, uniqueness, and regional relevance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
