"use client";

import { useEffect, useState } from "react";

const COUNTDOWN_KEY = "vmi_15hr_countdown_target";
const TOTAL_SECONDS = 15 * 60 * 60; // 15 hours
const RESET_AT_SECONDS = 60; // reset when 1 minute left

function pad(n) {
  return n.toString().padStart(2, "0");
}

function getTimeLeft(targetTime) {
  const now = Date.now();
  const diff = Math.floor((targetTime - now) / 1000);

  if (diff <= 0) {
    return {
      hours: "00",
      minutes: "00",
      seconds: "00",
      total: 0,
    };
  }

  return {
    hours: pad(Math.floor(diff / 3600)),
    minutes: pad(Math.floor((diff % 3600) / 60)),
    seconds: pad(diff % 60),
    total: diff,
  };
}

// Separator Dots
const DotSeparator = () => (
  <div className="mx-6 flex flex-col justify-center gap-[6px] mb-6 sm:mb-0">
    <span className="h-1.5 sm:h-3 w-1.5 sm:w-3 rounded-full bg-[#46f1c9]" />
    <span className="h-1.5 sm:h-3 w-1.5 sm:w-3 rounded-full bg-[#46f1c9]" />
  </div>
);

// Time Block
const TimeBlock = ({ value, label }) => (
  <div className="text-center countDownWidth">
    <div className="leading-none countDownHeading gilory-font-bold text-white">
      {value}
    </div>
    <div className="mt-3 countDownText text-white/80 capitalize poppins-font-medium">
      {label}
    </div>
  </div>
);

export default function Countdown() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let targetTime;

    // 🧠 Load or create target time
    const stored = localStorage.getItem(COUNTDOWN_KEY);

    if (stored) {
      targetTime = Number(stored);
    } else {
      // ⏱ Start at 14:59 instead of 15:00
      targetTime = Date.now() + (TOTAL_SECONDS - 1) * 1000;
      localStorage.setItem(COUNTDOWN_KEY, targetTime.toString());
    }

    const tick = () => {
      const left = getTimeLeft(targetTime);

      // 🔁 Reset when 1 minute remains
      if (left.total <= RESET_AT_SECONDS) {
        targetTime = Date.now() + (TOTAL_SECONDS - 1) * 1000;
        localStorage.setItem(COUNTDOWN_KEY, targetTime.toString());
      }

      setTime({
        hours: left.hours,
        minutes: left.minutes,
        seconds: left.seconds,
      });
    };

    tick(); // run immediately
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mt-6 flex items-center justify-center poppins-font"
      suppressHydrationWarning
    >
      <TimeBlock value={time.hours} label="Hours" />
      <DotSeparator />
      <TimeBlock value={time.minutes} label="Minutes" />
      <DotSeparator />
      <TimeBlock value={time.seconds} label="Seconds" />
    </div>
  );
}
