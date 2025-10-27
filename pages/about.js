import AboutHero from "@/components/about/AboutHero";
import AboutVideo from "@/components/about/AboutVideo";
import CeoSection from "@/components/about/CeoSection";
import HorizontalScrollSection from "@/components/about/HorizontalScrollSection";
import StarsCanvas from "@/components/StarsCanvas";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import { useRouter } from "next/router";
import React from "react";

export default function about() {
  const router = useRouter();

  return (
    <>
      <MetaLayout
        title="Our Legacy of Brand Success"
        description="Built on the mission to enable business growth, we blend strategy, creativity, and expertise to help brands thrive locally and globally for the long term."
        canonical={`${meta_url}about/`}
      />
      <main className="relative text-white min-h-screen overflow-hidden">
        <AboutHero />

        <HorizontalScrollSection />

        <CeoSection />

        <AboutVideo />

        <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main py-40 z-10 relative about-last-quote">
          <div className="brand-secton-wrap center-content middle-quote-font">
            <h3 className="text-center olivera-font">
              Our vision lies in our clients’ success and goal fulfillment.{" "}
              <br /> We don’t just deliver on expectations; we deliver what
              moves
              <br /> your business forward. 
            </h3>
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
                Speak with Us{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
