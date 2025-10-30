import PortfolioDesignWrap from "@/components/portfolio/PortfolioDesignWrap";
import PortfolioDevelopmentWrap from "@/components/portfolio/PortfolioDevelopmentWrap";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioSeoWrap from "@/components/portfolio/PortfolioSeoWrap";
import PortfolioSocialWrap from "@/components/portfolio/PortfolioSocialWrap";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
  try {
    // Fetch dynamic content from WordPress API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/main?slug=portfolio`);
    const data = await res.json(); // Assuming this gives you your layout data
    console.log(data, "portfolioo us page data");
    return {
      props: {
        layoutData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error);
    return {
      props: {
        DataTextureLoader: null,
      },
    };
  }
}
export default function portfolio({ layoutData }) {

  console.log(layoutData?.data?.page_data?.sections, "portfolio data ")
  const sliderData = layoutData?.data?.portfolio_loop_data
  console.log(layoutData, "layoutData")

  const creative = layoutData?.data?.page_data?.sections?.[0]?.fields;
  const webDev = layoutData?.data?.page_data?.sections?.[1]?.fields;
  const Social = layoutData?.data?.page_data?.sections?.[2]?.fields;
  const SearchMap = layoutData?.data?.page_data?.sections?.[3]?.fields;

  return (
    <>
      <MetaLayout
        data={layoutData?.head?.json}
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

        <PortfolioDesignWrap creative={creative} slider={sliderData?.[0]?.posts} viewAll={`${sliderData?.[0]?.prefix}/${sliderData?.[0]?.slug}`}/>

        <PortfolioDevelopmentWrap webDev={webDev} slider={sliderData?.[1]?.posts} viewAll={`${sliderData?.[1]?.prefix}/${sliderData?.[1]?.slug}`}/>

        <PortfolioSocialWrap Social={Social}   slider={sliderData?.[2]?.posts} viewAll={`${sliderData?.[2]?.prefix}/${sliderData?.[2]?.slug}`}/>

        <PortfolioSeoWrap SearchMap={SearchMap}  slider={sliderData?.[3]?.posts} viewAll={`${sliderData?.[3]?.prefix}/${sliderData?.[3]?.slug}`}/>
      </main>
    </>
  );
}
