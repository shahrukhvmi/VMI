import React, { useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import StartProjectForm from "../landingPage/StartProjectForm";

export default function LandingPackages() {
  const [isLogo, setIsLogo] = useState(true); // switch state
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("");

  const openModalHandler = (pack) => {
    setOpen(true);
    setPackageName(pack);
  };

  return (
    <>
      <div id="package-wrap" className="relative max-container-width w-[80%] mx-auto mt-8 sm:pb-20 landing-package-brand-wrap responsive-w-90">
        <div className="landing-section-heading gilory-font-bold pt-6 pb-8">
          <div className="crossfade-wrapper mt-4">
            <h2
              className={`text-center crossfade-item ${!isLogo ? "active" : ""
                }`}
            >
              Choose Your Website Design
              <span className="landing-heading-purple"> Bundle</span>
            </h2>

            <h2
              className={`text-center crossfade-item ${isLogo ? "active" : ""}`}
            >
              Choose Your Logo Design
              <span className="landing-heading-purple"> bundle</span>
            </h2>
          </div>
        </div>

        <div className="package-switch-wrapper flex items-center justify-center mb-6 gilory-font-bold gap-3">
          <span className="package-label">Select:</span>

          <div className="package-select-wrap">
            <select
              className="package-dropdown"
              value={isLogo ? "logo" : "website"}
              onChange={(e) => setIsLogo(e.target.value === "logo")}
            >
              <option value="website">Website Bundles</option>
              <option value="logo">Logo Bundles</option>
            </select>

            <span className="package-select-arrow">▾</span>
          </div>
        </div>

        <div className="crossfade-wrapper mt-4">
          <div
            key="web-packages"
            className={`landing-package-wrap flex gap-4  crossfade-item ${!isLogo ? "active" : ""
              }`}
          >
            <div className="deal-card deal-card-starter pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Starter Website
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$199</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$398</span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-purple gilory-font-medium">
                <p>(50% OFF Christmas Deal)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                Perfect for new businesses that need a clean, <br /> modern
                online presence.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>4-Page WordPress Website</li>
                <li>Mobile Responsive</li>
                <li>Contact Form + WhatsApp</li>
                <li>Social Media Integration</li>
                <li>Basic SEO Setup</li>
                <li>3 Stock Image</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Free Logo Concept</li>
                <li>Free Banner Design</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Starter Website - $199")}
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Deal Card Start */}
            <div className="deal-card deal-card-premium pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Essentail Website
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$349</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$698</span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-green gilory-font-medium">
                <p>(50% OFF Christmas Deal)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                A modern, polished website designed for growth.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>8-Page Custom Website</li>
                <li>Premium Theme + Custom Sections</li>
                <li>Blog or Portfolio</li>
                <li>Speed Optimization</li>
                <li>Security Plugins</li>
                <li>10 Stock Images</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Free Logo Concept</li>
                <li>Free Social Media Setup (FB + IG)</li>
                <li>Free Brand Kit (DP + Cover)</li>
                <li>3 Homepage Banners</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Essentail Website - $349")}
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Deal Card Start */}
            <div className="deal-card deal-card-ecommerce pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Ecommerce Store
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$645</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">
                    $1,290
                  </span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-white gilory-font-medium">
                <p>(50% OFF Christmas Deal)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                A complete online store experience.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-white" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>WooCommerce Setup</li>
                <li>Add 25 Products</li>
                <li>Shop + Cart + Checkout</li>
                <li>Payment Gateway Integration</li>
                <li>Coupons, Discounts, Shipping</li>
                <li>Inventory System</li>
                <li>Speed + Security Optimization</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-white" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Free Logo Design</li>
                <li>Social Media Setup</li>
                <li>Brand Kit + 5 Social Posts</li>
                <li>5 Promotional Website Banners</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Ecommerce Store - $645")}
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>
          </div>

          <div
            key="logo-packages"
            className={`crossfade-item landing-package-wrap flex gap-4  ${isLogo ? "active" : ""
              }`}
          >
            <div className="deal-card deal-card-starter pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Starter Logo Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$35</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$70</span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-purple gilory-font-medium">
                <p>(After 50% OFF)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                Perfect for new brands needing quick, clean identity.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>1 Custom Logo Concept</li>
                <li>2 Revisions</li>
                <li>PNG + JPG</li>
                <li>Transparent Background</li>
                <li>Basic SEO Setup</li>
                <li>48-Hour Delivery</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Social Media Mockup</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() =>
                    openModalHandler("Starter Logo Bundle - $35")
                  }
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Deal Card Start */}
            <div className="deal-card deal-card-premium pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Essential Logo Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$47</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$94</span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-green gilory-font-medium">
                <p>(After 50% OFF)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                More creative options. More branding control.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>3 Unique Logo Concepts</li>
                <li>Unlimited Revisions</li>
                <li>Full File Formats (AI, EPS, PDF, SVG, PNG, JPG)</li>
                <li>Favicon + Brand Icon</li>
                <li>48-Hour Delivery</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Social Media Kit (DP + Cover)</li>
                <li>2 Branded Mockups</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() =>
                    openModalHandler("Essential Logo Bundle - $47")
                  }
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>

            {/* Deal Card Start */}
            <div className="deal-card deal-card-ecommerce pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                Premium Logo Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$169</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$338</span>
                  <span className="deal-price-label gilory-font">
                    {" "}
                    Original Price
                  </span>
                </div>
              </div>

              {/* Discount pill */}
              {/* <div className="deal-pill package-white gilory-font-medium">
                <p>(After 50% OFF)</p>
              </div> */}

              {/* Intro text */}
              <p className="deal-text gilory-font px-8">
                Premium, high-impact logo created with artistic depth and brand
                intelligence.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-white" />

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>5 Premium Logo Concepts</li>
                <li>Unlimited Revisions</li>
                <li>Senior Designer Supervision</li>
                <li>Full File Pack</li>
                <li>Color Palette</li>
                <li>Typography System</li>
                <li>6 Premium Mockups</li>
                <li>Priority Delivery</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-white" />

              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>Mini Brand Guideline</li>
                <li>Full Social Media Branding Kit</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() =>
                    openModalHandler("Premium Logo Bundle - $169")
                  }
                >
                  Avail Offer Now!
                </button>
                <button className="deal-btn-secondary gilory-font-semibold">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingModal open={open} onClose={() => setOpen(false)}>
        <StartProjectForm
          onSuccessClose={() => setOpen(false)}
          prefilled={{
            serviceTypes: [packageName],
          }}
          type={"logo"}
        />
      </LandingModal>
    </>
  );
}
