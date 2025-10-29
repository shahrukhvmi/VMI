import PortfolioDesignWrap from "@/components/portfolio/PortfolioDesignWrap";
import PortfolioDevelopmentWrap from "@/components/portfolio/PortfolioDevelopmentWrap";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioSeoWrap from "@/components/portfolio/PortfolioSeoWrap";
import PortfolioSocialWrap from "@/components/portfolio/PortfolioSocialWrap";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import Link from "next/link";
import React from "react";

export default function portfolio() {
  return (
    <>
      <MetaLayout
        title="Our Creative Work"
        description="Explore our portfolio showcasing UI/UX design, web development, branding, SEO, and digital marketing projects for clients across industries and markets."
        canonical={`${meta_url}portfolio/`}
      />
      <main className="relative text-white overflow-hidden">
        <section>
          <div className="relative flex flex-col items-center justify-center pt-20 text-white text-center px-4 z-10 ">
            {/* <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
          <span className="bg-white/10 text-sm available-text px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
            <span className="me-1 text-[#30D21A] text-[18px]">●</span>Still
            confused about us
          </span>
          <h1 className="hero-text leading-tight z-10 olivera-font poppins-font mb-5">
            Stories Told in <br /> Pixels and Code
            <span className="hero-span olivera-font">Development</span> Agency
          </h1>
          <div className="flex justify-between gap-6 portfolio-fields">
            <Link href="#design">
              <div className="portfolio-banner-badge flex items-center justify-center">
                <img src="/design-icon.svg" alt="Designing" />
                <p className="ms-2 poppins-font">Designing</p>
              </div>
            </Link>

            <Link href="#development">
              <div className="portfolio-banner-badge flex items-center justify-center">
                <img src="/development-icon.svg" alt="Web Development" />
                <p className="ms-2 poppins-font">Web Development</p>
              </div>
            </Link>

            <Link href="#social">
              <div className="portfolio-banner-badge flex items-center justify-center">
                <img src="/social-icon.svg" alt="Social Media Marketing" />
                <p className="ms-2 poppins-font">Social Media Marketing</p>
              </div>
            </Link>

            <Link href="#seo">
              <div className="portfolio-banner-badge flex items-center justify-center">
                <img src="/seo-icon.svg" alt="Search engine optimization" />
                <p className="ms-2 poppins-font">Search engine optimization</p>
              </div>
            </Link>
          </div> */}
          </div>
        </section>

        <PortfolioDesignWrap />

        <PortfolioDevelopmentWrap />

        <PortfolioSocialWrap />

        <PortfolioSeoWrap />
      </main>
    </>
  );
}
