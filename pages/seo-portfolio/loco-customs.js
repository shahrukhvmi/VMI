import Link from "next/link";
import React from "react";

export default function LocoCustoms() {
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
              href="/seo-portfolio"
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
              <img src="/loco.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Search engine optimization
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Loco's Customs
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Loco's Customs</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope:{" "}
                  <span className="font-bold">Designer, Developer & SEO</span>
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
                <h3 className="text-white poppins-font text-[20px]">Details</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <h3 className="text-white poppins-font text-[20px]">
                  Client Overview
                </h3>
                <p className="poppins-font text-[16px]">
                  Loco’s Customs is a USA-based automotive styling and
                  modification brand, offering custom wraps, performance parts,
                  powder coating, and aesthetic upgrades. We’ve been their
                  digital growth partner since the beginning of their brand
                  journey.
                </p>

                <h3 className="text-white poppins-font text-[20px]">
                  Challenges with the Website
                </h3>
                <p className="poppins-font text-[16px]">
                  They came to us with a twofold challenge: absence of a digital
                  infrastructure and zero traffic or visibility in Google
                  Search. The brand’s zero visibility and entirely offline
                  nature resulted in missed potential leads and exposure.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  Our Counter Strategy
                </h3>
                <p className="poppins-font text-[16px]">
                  We began with understanding the client’s position, objectives,
                  and short-term goals to pitch a strategy that would
                  efficiently counter the twofold challenge. Utilizing our
                  advanced web development expertise, we designed and developed
                  an intuitive, mobile-friendly, and user-friendly website.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  What We Helped the Client Achieve
                </h3>
                <p className="poppins-font text-[16px]">
                  We helped Locos Customs go from offline obscurity to a
                  searchable, high-performing brand in the competitive
                  automotive styling space in just 6 months. The brand grew from
                  zero visibility to 119K impressions and 1,270 organic clicks.
                  Our SEO strategy helped it gain 2,000 active users, including
                  702 from organic search without paid ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
