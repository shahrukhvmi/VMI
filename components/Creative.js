import React from "react";
import RingSlider from "./RingSlider";
import RingSliderTwo from "./RingSliderTwo";
import HomeRingSlider from "./HomeRingSlider";
import Image from "next/image";

function Creative({ creativeData, services, heading }) {
  console.log(creativeData, "creativeData");

  return (
    <>
      <section className="creative-main z-10 relative">
        <div className="w-6xl mx-auto max-container-width">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font ">
              <>
                {heading?.[0]?.value || "Our Unrestricted"} <br />
                <span className="inner-heading-span">
                  {" "}
                  {heading?.[1]?.value || "Prowess!"}{" "}
                </span>
              </>
            </h2>
          </div>

          {/* <div className="creative-menu olivera-font">
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
          </div> */}

          <div className="creative-menu olivera-font">
            {services?.map((service, key) => (
              <>
                <div className="creative-menu-item" key={key}>
                  <span className="creative-menu-span">{service?.title}</span>
                  <span className="icon">
                    <Image
                      src={service?.data?.card_thumbnail || "/creative-icon-4.png"}
                      width={150}
                      height={150}
                      alt={service?.title || "Creative Icon"}
                    />
                  </span>
                </div>
                <hr className="creative-hr" />
              </>
            ))}
          </div>
        </div>

        <div className="w-[90%] max-w-6xl creative-second-sec mx-auto"></div>
        {/* <RingSlider /> */}
        {/* <RingSliderTwo /> */}
        <HomeRingSlider creativeData={creativeData} />
      </section>
    </>
  );
}

export default Creative;
