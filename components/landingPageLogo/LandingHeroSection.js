"use client";
import Image from "next/image";
import { useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import StartProjectForm from "../landingPage/StartProjectForm";
import Countdown from "../landingPage/HolidayCountdown";

export default function LandingHeroSection({ onPackageClick }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex items-center justify-center px-4 py-10 relative ">
      <div className="landing_hero_bg_tree hero_landing_bg_tree"></div>
      <div className="hero-top-image landing_hero_bg"></div>
      {/* LEFT SNOW */}
      <div className="pointer-events-none select-none absolute top-0 -left-20 flex items-end sm:block hidden">
        <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[250px] aspect-[2/7] -translate-x-6 sm:-translate-x-10">
          <Image
            src="/landing-images/snow.png" // :point_left: your left tree image
            alt="Christmas Tree Left"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Left Starts  */}
      <div className="start-left-wrapper">
        <div className="start-left-image">
          <Image
            src="/landing-images/start-left.png"
            alt="Start Left"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* RIGHT SNOW */}
      <div class="right-snow-container">
        <div class="right-snow-image">
          <img src="/landing-images/snow.png" alt="Christmas Tree Right" />
        </div>
      </div>
      {/* Bottom RIGHT SNOW */}
      <div className="pointer-events-none select-none absolute -bottom-28  -right-20 flex items-end justify-end">
        <div className="relative w-[400px] sm:w-[400px] md:w-[400px] lg:w-[250px] aspect-[1] translate-x-6 sm:translate-x-10 sm:block hidden">
          <Image
            src="/landing-images/snow.png" // :point_left: your right tree image
            alt="Christmas Tree Right"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Right Starts  */}
      {/* <div className="pointer-events-none select-none absolute top-2 right-8 flex items-end">
        <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[330px] aspect-[2/7] -translate-x-6 sm:-translate-x-10">
          <Image
            src="/landing-images/hero-start-right.png"   // :point_left: your left tree image
            alt="Christmas Tree Left"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div> */}
      <div className="start-right-wrapper">
        <div className="start-right-image">
          <Image
            src="/landing-images/hero-start-right.png"
            alt="Start Left"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* MAIN CONTENT */}
      <section
        className="relative z-10 mx-auto flex relative  mx-auto
 flex-col items-center sm:px-4 pt-15 pb-12 text-center sm:pt-12 sm:pb-16 lg:pt-16 "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 absolute -top-2">
          {/* Logo container */}
          <div className="relative h-12 w-[250px]">
            {" "}
            {/* Bigger + proper size */}
            <Image
              src="/landing-images/landing-logo.png"
              alt="Vibrant Media Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Limited badge */}
        <span className="limited-pill">Limited Deal!</span>
        {/* Heading */}
        <h1
          className="text-center text-white gilory-font-bold leading-[1.1]
  heading_main cap_before"
        >
          <span className="block">Give Your Brand a Festive</span>
          <span className="block">Holiday Logo Makeover</span>
        </h1>
        {/* Subheading */}
        <p className="subHading_hero">
          <span className="">
            The Holiday Clock is Ticking! Don’t Miss This Limited-Time Christmas
            Offer
          </span>
        </p>
        {/* Divider */}
        <div className="mt-6 w-full max-w-3xl mx-auto flex items-center gap-4">
          {/* Left line */}
          <div className="relative flex-1 h-[10px] w-full">
            <Image
              src="/landing-images/line-shadow.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Center text */}
          <div className="text-lg text-white/70 gilory-font-medium ">
            Ends in
          </div>
          {/* Right line */}
          <div className="relative flex-1 h-[10px]">
            <Image
              src="/landing-images/line-shadow-right.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <Countdown />
        {/* Offer card */}
        <div className="relative">
          <div className="fifty_one">
            <Image
              src="/landing-images/fifty-xl.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={110}
            />
          </div>
          <div className="fifty_two">
            <Image
              src="/landing-images/fifty-xl.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={110}
            />
          </div>
          <div className="fifty_three">
            <Image
              src="/landing-images/fifty-xl.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={220}
            />
          </div>
          <div className="mt-10 w-full max-w-6xl rounded-[32px] border border-white/10  px-5 py-6 backdrop-blur-md sm:px-8 sm:py-7 bg-hero-card">
            <h2 className="subHeading">
              Your Business's Gift:
              <span className="text-[#47D2B6] gilory-font-bold">
                {" "}
                {"  "}50% OFF Logo Design Drop!
              </span>
            </h2>
            <p className="custom-text">
              This Christmas, we are cutting the cost, not the quality. Get
              high-quality, professional logos at half price only for a limited
              time!
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {/* <span class="Get_Christmas_Offer">Get Christmas Offerss</span> */}
              <div className="hidden md:block landing-btn example-2">
                <button
                  onClick={onPackageClick}
                  className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
                  style={{
                    background:
                      "linear-gradient(182deg,rgb(47 130 137)),#47D2B6)",
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
          </div>
          <div className="money_back">
            <Image
              src="/landing-images/money_back.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={120}
            />
          </div>
          <div className="fifty_four">
            <Image
              src="/landing-images/fifty-xl.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={110}
            />
          </div>
          <div className="fifty_five">
            <Image
              src="/landing-images/fifty-xl.png"
              alt=""
              className="object-contain"
              priority
              height={5}
              width={220}
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="gilory-font-semibold text-lg">
            We stand behind every design. If you’re not completely satisfied,
            you get your money back —
            <span className="gilory-font-semibold text-[#8860EB]">
              {" "}
              no risk, all rewards.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
