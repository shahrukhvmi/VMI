import Image from "next/image";
import React from "react";

export default function LandingGrowBrand() {
  return (
    <div className="relative max-container-width w-[80%] mx-auto mt-20 landing-grow-brand-wrap responsive-w-90">
      <Image
        src="/landing-images/snow.png"
        alt=""
        width={300}
        height={300}
        className="landing-grow-snow"
      />
      <div className="landing-section-heading gilory-font-bold pt-6 pb-16">
        <h2 className="text-center">
          Your Next
          <span className="landing-heading-purple"> Brand Evolution </span>
          is Here
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {/* Card 1 */}
        <div className="landing-service-card w-full">
          <div className="landing-service-icon">
            <div>
              <img src="/landing-images/landing-icon-code.svg" />
            </div>
          </div>
          <h3 className="landing-service-title gilory-font-bold pb-2">
            Web & App Development
          </h3>
          <p className="landing-service-text gilory-font">
            Build fast, secure, and scalable digital products tailored to your
            brand. From websites to full-scale applications, we turn your ideas
            into polished user experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div className="landing-service-card w-full">
          <div className="landing-service-icon">
            <div>
              <img src="/landing-images/landing-icon-brush.svg" />
            </div>
          </div>
          <h3 className="landing-service-title gilory-font-bold pb-2">
            Branding & Creative Design
          </h3>
          <p className="landing-service-text gilory-font">
            Give your brand a bold identity that stands out. We craft logos,
            visuals, and design systems that communicate your story with clarity
            and style.
          </p>
        </div>

        {/* Card 3 */}
        <div className="landing-service-card w-full">
          <div className="landing-service-icon">
            <div>
              <img src="/landing-images/landing-icon-pen.svg" />
            </div>
          </div>
          <h3 className="landing-service-title gilory-font-bold pb-2">
            UI/UX Design
          </h3>
          <p className="landing-service-text gilory-font">
            Deliver seamless, intuitive experiences for your users. We design
            interfaces that are beautiful, functional, and built around real
            user behavior.
          </p>
        </div>

        {/* Card 4 */}
        <div className="landing-service-card w-full">
          <div className="landing-service-icon">
            <div>
              <img src="/landing-images/landing-icon-sound.svg" />
            </div>
          </div>
          <h3 className="landing-service-title gilory-font-bold pb-2">
            Digital Marketing & Strategy
          </h3>
          <p className="landing-service-text gilory-font">
            Boost your online presence with data-driven campaigns. We help your
            brand attract, engage, and convert customers through smart strategy
            and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}
