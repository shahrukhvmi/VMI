import ServiceRingSection from "@/components/services/ServiceRingSection";
// import ServiceHorizontal from "@/components/services/ServiceHorizontal";
import ServicesHero from "@/components/services/ServicesHero";
import StarsCanvas from "@/components/StarsCanvas";
import Technologia from "@/components/Technologia";
import TestimonialSlider from "@/components/TestimonialSlider";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import { useRouter } from "next/router";
import React from "react";

export default function services() {
  const router = useRouter();

  return (
    <>
      <MetaLayout
        title="Complete Marketing and Design Solutions"
        description="Vibrant Media Inc. covers all aspects of marketing and design, including UI/UX, SEO, branding, web, and app development, driving growth across industries."
        canonical={`${meta_url}services/`}
      />
      <main className="relative text-white min-h-screen overflow-hidden">
        <ServicesHero />

        {/* <ServiceHorizontal /> */}

        <div className="max-container-width w-6xl mx-auto flex justify-center great-main items-center z-10 relative service-great-responsive">
          <div className="great-design-wrap center-content middle-quote-font">
            <h3 className="text-center olivera-font">
              Great design isn’t just visual — it’s functional,
              <br /> intentional, and obsessively crafted to move people.
            </h3>
            <div className="text-center py-6">
              <p className="poppins-font">By Vibrant Media</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 desktop-ring-slider">
          <ServiceRingSection />
        </div>

        {/* Mobile Section */}

        <div className="mobile-ring-slider relative z-10">
          <div className="w-6xl mx-auto max-container-width mb-20 z-10 ring-slider-responsive-heading">
            <div className="inner-heading text-center w-full">
              <h2 className="olivera-font">
                <span className="">Process is the</span> <br />
                <span className="inner-heading-span">Key to success</span>
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
                    1. A free strategy to start!
                  </h3>
                  <p className="poppins-font">
                    Before our meeting, complete a form in 5 minutes. Outline
                    goals and audience. We'll discuss outcomes and a plan.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-2.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">2. Onboarding</h3>
                  <p className="poppins-font">
                    Happy with our strategy? It's time for our 2nd call to
                    onboard you. We'll create milestones and set up your payment
                    plan.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-3.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">3. Let the magic happen</h3>
                  <p className="poppins-font">
                    We bring your project to life, refining details to ensure it
                    is captivating and impactful. Project design, QA testing,
                    and revisions.
                  </p>
                </div>
              </div>

              <div className="relative w-full flex items-center justify-center mb-10">
                <div className="service-ring-card backdrop-blur-[20px] ">
                  <div className="flex justify-center">
                    <img src="/service-ring-4.png" />
                  </div>
                  <h3 className="mb-4 olivera-font">4. Launch & Maintenance</h3>
                  <p className="poppins-font">
                    Once approved, we transfer files, give access, set up
                    backups, and prepare for launch. Handover of files and
                    post-delivery support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-70">
          <Technologia />
        </div>
        <TestimonialSlider />

        <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main pb-70 pt-50 z-10 relative service-brand-responsive">
          <div className="brand-secton-wrap center-content middle-quote-font">
            <h3 className="text-center olivera-font">
              We build what your brand really needs <span>.</span>
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
                Get a Quote{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
