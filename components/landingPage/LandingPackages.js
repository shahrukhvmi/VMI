import React, { useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import StartProjectForm from "./StartProjectForm";

export default function LandingPackages({ isLogoValue }) {
  const [isLogo, setIsLogo] = useState(isLogoValue); // switch state
  const [open, setOpen] = useState(false);

  const [packageName, setPackageName] = useState("");
  const openModalHandler = (pack) => {
    setOpen(true);
    setPackageName(pack);
  };
  return (
    <>
      <div className="relative max-container-width w-[80%] mx-auto mt-8 sm:pb-20 landing-package-brand-wrap responsive-w-90">
        <div className="landing-section-heading gilory-font-bold pt-6 pb-8">
          <div className="crossfade-wrapper mt-4">
            <h2
              className={`text-center crossfade-item ${
                !isLogo ? "active" : ""
              }`}
            >
              Choose Your Website Design
              <span className="landing-heading-purple"> Bundle </span>
            </h2>

            <h2
              className={`text-center crossfade-item ${isLogo ? "active" : ""}`}
            >
              Choose Your Logo Design
              <span className="landing-heading-purple"> bundle </span>
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
              <option value="website">Website Bundles </option>
              <option value="logo">Logo Bundles</option>
            </select>

            <span className="package-select-arrow">▾</span>
          </div>
        </div>

        <div className="crossfade-wrapper mt-4">
          <div
            key="web-packages"
            className={`landing-package-wrap flex gap-4  crossfade-item ${
              !isLogo ? "active" : ""
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
                  <span className="line-through gilory-font-medium">$499</span>
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
              <p className="deal-text gilory-font  px-8 italic">
                Best For: Beginners, small businesses needing a quick, simple
                online presence.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-purple" />

              <p className="deal-list gilory-font-bold px-8 mb-2">Includes:</p>
              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>5 page site</li>
                <li>WordPress platform</li>
                <li>Content management system</li>
                <li>Contact enquiry form</li>
                <li>Mobile optimized site</li>
                <li>Stock photography included</li>
                <li>SEO-friendly structure</li>
                <li>Social media integration</li>
                <li>7 working days turnaround</li>
                <li>Dedicated project manager</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Freebies */}
              <p className="deal-list gilory-font-bold px-8 mb-3">
                Holiday specials included:
              </p>
              <ul className="deal-bonus-list gilory-font px-8">
                <li>1 logo design concept</li>
                <li>Social media brand kit</li>
                <li>On-demand video conference meeting</li>
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
                Business Website
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$349</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$799</span>
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
              <p className="deal-text gilory-font px-8 italic">
                Best For: Growing businesses that need a polished,
                high-performance website built to convert.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-green" />
              <p className="deal-list gilory-font-bold px-8 mb-2">Includes:</p>
              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>Up to 8 page site</li>
                <li>Custom web design mockups</li>
                <li>WordPress platform</li>
                <li>Content management system</li>
                <li>Advanced Contact enquiry form</li>
                <li>Mobile optimized site</li>
                <li>Stock photography included</li>
                <li>SEO-ready structure</li>
                <li>Social media integration</li>
                <li>Speed optimization</li>
                <li>Google analytics creation and integration</li>
                <li>Website indexing on Google</li>
                <li>1-on-1 video conference meeting</li>
                <li>14 working days turnaround</li>
                <li>Dedicated project manager</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Freebies */}
              <p className="deal-list gilory-font-bold px-8 mb-3">
                Holiday specials included:
              </p>
              <ul className="deal-bonus-list gilory-font px-8">
                <li>1 logo design concept</li>
                <li>Social media brand kit</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Business Website - $349")}
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
                E-commerce Store
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$645</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$1499</span>
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
              <p className="deal-text gilory-font px-8 italic">
                Best For: Businesses ready to sell online with a secure,
                scalable, conversion-focused store.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-white" />

              <p className="deal-list gilory-font-bold px-8 mb-2">Includes:</p>

              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>Shopify or Woocommerce online store setup</li>
                <li>Conversion optimized store design</li>
                <li>Up to 15 products added</li>
                <li>Shop, product, cart, and checkout pages</li>
                <li>Mobile-optimized store design</li>
                <li>Payment gateway integration</li>
                <li>Inventory management system</li>
                <li>Email notifications setup</li>
                <li>Coupon and discount configuration</li>
                <li>Email opt-in popups to build email list</li>
                <li>Shipping setup and rules</li>
                <li>14 working days turnaround</li>
                <li>Dedicated project manager</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-white" />

              <p className="deal-list gilory-font-bold px-8 mb-3">
                Holiday specials included:
              </p>
              {/* Freebies */}

              <ul className="deal-bonus-list gilory-font px-8">
                <li>1 logo design concept</li>
                <li>Social media brand kit</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("E-commerce Store - $645")}
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
            className={`crossfade-item landing-package-wrap flex gap-4  ${
              isLogo ? "active" : ""
            }`}
          >
            <div className="deal-card deal-card-starter pb-10 w-full">
              {/* Title */}
              <h3 className="deal-title gilory-font-bold pt-10 pl-8 pb-3">
                {/* Essential Logo Starter */}
                Basic Logo Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$37</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$74</span>
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
              <p className="deal-text gilory-font px-8 italic">
                Perfect for new brands needing quick, clean identity.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Features */}
              <p className="deal-list gilory-font-bold px-8 mb-2">Includes: </p>
              <ul className="deal-list gilory-font px-8">
                <li>1 custom logo design concept</li>
                <li>2 revisions</li>
                <li>24-48 hours delivery</li>
                <li>File formats (PNG, JPG, SVG)</li>
                <li>100% ownership</li>
                <li>100% money back guarantee</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-purple" />

              {/* Freebies */}
              <p className="deal-list gilory-font-bold px-8 mb-3">
                Free gifts included:
              </p>
              <ul className="deal-bonus-list gilory-font px-8">
                <li>2 high-definition logo mockups</li>
                <li>Social media branded mockup</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Basic Logo Bundle - $37")}
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
                Business Logo Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$74</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$148</span>
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
              <p className="deal-text gilory-font px-8 italic">
                More creative logo options designed by a seasonal professional.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-green" />

              <p className="deal-list gilory-font-bold px-8 mb-2">Includes:</p>
              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>2 custom logo design concepts</li>
                <li>Unlimited revisions</li>
                <li>.ai file and All Formats Pack included</li>
                <li>3 working days delivery</li>
                <li>100% ownership</li>
                <li>100% money back guarantee</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-green" />

              {/* Freebies */}
              <p className="deal-list gilory-font-bold px-8 mb-3">
                Free gifts included:
              </p>
              <ul className="deal-bonus-list gilory-font px-8">
                <li>Social media starter kit</li>
                <li>2 premium logo mockups</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() => openModalHandler("Business Logo Bundle - $74")}
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
                Elite Logo Identity Bundle
              </h3>

              {/* Price row */}
              <div className="deal-price-row pl-8 pb-5">
                <div className="deal-price-main gilory-font-bold">$167</div>
                <div className="deal-price-original">
                  <span className="line-through gilory-font-medium">$334</span>
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
              <p className="deal-text gilory-font px-8 italic">
                Premium, high-impact logo created with artistic depth and brand
                intelligence.
              </p>

              {/* Gradient separator */}
              <div className="deal-separator deal-separator-white" />

              <p className="deal-list gilory-font-bold px-8 mb-2">Includes:</p>
              {/* Features */}
              <ul className="deal-list gilory-font px-8">
                <li>5 custom logo design concepts</li>
                <li>Unlimited revisions</li>
                <li>.ai file and All Formats Pack included</li>
                <li>4 working days delivery</li>
                <li>100% ownership</li>
                <li>100% money back guarantee</li>
              </ul>

              {/* Second separator */}
              <div className="deal-separator deal-separator-white" />

              {/* Freebies */}
              <p className="deal-list gilory-font-bold px-8 mb-3">
                Free gifts included:
              </p>
              <ul className="deal-bonus-list gilory-font px-8">
                <li>Logo brand guideline book</li>
                <li>Social media branding kit</li>
                <li>5 premium logo mockups</li>
              </ul>

              {/* Buttons */}
              <div className="deal-buttons mt-20 px-8">
                <button
                  className="deal-btn-primary gilory-font-semibold"
                  onClick={() =>
                    openModalHandler("Elite Logo Identity Bundle - $167")
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
          type={"web"}
        />
      </LandingModal>
    </>
  );
}
