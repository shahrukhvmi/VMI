"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHorizontal() {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  const wrapperRef = useRef(null);
  const glowRef = useRef(null);
  const backgroundRef = useRef(null);
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
    }, containerRef);

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
            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/branding.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  Brand Design <br />& Management
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  Build a brand that speaks volumes.
                </p>
                <p className="services-horizontal-text poppins-font">
                  We design clear brand visuals, set the right tone for your
                  messaging,
                  <br /> and ensure your brand looks and sounds consistent
                  everywhere. <br />
                  Our brand design and management service allows your brand to
                  stay strong, trusted,
                  <br /> and competitive across all platforms. Your brand is
                  more than just a logo.
                  <br /> It’s the face of your business. We help you craft
                </p>
              </div>

              <div className="service-slider-img-wrapper">
                <img src="/service-slider-1.png" />
              </div>
            </div>

            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/ux.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  UI/UX Design
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  User-first designs that deliver results.
                </p>
                <p className="services-horizontal-text poppins-font">
                  Our UI/UX design services are focused on creating striking
                  visuals,
                  <br /> easy-to-understand navigation, and clear graphics. We
                  have experienced <br /> designers who create designs that
                  mirror your brand’s essence and identity,
                  <br />
                  allowing you to capture maximum user attention and interest.
                  These services <br />
                  are delivered across various industries and businesses of all
                  scales.
                </p>
              </div>
              <div className="service-slider-img-wrapper">
                <img src="/service-slider-2.png" />
              </div>
            </div>

            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/web_design.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  Web Development
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  Websites that don’t just look good. They perform.
                </p>
                <p className="services-horizontal-text poppins-font">
                  We develop functional and responsive websites for businesses,
                  helping <br />
                  them in extending their services to online platforms. Our web
                  development <br />
                  services include both frontend and backend elements, as well
                  as static and
                  <br /> dynamic websites, catering to a wide range of
                  industries.
                </p>
              </div>
              <div className="service-slider-img-wrapper">
                <img src="/service-slider-3.png" />
              </div>
            </div>

            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/custom_web.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  Digital Marketing
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  Powerful solutions to automate and grow your business.
                </p>
                <p className="services-horizontal-text poppins-font">
                  Our comprehensive marketing equips you with the right
                  strategy,
                  <br /> implementing it across multiple channels to drive
                  higher visibility, leads,
                  <br />
                  and conversions. This service includes social media marketing,
                  email <br />
                  marketing, content marketing, and search engine optimization.
                </p>
              </div>
              <div className="service-slider-img-wrapper">
                <img src="/service-slider-4.png" />
              </div>
            </div>

            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/mobile_app.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  Mobile App <br />
                  Development
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  From concept to launch. We bring your app idea to life.
                </p>
                <p className="services-horizontal-text poppins-font">
                  We specialize in building robust applications that seamlessly
                  function
                  <br /> across devices. Our expertise lies in building
                  high-performance
                  <br /> software applications for iOS and Android platforms
                  utilizing
                  <br /> advanced technologies such as React Native, Flutter,
                  and Swift.
                  <br /> From intuitive UI/UX design to scalable backend
                  architecture,
                  <br /> our development process is built around speed,
                  security, and usability.
                </p>
              </div>
              <div className="service-slider-img-wrapper">
                <img src="/service-slider-5.png" />
              </div>
            </div>

            <div className="serevice-horizontal-content-wrapper gap-25">
              <div className="serevice-horizontal-content-inner">
                <div className="horizontal-icon">
                  <img src="/seo.png" />
                </div>
                <h3 className="olivera-font service-horizontal-heading">
                  Search Engine <br />
                  Optimization (Seo)
                </h3>
                <p className="service-horizontal-sub-heading poppins-font">
                  Rank higher. Get found. Grow organically.
                </p>
                <p className="services-horizontal-text poppins-font">
                  Our experienced SEO team responsibly audits, optimizes, and
                  manages
                  <br /> websites to achieve higher rankings on search engines.
                  Our well-structured
                  <br /> process encompasses thorough market research, keyword
                  identification and
                  <br />
                  utilization, content strategy and mapping, as well as on-page,
                  off-page,
                  <br /> and technical optimization, ensuring improved
                  visibility and conversions.
                </p>
              </div>
              <div className="service-slider-img-wrapper">
                <img src="/service-slider-6.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-container-width w-6xl mx-auto text-center service-horizontal-mobile">
        <div className="serevice-horizontal-content-inner mb-20">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/branding.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            Brand Design <br />& Management
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            Build a brand that speaks volumes.
          </p>
          <p className="services-horizontal-text poppins-font">
            We design clear brand visuals, set the right tone for your
            messaging, and ensure your brand looks and sounds consistent
            everywhere. Our brand design and management service allows your
            brand to stay strong, trusted, and competitive across all platforms.
            Your brand is more than just a logo. It’s the face of your business.
            We help you craft
          </p>
        </div>

        <div className="serevice-horizontal-content-inner mb-20">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/ux.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            UI/UX Design
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            User-first designs that deliver results.
          </p>
          <p className="services-horizontal-text poppins-font">
            Our UI/UX design services are focused on creating striking visuals,
            easy-to-understand navigation, and clear graphics. We have
            experienced designers who create designs that mirror your brand’s
            essence and identity, allowing you to capture maximum user attention
            and interest. These services are delivered across various industries
            and businesses of all scales.
          </p>
        </div>

        <div className="serevice-horizontal-content-inner mb-20">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/web_design.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            Web Development
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            Websites that don’t just look good. They perform.
          </p>
          <p className="services-horizontal-text poppins-font">
            We develop functional and responsive websites for businesses,
            helping them in extending their services to online platforms. Our
            web development services include both frontend and backend elements,
            as well as static and dynamic websites, catering to a wide range of
            industries.
          </p>
        </div>
        <div className="serevice-horizontal-content-inner mb-20">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/custom_web.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            Digital Marketing
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            Powerful solutions to automate and grow your business.
          </p>
          <p className="services-horizontal-text poppins-font">
            Our comprehensive marketing equips you with the right strategy,
            implementing it across multiple channels to drive higher visibility,
            leads, and conversions. This service includes social media
            marketing, email marketing, content marketing, and search engine
            optimization.
          </p>
        </div>

        <div className="serevice-horizontal-content-inner mb-20">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/mobile_app.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            Mobile App <br />
            Development
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            From concept to launch. We bring your app idea to life.
          </p>
          <p className="services-horizontal-text poppins-font">
            We specialize in building robust applications that seamlessly
            function across devices. Our expertise lies in building
            high-performance software applications for iOS and Android platforms
            utilizing advanced technologies such as React Native, Flutter, and
            Swift. From intuitive UI/UX design to scalable backend architecture,
            our development process is built around speed, security, and
            usability.
          </p>
        </div>
        <div className="serevice-horizontal-content-inner">
          <div className="horizontal-icon flex justify-center mb-3">
            <img src="/seo.png" />
          </div>
          <h3 className="olivera-font service-horizontal-heading">
            Search Engine <br />
            Optimization (Seo)
          </h3>
          <p className="service-horizontal-sub-heading poppins-font">
            Rank higher. Get found. Grow organically.
          </p>
          <p className="services-horizontal-text poppins-font">
            Our experienced SEO team responsibly audits, optimizes, and manages
            websites to achieve higher rankings on search engines. Our
            well-structured process encompasses thorough market research,
            keyword identification and utilization, content strategy and
            mapping, as well as on-page, off-page, and technical optimization,
            ensuring improved visibility and conversions.
          </p>
        </div>
      </section>
    </>
  );
}
