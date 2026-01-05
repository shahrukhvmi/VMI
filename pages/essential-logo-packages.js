import ComboPackage from "@/components/landingPage/ComboPackage";
import CreativePartner from "@/components/landingPage/CreativePartner";
import LandingPackages from "@/components/landingPage/LandingPackages";
import DiscountCode from "@/components/landingPageLogo/DiscountCode";
import HolidayUpgrade from "@/components/landingPageLogo/HolidayUpgrade";
import Identity from "@/components/landingPageLogo/Identity";
import LandingGrowBrand from "@/components/landingPageLogo/LandingGrowBrand";
import LandingHeroSection from "@/components/landingPageLogo/LandingHeroSection";
import LandingLogoPortfolio from "@/components/landingPageLogo/LandingLogoPortfolio";
import LandingPageFooter from "@/components/landingPageLogo/LandingPageFooter";
import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import React, { useRef } from "react";

export default function landingPageLogo() {
  const packagesRef = useRef(null);

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <MetaLayout
        title="Essential Logo Bundles - Vibrant Media Inc"
        description="Give Your Brand a Festive Holiday Logo Makeover."
        canonical={`${meta_url}essential-logo-packages/`}
        data={{
          robots: {
            noindex: true,
            nofollow: true,
          },
        }}
      />

      <main className="relative text-white min-h-screen overflow-hidden landing-main-bg">
        <div className="">
          <LandingHeroSection onPackageClick={scrollToPackages} />
          {/* <LandingGrowBrand /> */}
          <div ref={packagesRef}>
            <LandingPackages isLogoValue={true} />
          </div>
          {/* <DiscountCode /> */}
          <ComboPackage />
          <LandingLogoPortfolio />
          <Identity />
          <CreativePartner />
          <HolidayUpgrade onPackageClick={scrollToPackages} />
          <LandingPageFooter />
        </div>
      </main>
    </>
  );
}

// Disable Layout for this page
landingPageLogo.disableLayout = true;
