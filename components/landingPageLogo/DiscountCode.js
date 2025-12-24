import Image from "next/image";
import React, { useState } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

export default function DiscountCode() {
  const [isCopied, setIsCopied] = useState(false);

  const discountCode = "CHRISTMAS50";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setIsCopied(true);

      // reset back after 1.5s
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative max-container-width w-[80%] mx-auto mt-20 mb-30 responsive-w-90">
      <Image
        src="/landing-images/snow.png"
        alt=""
        width={200}
        height={200}
        className="discount-snow"
      />
      <img
        className="discount-dollar left-dollar-1"
        src="/landing-images/dollar-left-1.png"
      />
      <img
        className="discount-dollar left-dollar-2"
        src="/landing-images/dollar-left-2.png"
      />
      <img
        className="discount-dollar left-dollar-3"
        src="/landing-images/dollar-left-3.png"
      />
      <img
        className="discount-dollar left-dollar-4"
        src="/landing-images/dollar-left-4.png"
      />
      <img
        className="discount-dollar left-dollar-5"
        src="/landing-images/dollar-left-5.png"
      />

      {/* Right Images Start */}
      <img
        className="discount-dollar right-dollar-1"
        src="/landing-images/dollar-right-1.png"
      />
      <img
        className="discount-dollar right-dollar-2"
        src="/landing-images/dollar-right-2.png"
      />
      <img
        className="discount-dollar right-dollar-3"
        src="/landing-images/dollar-right-3.png"
      />
      <img
        className="discount-dollar right-dollar-4"
        src="/landing-images/dollar-right-4.png"
      />
      <img
        className="discount-dollar right-dollar-5"
        src="/landing-images/dollar-right-5.png"
      />

      <div className="discount-card-wrapper text-center">
        <h2 className="gilory-font-bold">Use Discount Code:</h2>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleCopy}
            className={`gilory-font-bold discount-copy-btn ${
              isCopied ? "is-copied" : ""
            }`}
          >
            <span className="flex items-center justify-center">
              {isCopied ? (
                <LuCheck className="text-green-400" />
              ) : (
                <LuCopy className="mirror-x" />
              )}

              <span className="ms-3">
                {isCopied ? "Copied!" : discountCode}
              </span>
            </span>
          </button>
        </div>

        <p className="gilory-font-semibold mt-3">
          Get automatic 50% OFF on every package.
        </p>
      </div>
    </div>
  );
}
