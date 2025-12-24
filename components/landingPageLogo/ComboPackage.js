import Image from "next/image";
import React, { useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import StartProjectForm from "../landingPage/StartProjectForm";

export default function ComboPackage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative max-container-width w-[80%] mx-auto mt-20 mb-20 landing-package-brand-wrap responsive-w-90">
      <Image
        src="/landing-images/snow.png"
        alt=""
        width={300}
        height={300}
        className="combo-snow"
      />
      <Image
        src="/landing-images/snow.png"
        alt=""
        width={300}
        height={300}
        className="combo-snow2"
      />
      <div className="combo-package-wrapper pb-18 relative z-9 overflow-hidden">
        <div className="combo-head-wrap flex pt-15 relative z-10">
          <div className="combo-head-left w-[55%]">
            <h2 className="gilory-font-bold pl-10 mb-3">Combo Bundle</h2>
            <h3 className="gilory-font-semibold pl-10 mb-5">
              Unlimited revisions. Premium quality. Fast delivery.
            </h3>
            {/* <div className="deal-pill package-green gilory-font-medium mb-5">
              <p className="combo-package-green">(50% OFF Christmas Deal)</p>
            </div> */}
            <p className="gilory-font pl-10">
              A full-scale identity & digital presence package designed to{" "}
              <br /> take a business from zero to established.
            </p>
          </div>
          <div className="combo-head-right w-[45%] pr-12">
            <div className="deal-price-row justify-end combo-deal-price-row">
              <div className="combo-deal-price-main gilory-font-bold">$349</div>
              <div className="combo-deal-price-original">
                <span className="line-through gilory-font-medium">$698</span>
                <span className="combo-deal-price-label gilory-font">
                  {" "}
                  Original Price
                </span>
              </div>
            </div>
            <div className="flex mt-4 combo-btns">
              <button
                className="deal-btn-primary gilory-font-semibold mr-5"
                onClick={() => setOpen(true)}
              >
                Avail Offer Now!
              </button>
              <button className="deal-btn-secondary gilory-font-semibold">
                Live Chat
              </button>
            </div>
          </div>
        </div>
        <LandingModal open={open} onClose={() => setOpen(false)}>
          <StartProjectForm
            onSuccessClose={() => setOpen(false)}
            prefilled={{
              serviceTypes: ["Combo Package - $349"],
            }}
            type={"logo"}
          />
        </LandingModal>

        <div className="combo-detail-wrap mt-12 grid gap-10 px-10 relative z-10 mobile-scroll">
          {/* Row 1 – 4 equal columns */}
          <div className="grid  gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="combo-column">
              <h4 className="gilory-font-bold mb-5">
                Complete Logo & Identity System
              </h4>
              <ul className="deal-list gilory-font">
                <li>4 High-End Logo Concepts</li>
                <li>Unlimited Revisions</li>
                <li>Master File Library (AI, EPS, SVG, PDF, PNG, JPG)</li>
                <li>Color System Development (Primary + Secondary)</li>
                <li>Font Pairing Recommendations</li>
                <li>Icon/Badge Variation</li>
                <li>Monogram/Minimal Version</li>
              </ul>
            </div>
            <div className="combo-column">
              <h4 className="gilory-font-bold mb-5">
                Professional Brand Assets Toolkit
              </h4>
              <ul className="deal-list gilory-font">
                <li>Business Card (Front + Back)</li>
                <li>Editable Letterhead + Document Header/Footer</li>
                <li>Invoice Template (Editable)</li>
                <li>Brand Pattern / Graphic Element</li>
                <li>Email Signature</li>
                <li>Stamp/Seal Design</li>
              </ul>
            </div>
            <div className="combo-column">
              <h4 className="gilory-font-bold mb-5">
                Extended Marketing & Print Pack
              </h4>
              <ul className="deal-list gilory-font">
                <li>Flyer / Brochure (Trifold or Bi-fold)</li>
                <li>Poster Design</li>
                <li>2 Roll-Up Banner Concepts</li>
                <li>Uniform Branding (Shirt + Cap)</li>
                <li>Packaging Concept (Box or Bag)</li>
                <li>Stickers / Label Set</li>
              </ul>
            </div>
            <div className="combo-column">
              <h4 className="gilory-font-bold mb-5">
                Digital Presence & Social Media Branding
              </h4>
              <ul className="deal-list gilory-font">
                <li>Facebook + Instagram Setup</li>
                <li>Profile + Cover Banners</li>
                <li>6 Custom Social Templates</li>
                <li>Highlight Icons</li>
                <li>Announcement Post Template</li>
                <li>Social Ad Creative (1 Design)</li>
              </ul>
            </div>
          </div>

          {/* Row 2 – 3 columns (1:1:2) */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {/* span 1 col */}
            <div className="combo-column sm:col-span-0 md:col-span-1">
              <h4 className="gilory-font-bold mb-5">
                Digital Presence & Social Media Branding
              </h4>
              <ul className="deal-list gilory-font">
                <li>Facebook + Instagram Setup</li>
                <li>Profile + Cover Banners</li>
                <li>6 Custom Social Templates</li>
                <li>Highlight Icons</li>
                <li>Announcement Post Template</li>
                <li>Social Ad Creative (1 Design)</li>
              </ul>
            </div>

            {/* span 1 col */}
            <div className="combo-column sm:col-span-0 md:col-span-1">
              <h4 className="gilory-font-bold mb-5">
                Digital Presence & Social Media Branding
              </h4>
              <ul className="deal-list gilory-font">
                <li>Facebook + Instagram Setup</li>
                <li>Profile + Cover Banners</li>
                <li>6 Custom Social Templates</li>
                <li>Highlight Icons</li>
                <li>Announcement Post Template</li>
                <li>Social Ad Creative (1 Design)</li>
              </ul>
            </div>

            {/* span 2 cols → equals the width of 2 columns */}
            <div className="combo-column-lg sm:col-span-0 md:col-span-2 lg:col-span-2">
              <h4 className="gilory-font-bold mb-5">
                Digital Presence & Social Media Branding
              </h4>
              <ul className="deal-list gilory-font">
                <li>Facebook + Instagram Setup</li>
                <li>Profile + Cover Banners</li>
                <li>6 Custom Social Templates</li>
                <li>Highlight Icons</li>
                <li>Announcement Post Template</li>
                <li>Social Ad Creative (1 Design)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
