import Link from "next/link";
import React from "react";

export default function Ravvrank() {
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
              href="/social-media-portfolio"
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
              <img src="/ravvrank.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Social Media Campaigns
              </span>
              <div className="portfolio-single-title olivera-font mt-4 mb-6">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  RevvRank
                </h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">RevvRank</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  My Role: <span className="font-bold">Visual Designer</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Tools Used:{" "}
                  <span className="font-bold">
                    Adobe Photoshop and Illustrator
                  </span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Country: <span className="font-bold">USA</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Details</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  For RevvRank, we executed a powerful series of visually
                  compelling social media posts focused on delivering SEO
                  education and awareness. The aim was to blend creativity with
                  information—making each post a scroll-stopper while conveying
                  key digital marketing insights.
                </p>
                <p className="poppins-font text-[16px]">
                  The designs featured attention-grabbing visuals, bold
                  typography, and crisp content that reflected the brand’s
                  positioning as an SEO authority. From myth-busting to
                  technical tips and feature highlights, each post was tailored
                  to resonate with businesses aiming to boost their online
                  visibility.
                </p>
                <p className="poppins-font text-[16px]">
                  This project highlighted our ability to balance design
                  aesthetics with strategic messaging, ultimately driving user
                  interaction and brand credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
