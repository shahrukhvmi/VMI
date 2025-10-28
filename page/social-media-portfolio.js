import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialMediaPortfolio() {
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
                It's Not Just Social
              </span>{" "}
              <br />
              <span className="portfolio-inner-heading-span">
                It's Strategy
              </span>
            </h2>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/social-media-portfolio/tech-ancestry">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-1.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Tech Ancestry</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/social-media-portfolio/bridle-360">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-2.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Bridle 360</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/social-media-portfolio/ravvrank">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-3.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Ravvrank.co</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/social-media-portfolio/tanaal-properties">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-4.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Tanaal Properties
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30 mb-0 md:mb-40">
            <Link href="/social-media-portfolio/salli-sit-happy">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-5.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Salli Sit Happy{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/social-media-portfolio/aaila-foods">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/social-6.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Social Media Campaigns
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Aaila Foods</p>
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
