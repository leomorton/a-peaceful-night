"use client";
// import ActionButton from "./components/ActionButton";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentSparkle, setCurrentSparkle] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSparkle(makeMultipleLines(24));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const makeSparkleLine = (
    character: string,
    width: number,
    probability: number,
  ): string => {
    return Array.from({ length: width }, (x, i) => {
      // calculate distance from center
      const distance = Math.abs(i - width / 2);
      // adjust probability based on exponential distance from center
      const adjustedProbability =
        probability * Math.exp(-distance / (width / 15));
      return Math.random() < adjustedProbability ? character : " ";
    }).join("");
  };
  const makeMultipleLines = (count: number) => {
    return Array.from({ length: count }, (x, i) => {
      return makeSparkleLine(".", 100, 0.6 - i * 0.02);
    }).join("\n");
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 overflow-hidden bg-black p-4 text-white">
      <p className="font-mono text-sm">a peaceful night on the water...</p>
      <br />
      <br />
      <p>O</p>
      <pre>{currentSparkle}</pre>
    </main>
  );
}
