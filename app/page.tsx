"use client";

import { useEffect, useState } from "react";

function getDayNumber(): number {
  const startDate = new Date("2026-01-18T00:00:00-05:00"); // Day 1 start in EST
  const now = new Date();

  // Convert current time to EST
  const estNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  // Get start of Day 1 in EST
  const estStart = new Date(
    startDate.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  // Calculate difference in days
  const diffTime = estNow.getTime() - estStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1; // Day 1 is the first day
}

export default function Home() {
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    setDay(getDayNumber());

    // Update at midnight EST
    const checkMidnight = setInterval(() => {
      setDay(getDayNumber());
    }, 1000 * 60); // Check every minute

    return () => clearInterval(checkMidnight);
  }, []);

  if (day === null) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <p className="text-4xl font-bold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <h1 className="text-6xl font-bold text-white">Day {day}</h1>
    </div>
  );
}
