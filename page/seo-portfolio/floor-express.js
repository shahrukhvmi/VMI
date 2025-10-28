import Link from "next/link";
import React from "react";

export default function FloorExpress() {
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
              <img src="/floor-express.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Search engine optimization
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Floor Express
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Fullfill Panda</span>
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
                  Client Overview:
                </h3>
                <p className="poppins-font text-[16px]">
                  Floor Express is a UK-based flooring supplier, offering
                  high-quality flooring products for both residential and
                  commercial use. They reached out to us with the sole objective
                  of growing organic visibility, attracting more customers
                  through Google Search, and reducing reliance on paid channels.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  Challenges with the Client Website:
                </h3>
                <p className="poppins-font text-[16px]">
                  The website had been experiencing low impressions and stagnant
                  keyword positions, with limited organic traffic despite
                  competitive offerings. The web pages displayed no structured
                  content strategy or SEO roadmap. The Google Search Console and
                  GA4 roadmaps were also underutilized.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  Our Counter Strategy:
                </h3>
                <p className="poppins-font text-[16px]">
                  We implemented a full-funnel SEO strategy for Floor Express,
                  aligning the site with real customer search intent. By using
                  targeted, high-value, location-based keywords, we optimized
                  key pages to improve their visibility and relevance. We also
                  introduced a content plan, focusing on long-tail queries for
                  improved visibility and authority. Technical fixes ensured
                  faster performance and better indexing for both users and
                  search engines.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  What We Helped the Client Achieve:
                </h3>
                <p className="poppins-font text-[16px]">
                  In six months, Floor Express achieved a 70.4% increase in
                  impressions and a 12.2% rise in clicks, with improved average
                  rankings and 5,854 new users from organic search. The average
                  engagement time of 1 minute and 32 seconds reflected stronger
                  content relevance and better alignment with user intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
