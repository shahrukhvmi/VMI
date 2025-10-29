import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
import StatsSection from "@/components/StatsSection";
// import Creative from "@/components/Creative";
const Creative = dynamic(() => import("@/components/Creative"), { ssr: false });

import GiffSection from "@/components/GiffSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Technologia from "@/components/Technologia";
import Footer from "@/components/Footer";
import Rights from "@/components/Rights";
import RingSection from "@/components/RingSection";
import SecondNavbar from "@/components/SecondNavbar";
import HeroTwo from "@/components/HeroTwo";
import GlowCard from "@/components/GlowCard";
import HomePortfolioSection from "@/components/HomePortfolioSection";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MetaLayout from "@/Meta/MetaLayout";
import { meta_url } from "@/config/constants";

// const HaloCanvas = dynamic(() => import("@/components/HaloCanvas"), {
//   ssr: false,
// });
// const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), {
//   ssr: false,
// });

export async function getServerSideProps() {
  try {
    // Fetch dynamic content from WordPress API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/main`);
    const data = await res.json(); // Assuming this gives you your layout data
    console.log(data, "about us page data");
    return {
      props: {
        layoutData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error);
    return {
      props: {
        layoutData: null,
      },
    };
  }
}

export default function Index({ layoutData }) {
  console.log(layoutData, "Index Data");

  const data = layoutData?.data?.page_data;



  console.log(data, "datadatadatadatadata")
  const router = useRouter();

  return (
    <>
      <MetaLayout
        title="Full-stack Marketing and Branding Agency"
        description="Vibrant Media Inc. delivers tailored digital marketing, web design, SEO, and branding services for businesses aiming for growth locally and globally."
        canonical={`${meta_url}`}
      />
      <main className="relative text-white min-h-screen overflow-hidden">
        {/* <LiquidCursor /> */}

        <div className="relative">
          {/* <HeroTwo /> */}
          <HeroSection hero={data?.sections?.[0]?.fields[0]?.subfields} />

          <RingSection ringSec={data?.sections?.[1]?.fields[0]?.subfields} />
        </div>
        {/* <StatsSection /> */}
        <Creative creativeData={data?.sections?.[4]?.fields} services={data?.featured_services} heading={data?.sections?.[2]?.fields} />

        {/* Mobile Section */}

        <div className="mobile-ring-slider relative z-10">
          <div className="w-6xl mx-auto max-container-width mb-20 z-10 ring-slider-responsive-heading">
            <div className="inner-heading text-center w-full">
              <h2 className="olivera-font">
                <span className="">Plan Your First</span> <br />
                <span className="inner-heading-span">Strategy with Us</span>
              </h2>
            </div>
          </div>

          <div className="relative w-full">
            <div className="w-full mt-15 mb-40">
              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-1.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">
                    1. Fill Out Our Online Form
                  </h3>
                  <p className="poppins-font">
                    Submit your queries, ideas, and requirements through our
                    online form. You’ll be asked for a few necessary details.
                    Ensure you provide only accurate information, so we can
                    respond with clarity and precision.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-2.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">2. Let’s Do Our Work</h3>
                  <p className="poppins-font">
                    Our team will review your objectives, scope, and priorities
                    in detail to prepare a quotation.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-3.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">3. Receive Quotation</h3>
                  <p className="poppins-font">
                    After we’ve thoroughly evaluated the provided information ,
                    we’ll deliver you the quotation, outlining the recommended
                    services, timelines, and estimated investment.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-4.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">
                    4. Confirm and Get Started
                  </h3>
                  <p className="poppins-font">
                    As soon as you approve the quotation, we’ll start building,
                    executing, and reporting on your first marketing strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomePortfolioSection portfolio={data?.featured_portfolios} />


        <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main md:pt-100 py-40 z-10 relative">
          <div className="brand-secton-wrap center-content middle-quote-font">
            <h3
              className="text-center olivera-font"
              dangerouslySetInnerHTML={{
                __html: data?.sections?.[6]?.fields[0]?.value || "", // Ensure the value is a string
              }}
            ></h3>
            {/* <div className="hero-btn example-2">
            <button
              onClick={() => router.push("/contact-us")}
              className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
              style={{
                background:
                  "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
              }}
            >
              Speak with Us{" "}
            </button>
          </div> */}
          </div>
        </div>
        {/* <GiffSection /> */}
        <TestimonialSlider testimonialData={data?.featured_testimonials} />
        <Technologia techData={data?.sections?.[9]?.fields} />
        <div className="max-container-width w-6xl mx-auto flex justify-center great-main items-center z-10 relative">
          <div className="great-design-wrap center-content middle-quote-font">
            <h3
              className="text-center olivera-font"
              dangerouslySetInnerHTML={{
                __html: data?.sections?.[9]?.fields[1]?.value || "", // Ensure the value is a string
              }}
            ></h3>
            {/* Desktop CTA Button */}
            <div className="flex justify-center mt-3">
              <div className="hero-btn example-2">
                <button
                  onClick={() => router.push("/contact-us")}
                  className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
                  style={{
                    background:
                      "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                    boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
                  }}
                >
                  {data?.sections?.[9]?.fields[0]?.value || ""}

                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Rights /> */}
      </main>
    </>
  );
}
