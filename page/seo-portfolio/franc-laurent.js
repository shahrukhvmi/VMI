import Link from "next/link";
import React from "react";

export default function FrancLaurent() {
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
              <img src="/franc-laurent.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Search engine optimization
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Franc Laurent
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Franc Laurent</span>
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
                  Franc Laurent is a UK-based luxury jewellery brand
                  specialising in Moissanite jewellery, including rings, wedding
                  bands, earrings, and necklaces. Despite strong market
                  potential, they had no digital presence, no website, SEO, or
                  analytics. They approached us with a clear goal: to establish
                  online visibility and attract high-intent traffic without
                  relying on paid ads.
                </p>

                <h3 className="text-white poppins-font text-[20px]">
                  Client Overview
                </h3>
                <p className="poppins-font text-[16px]">
                  Franc Laurent had no digital presence, making it difficult to
                  establish its brand online. After launching the initial
                  website, traction remained minimal, with only 1.42K
                  impressions, 31 clicks, and an average ranking of 52.6. The
                  technical foundation was also lacking. The brand needed a
                  complete web and SEO solution from the ground up.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  Our Counter Strategy
                </h3>
                <p className="poppins-font text-[16px]">
                  We began by designing and developing a fast, mobile-friendly,
                  and SEO-ready website that We designed and developed a fast,
                  mobile-friendly website aligned with the brand’s aesthetics. A
                  strategic SEO plan with high-intent keywords and targeted blog
                  content boosted visibility and buyer engagement. Technical
                  improvements and performance tracking ensured long-term
                  growth, a strong user experience, and measurable results.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  What We Helped the Client Achieve
                </h3>
                <p className="poppins-font text-[16px]">
                  In just 90 days, Franc Laurent’s impressions surged from 1.42K
                  to 28.1K, and clicks increased 6x, from 31 to 187. The site’s
                  average ranking improved from 52.6 to 49.2, while 1,700 new
                  users were acquired through organic search engine results.
                  These numbers reflect stronger visibility, higher engagement,
                  and a growing presence in the luxury jewellery market. without
                  relying on paid advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
