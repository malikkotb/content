"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  useGSAP(() => {
    gsap.from(".borderr", {
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="borderr relative h-[35vh] w-[35vh] bg-red-700 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, index) => (
          <div key={index} className="bg-white borderr"></div>
        ))}
      </div>
    </div>
  );
}
