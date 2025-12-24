import Image from "next/image";
import React from "react";

export default function Identity() {
  return (
    <div className="relative max-container-width w-[80%] mx-auto mt-20 mb-15 identity-bg responsive-w-90">
      <Image
        src="/landing-images/snow.png"
        alt=""
        width={250}
        height={250}
        className="identity-snow"
      />
      <div className="landing-section-heading gilory-font-bold">
        <h2 className="text-center identity-heading">
          A Clear Path to Identity
          <span className="landing-heading-purple"> Success</span>
        </h2>
        <p className="gilory-font text-center">
          Give your business a logo and brand identity that inspires trust,
          stands out, and leaves a lasting impression.
        </p>
      </div>

      <div className="identity-columns flex mt-16 gap-5">
        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-pen.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Expert Logo & Brand Designers
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-strat.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Strategy That Puts Your Brand First
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-brush.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Clean, Modern, and Professional Design
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-clock.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Built to Drive Long-Term Business Growth
          </p>
        </div>
      </div>
    </div>
  );
}
