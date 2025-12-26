"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHorizontal({ silderData }) {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  const wrapperRef = useRef(null);
  const glowRef = useRef(null);
  let rafId = null;

  // Glow logic
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;

    if (!wrapper || !glow) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.opacity = "1";
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      glow.style.opacity = "0";
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // GSAP scroll horizontal logic
  useEffect(() => {
    const container = containerRef.current;
    const content = scrollContentRef.current;

    const scrollLength = content.scrollWidth - container.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${content.scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef); // isolate context for this slider

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-screen h-screen text-white overflow-hidden flex items-center z-10 backdrop-blur-xs service-horizontal-main-wrap service-horizontal-desktop"
      >
        <div
          ref={wrapperRef}
          className="relative w-screen h-screen text-white overflow-hidden flex items-center z-10"
        >
          {/* Cursor-follow glow */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute z-30 transition-opacity duration-300"
            style={{
              background: `
            radial-gradient(
              ellipse at 30% 50%, 
              rgba(208, 128, 255, 1) 0%, 
              rgba(134, 76, 255, 0.8) 40%, 
              rgba(98, 0, 255, 0.5) 65%, 
              transparent 80%
            )
          `,
              filter: "blur(120px)",
              width: "450px",
              height: "450px",
              position: "absolute",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              left: "0px",
              top: "0px",
              opacity: 0,
            }}
          />

          <div
            ref={scrollContentRef}
            className="whitespace-nowrap px-20 tracking-wide font-[serif] flex items-center z-30"
            style={{ whiteSpace: "nowrap" }}
          >
            {silderData.map((item, i) => (
              <div
                key={i}
                className="serevice-horizontal-content-wrapper gap-25"
              >
                <div className="serevice-horizontal-content-inner">
                  <div className="horizontal-icon">
                    <img src={item?.data?.service_icon} />
                  </div>
                  <h3
                    className="olivera-font service-horizontal-heading"
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.title?.split(" ").length > 2
                          ? item?.title.split(" ").slice(0, 2).join(" ") +
                            "<br/>" +
                            item?.title.split(" ").slice(2).join(" ")
                          : item?.title,
                    }}
                  />

                  <p className="service-horizontal-sub-heading poppins-font">
                    {item?.data?.sub_heading}
                  </p>
                  <p
                    className="services-horizontal-text poppins-font"
                    dangerouslySetInnerHTML={{
                      __html: item?.data?.service_details,
                    }}
                  />

                  {/* {console.log(item?.excerpt?.data?.service_details,"details")} */}
                </div>

                <div className="service-slider-img-wrapper">
                  <img src={item.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
