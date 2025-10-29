import React from "react";
import RingSlider from "./RingSlider";
import RingSliderTwo from "./RingSliderTwo";
import HomeRingSlider from "./HomeRingSlider";
import Image from "next/image";

function Creative() {
  return (
    <>
      <section className="creative-main z-10 relative">
        <div className="w-6xl mx-auto max-container-width">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font">
              Our Unrestricted <br />
              <span className="inner-heading-span">Prowess!</span>
            </h2>
          </div>

          <div className="creative-menu olivera-font">
            <div className="creative-menu-item">
              <span className="creative-menu-span">UI/UX Design</span>
              <span className="icon">
                <Image src="/creative-icon-1.png" width={150} height={150} />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Web Development</span>
              <span className="icon">
                <Image src="/creative-icon-2.png" width={150} height={150} />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Digital Marketing</span>
              <span className="icon">
                <Image src="/creative-icon-3.png" width={150} height={150} />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">
                Brand Design & Management
              </span>
              <span className="icon">
                <Image src="/creative-icon-5.png" width={150} height={150} />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Mobile App Development</span>
              <span className="icon">
                <Image src="/creative-icon-4.png" width={150} height={150} />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">
                Search Engine Optimization
              </span>
              <span className="icon">
                <Image src="/creative-icon-6.png" width={150} height={150} />
              </span>
            </div>
          </div>
        </div>

        <div className="w-[90%] max-w-6xl creative-second-sec mx-auto"></div>
        {/* <RingSlider /> */}
        {/* <RingSliderTwo /> */}
        <HomeRingSlider />
      </section>
    </>
  );
}

export default Creative;
