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
              <img src="/suja.webp" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Search engine optimization
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Suja Driving School
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Suja Driving School</span>
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
                  Suja Driving School is a London-based provider of
                  DVSA-approved driving lessons, offering both manual and
                  automatic options. They approached us with one goal: to grow
                  their organic visibility and generate more leads through
                  search. With increasing competition in local areas, they
                  needed a stronger digital presence to match their reputation.
                  That’s where we stepped in to build a strategy that could
                  scale.
                </p>

                <h3 className="text-white poppins-font text-[20px]">
                  Challenges with the Website
                </h3>
                <p className="poppins-font text-[16px]">
                  The original website had low-value content, limited SEO
                  structure, and almost no visibility for relevant keywords. Key
                  pages lacked clarity, failed to align with search intent, and
                  did not drive meaningful engagement. There was no blog, no
                  location-specific targeting, and poor use of analytics tools.
                  As a result, the site struggled to bring in qualified traffic
                  or rank in competitive areas.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  Our Counter Strategy
                </h3>
                <p className="poppins-font text-[16px]">
                  We transformed the site into a high-performing SEO asset by
                  optimizing the structure, rewriting core pages, and
                  introducing geo-targeted keywords. Blogs and service pages
                  were built around high-intent local searches. We also fixed
                  crawl issues, improved page speed, and set up GA4 and GSC for
                  accurate tracking and performance insight.
                </p>
                <h3 className="text-white poppins-font text-[20px]">
                  What We Helped the Client Achieve
                </h3>
                <p className="poppins-font text-[16px]">
                  In just six months, Suja experienced a sharp rise in traffic,
                  achieving over 35,000 search clicks and 1.58 million
                  impressions. The average ranking position improved
                  significantly, and organic search alone brought in 56K new
                  users. Engagement time rose to 1 minute 45 seconds, proving
                  stronger relevance. All results were achieved through organic
                  SEO without incurring ad spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
