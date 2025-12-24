"use client";

import React from "react";
import Image from "next/image";

const LandingPageFooter = () => {
  return (

    <footer className="relative bg-black sm:pt-14 sm:pb-22 w-full">
      {/* TOP GLOW IMAGE */}
      <div class="footer-shadow-wrapper ">
        <div class="footer-shadow-image">
          <Image
            src="/landing-images/footer_top_shadow.png"
            alt="Footer top glow"
            fill
            className="footer-shadow-img sm:block hidden"
            priority
          />
        </div>
      </div>



      {/* MAIN GRADIENT STRIP */}
      <div className="mx-auto max-container-width w-[80%] px-6 py-6 sm:py-8 lg:py-9 ">
        <div className="flex flex-col gap-4 items-center justify-between sm:flex-row ">
          {/* LEFT SIDE – LOGO + COPYRIGHT */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Circular gradient logo */}


            <div className="flex flex-col footer">
              {/* Logo container */}
              <div className="relative h-12 w-[250px]">  {/* Bigger + proper size */}
                <Image
                  src="/landing-images/landing-logo.png"
                  alt="Vibrant Media Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="subtitle-md py-6 text-center">
                Copyrights © 2025 by Vibrant Media. All rights reserved.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE – TALK TO SALES BUTTON */}
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://wa.me/923452646481",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="inline-flex items-center gap-3 rounded-full border border-white/40
             px-5 py-2 text-xs sm:text-sm text-white/80
             hover:bg-white/5 hover:border-white/70
             transition-colors duration-200 gilory-font-semibold subtitle"
          >
            <span className="flex h-5 w-5 items-center justify-center">
              <Image
                src="/landing-images/talk_to_sale.png"
                alt="Talk to Sales Icon"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </span>
            <span>Talk to Sales</span>
          </button>


        </div>
      </div>
    </footer >
  );
};

export default LandingPageFooter;
