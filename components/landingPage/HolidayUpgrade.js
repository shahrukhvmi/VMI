import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import StartProjectForm from "./StartProjectForm";

const HolidayUpgrade = ({ onPackageClick }) => {
  return (
    <>
      <section className="HolidayUpgrade relative bg-black">
        <div className="flex justify-center sm:block hidden">
          <div className="sm:pt-12">
            <h2 className="landing-heading text-center">
              The{" "}
              <span className="creative-heading-gradient">Holiday Upgrade</span>{" "}
              You Actually Deserve
            </h2>

            <p className="text-center gilory-font text-[20px]">
              From websites to graphics, choose the services you need. We give
              your business the fresh, professional edge for 2026.
            </p>
          </div>
        </div>
        <div className="holidayUpgrade_bg sm:block hidden">
          <Image
            src="/landing-images/holidayUpgrade.png"
            alt="Christmas Tree Right"
            className="object-cover holidayUpgrade_img"
            width={1950}
            height={5}
            priority
          />
        </div>

        {/* LEFT SNOW */}
        <div className="pointer-events-none select-none absolute top-20 -left-45 flex items-end sm:block hidden">
          <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[450px] aspect-[3/2] -translate-x-6 sm:-translate-x-10">
            <Image
              src="/landing-images/snow.png" // 👈 your left tree image
              alt="Christmas Tree Left"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Left Starts  */}
        <div className="pointer-events-none select-none absolute top-20 left-20 flex items-end sm:block hidden">
          <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[300px] aspect-[2/2] -translate-x-6 sm:-translate-x-10">
            <Image
              src="/landing-images/start-left.png" // 👈 your left tree image
              alt="Christmas Tree Left"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Right Starts  */}
        <div className="pointer-events-none select-none absolute -top-10 -right-15 flex items-end sm:block hidden">
          <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[500px] aspect-[2/2] -translate-x-6 sm:-translate-x-10">
            <Image
              src="/landing-images/start-right.png" // 👈 your left tree image
              alt="Christmas Tree Left"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="text-center christmas_deal_bg">
          <h2 className="landing-heading">
            New Look for the New Year, Secured by the
          </h2>
          <h3 className="landing-heading !text-[#8860EB]">Christmas Deal.</h3>{" "}
          <p className="subtitle-md sm:!mb-18">
            Get a clean, high-impact brand ready for the new year. Do it now.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {/* <span class="Avail_Offer">Avail The Offer</span> */}

            <div className="hidden md:block landing-btn-avail example-2 ">
              <button
                onClick={onPackageClick}
                className="inner flex justify-center gap-2 poppins-font text-5xl items-center "
                style={{
                  background:
                    "linear-gradient(360deg,rgb(47 130 137)),#47D2B6)",
                  boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
                }}
              >
                View Discounted Bundles
              </button>
            </div>
          </div>
          <p className="subtitle-md text-white pt-4">
            Holiday pricing ends soon — secure your spot now.
          </p>
        </div>
      </section>
    </>
  );
};

export default HolidayUpgrade;
