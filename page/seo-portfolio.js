import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SeoPortfolio() {
  return (
    <main className="relative text-white  overflow-hidden z-10">
      <section>
        <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 single-portfolio-responsive-spacing">
          <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
        </div>

        <div className="w-6xl mx-auto max-container-width portfolio-all-wrap gap-30">
          <div className="portfolio-inner-heading text-center w-full">
            <h2 className="olivera-font">
              <span className="portfolio-inner-heading-top">
                Search is the Map
              </span>{" "}
              <br />
              <span className="portfolio-inner-heading-span">
                We're the Compass.
              </span>
            </h2>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/seo-portfolio/loco-customs">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/seo-1.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Search engine optimization
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Loco's Customs
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/seo-portfolio/suja-driving-school">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/seo-2.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Search engine optimization
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Suja Driving School
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30 mb-0 md:mb-40">
            <Link href="/seo-portfolio/floor-express">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/seo-3.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Search engine optimization
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Floor Express</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/seo-portfolio/franc-laurent">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/seo-4.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Search engine optimization
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Franc Laurent</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
