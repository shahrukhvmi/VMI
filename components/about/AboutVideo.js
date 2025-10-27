"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AboutVideo() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(0.6);
  const [isMobile, setIsMobile] = useState(null); // null = prevent SSR mismatch

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distanceToCenter = Math.abs(
        rect.top + rect.height / 2 - windowHeight / 2
      );
      const maxDistance = windowHeight / 2;
      const progress = Math.max(
        0,
        Math.min(1, 1 - distanceToCenter / maxDistance)
      );
      const smoothScale = 0.6 + progress * 0.4;

      setScale(smoothScale);
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isMobile === null) return null; // Prevent SSR flicker

  return (
    <div className="w-[90%] mx-auto max-container-width relative z-10 my-50 about-video-wrap">
      <div className="about-video-heading mb-20">
        <h2 className="olivera-font text-center">
          Aligned Vision <br />
          Collective Growth
        </h2>
      </div>

      <div
        ref={videoRef}
        className="relative group overflow-hidden rounded-xl about-video-inner mx-auto transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {isMobile ? (
          <video
            src="/vmi-video-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        ) : (
          <video
            src="/vmi-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        )}
      </div>
    </div>
  );
}
