// components/LiquidCursor.jsx
"use client";
import { useEffect, useState } from "react";

export default function LiquidCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-20 h-20 rounded-full 
                 bg-no-repeat bg-center bg-cover mix-blend-screen blur-sm transition-transform duration-75 ring-cursor"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
        backgroundImage: `url('/liquid.png')`,
      }}
    />
  );
}
