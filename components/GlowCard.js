import React, { useRef } from "react";

export default function GlowCard() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[500px] h-[300px] bg-neutral-800 rounded-xl overflow-hidden"
      >
        {/* Glow Element */}
        <div
          ref={glowRef}
          className="absolute w-[250px] h-[250px] pointer-events-none rounded-full transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
            filter: "blur(80px)",
            transform: "translate(-9999px, -9999px)",
            opacity: 0,
            zIndex: 1,
          }}
        />

        {/* Content on top */}
        <div className="relative z-10 text-white flex items-center justify-center h-full text-2xl font-bold">
          Hover to see glow
        </div>
      </div>
    </div>
  );
}
