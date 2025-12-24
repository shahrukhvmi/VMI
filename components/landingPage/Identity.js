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
          Build
          <span className="landing-heading-purple"> Identity</span>. Prove{" "}
          <span className="landing-heading-purple">Value</span>. Achieve{" "}
          <span className="landing-heading-purple">Scale</span>.
        </h2>
        <p className="gilory-font text-center">
          Your business deserves a brand that feels credible, consistent, and
          unforgettable.
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
            Expert UI/UX Designers
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-strat.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Brand-Driven Strategy
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-brush.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Professional, Clean, Modern Aesthetic
          </p>
        </div>

        <div className="identity-card w-full">
          <Image
            src="/landing-images/identity-clock.svg"
            width={60}
            height={60}
          />
          <p className="gilory-font-semibold mt-5 text-center">
            Built for long-term business growth
          </p>
        </div>
      </div>
    </div>
  );
}
