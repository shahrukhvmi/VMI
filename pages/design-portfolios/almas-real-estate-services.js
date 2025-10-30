import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AlmasRealEstate() {
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
              <img src="/almas.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Branding
              </span>
              <div className="portfolio-single-title olivera-font mt-2 mb-5">
                <h1 className="text-[68px] leading-none single-portfolio-heading">
                  Almas Real Estate Services
                </h1>
              </div>
              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client:{" "}
                  <span className="font-bold">Almas Real Estate Services</span>
                </p>
              </div>
              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  Scope:{" "}
                  <span className="font-bold">
                    Logo Design, Business Card, Letterhead, Company Profile,
                    Envelope, Employee ID Card
                  </span>
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
                  We worked closely with Almas Real Estate Services, a
                  Saudi-based firm, to create a complete corporate identity that
                  reflects their professionalism and trust in the real estate
                  sector. Our deliverables included a modern logo, sleek
                  stationery designs, and essential corporate assets like ID
                  cards and company profiles.
                </p>
                <p className="poppins-font text-[16px]">
                  The brand identity was designed with clarity, elegance, and
                  consistency in mind to ensure a cohesive look across both
                  print and digital platforms. The result is a polished and
                  reliable visual system that enhances the brand’s credibility
                  and presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
