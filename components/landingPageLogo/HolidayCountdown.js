"use client";

import { useEffect, useState } from "react";

function pad(n) {
  return n.toString().padStart(2, "0");
}

function getTimeLeft(targetDate) {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: pad(Math.floor(totalSeconds / (60 * 60 * 24))),
    hours: pad(Math.floor((totalSeconds / (60 * 60)) % 24)),
    minutes: pad(Math.floor((totalSeconds / 60) % 60)),
    seconds: pad(Math.floor(totalSeconds % 60)),
  };
}

// Separator Dots UI
const DotSeparator = () => (
  <div className="mx-6 flex flex-col justify-center gap-[6px]">
    <span className="h-3 w-3 rounded-full bg-[#46f1c9]" />
    <span className="h-3 w-3 rounded-full bg-[#46f1c9]" />
  </div>
);

// Single Time Block (number + label)
const TimeBlock = ({ value, label }) => (
  <div className="text-center w-32">
    <div className="leading-none text-4xl sm:text-5xl md:text-6xl lg:text-8xl gilory-font-bold text-white ">
      {value}
    </div>
    <div className="mt-3 text-[20px] sm:text-md text-white/80 capitalize poppins-font-medium">
      {label}
    </div>
  </div>
);

export default function Countdown() {
  // 👇 Initial state fixed, no time-dependent value on first SSR render
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // 🎯 Target date = 31 December of this year at 23:59:59
    const now = new Date();
    const target = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

    const update = () => {
      setTimeLeft(getTimeLeft(target));
    };

    update(); // run once immediately on client
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mt-6 flex items-center justify-center poppins-font"
      suppressHydrationWarning
    >
      <TimeBlock value={timeLeft.days} label="Days" />
      <DotSeparator />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <DotSeparator />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <DotSeparator />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
