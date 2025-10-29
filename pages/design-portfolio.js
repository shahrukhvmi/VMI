import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DesignPortfolio() {
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
                Creative Design
              </span>{" "}
              <br />
              <span className="portfolio-inner-heading-span">
                From Idea to Impact
              </span>
            </h2>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/shawarma-lite">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-1.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Shawarma Lite</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/almas-real-estate-services">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-2.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Almas Real Estate Services
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/top-grease">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-4.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Top Grease</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/wefix">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-3.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Wefix</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/level-orthodontics">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-5.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Level Orthodontics
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/marca-beauty-supplies">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-6.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Marca Beauty Supplies
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/the-shiny-surface">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-7.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      The Shiny Surface
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/no-code-low-code">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-8.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      No Code Low Code Branding
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/lbs-lacrete-backhoe-services">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-11.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      LBS Lacrete Backhoe Services
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/jana">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-12.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Jana</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/aj-cleaning-london">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-9.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Aj Cleaning London
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/joe-sells-miami">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-10.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">
                      Joe Sells Miami
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single flex justify-center gap-30">
            <Link href="/design-portfolio/bull-supps">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-13.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Bull Supps</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/design-portfolio/mlaween">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-14.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Mlaween</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="portfolio-single porfolio-alone flex justify-center gap-30 mb-0 md:mb-40">
            <Link href="/design-portfolio/alaa-alafaq">
              <div className="detail-portfolio-image-wrapper relative">
                <Image src="/design-15.png" width={500} height={500} />
                <div className="detail-portfolio-image-overlay">
                  <div className="detail-portfolio-banner-badge">
                    <div className="mb-2">
                      <span className="ms-2 poppins-font detail-portfolio-branding">
                        Branding
                      </span>
                    </div>
                    <p className="ms-2 poppins-font font-bold">Alaa Alafaq</p>
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
