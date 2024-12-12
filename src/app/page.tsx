"use client";
// import ActionButton from "./components/ActionButton";
import { useEffect, useState } from "react";
import { set } from "zod";

export default function HomePage() {
  const [skySparkle, setSkySparkle] = useState("");
  const [waterSparkle, setWaterSparkle] = useState("");

  useEffect(() => {
    setSkySparkle(makeMultipleLines(12, 200, true, 0.01));
    setWaterSparkle(makeMultipleLines(12, 50, false));
    const interval = setInterval(() => {
      // setSkySparkle(makeMultipleLines(14, 100, true, 0.05));
      setWaterSparkle(makeMultipleLines(12, 50, false));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const makeSparkleLine = (
    character: string,
    width: number,
    probability: number,
    evenSpacing = true,
  ): string => {
    return Array.from({ length: width }, (x, i) => {
      let adjustedProbability = probability;
      if (!evenSpacing) {
        // calculate distance from center
        const distance = Math.abs(i - width / 2);
        // adjust probability based on exponential distance from center
        adjustedProbability = probability * Math.exp(-distance / (width / 10));
      }
      return Math.random() < adjustedProbability ? character : " ";
    }).join("");
  };
  const makeMultipleLines = (
    height: number,
    width: number,
    evenSpacing = true,
    probability = 0.1,
  ) => {
    return Array.from({ length: height }, (x, i) => {
      i -= 0.001;
      let adjustedProbability = probability;
      if (!evenSpacing) {
        adjustedProbability = 3 / i;
      }
      return makeSparkleLine(".", width, adjustedProbability, evenSpacing);
    }).join("\n");
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 overflow-hidden bg-black p-4 text-white">
      <p className="font-mono text-sm">a peaceful night on the water...</p>
      <pre>{skySparkle}</pre>
      <p>O</p>
      {/* <pre>{makeSparkleLine(".", 100, 5)}</pre> */}
      <pre>{waterSparkle}</pre>
    </main>
  );
}
