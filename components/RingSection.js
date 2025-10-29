import Image from "next/image";
import React, { useRef, useEffect } from "react";

const RingSection = () => {
  const wrapperRef = useRef(null);
  const glowRef = useRef(null);
  const backgroundRef = useRef(null);
  const borderGlowRef = useRef(null);
  let rafId = null;

  const handleMouseMove = (e) => {
    if (!wrapperRef.current || !glowRef.current || !borderGlowRef.current)
      return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      // Move glow
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
      glowRef.current.style.opacity = "1";

      // Trigger border glow if near edge
      const edgeThreshold = 40;
      const isNearEdge =
        x < edgeThreshold ||
        y < edgeThreshold ||
        x > rect.width - edgeThreshold ||
        y > rect.height - edgeThreshold;

      borderGlowRef.current.style.opacity = isNearEdge ? "1" : "0";
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    if (glowRef.current) glowRef.current.style.opacity = "0";
    if (borderGlowRef.current) borderGlowRef.current.style.opacity = "0";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${
          scrollY * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden second-ring-css">
      {/* Parallax background */}

      <div
        ref={backgroundRef}
        className="bg-[url('/second-ring.png')] bg-no-repeat bg-cover second-ring-bg"
      />

      {/* Content wrapper */}
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-[90%] overflow-hidden rounded-xl"
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

        {/* Border glow */}
        <div
          ref={borderGlowRef}
          className="absolute inset-0 z-20 rounded-xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: 0,
            border: "2px solid rgba(208, 128, 255, 0.6)",
            boxShadow: `
              0 0 20px rgba(208, 128, 255, 0.4),
              0 0 60px rgba(134, 76, 255, 0.4),
              inset 0 0 10px rgba(255, 255, 255, 0.1)
            `,
            backdropFilter: "blur(2px)",
            borderRadius: "inherit",
          }}
        />

        {/* Card content */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-10 overflow-hidden z-30">
          <div className="second-ring-spotlight"> </div>

          <div className="w-6xl ring-section-max-width flex flex-col md:flex-row justify-between items-center gap-12 mx-auto py-40">
            {/* Left Content */}
            <div className="text-center md:text-left ring-left-width">
              {/* <div className="ml-[0px] md:ml-[-60px] mb-4">
                <Image
                  src="/second-logo.png"
                  alt="Logo"
                  className="second-ring-logo-responsive"
                  width={250}
                  height={250}
                />
              </div> */}
              <p className="text-white/80 leading-relaxed mt-[-20px] poppins-font mb-4">
                At Vibrant Media, we design and deliver marketing, design, and
                development solutions that put your business goals at the
                center. Every strategy we create is tailored to your unique
                vision, ensuring your brand stands out, engages the right
                audience, and drives measurable results.
              </p>
              <p className="text-white/80 leading-relaxed poppins-font mb-4">
                From building high-impact websites to crafting powerful SEO
                strategies and memorable branding, our team works as an
                extension of yours combining creativity, technology, and market
                insight to help you achieve sustainable growth.
              </p>
              <p className="text-white/80 leading-relaxed poppins-font">
                Our partnerships span across industries and borders, earning us
                the trust of agencies and businesses worldwide. With us, you
                gain more than a service provider, you gain a committed partner
                dedicated to your success in every market you serve.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="relative flex justify-center items-center ring-left-width">
              <Image
                src="/second-right.png"
                alt="Decorative Graphic"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSection;
