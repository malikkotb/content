"use client";
import Image from "next/image";
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
      <div className="relative h-[35vh] w-[35vh] bg-red-700 grid grid-cols-6 grid-rows-6">
        <div className="absolute h-full w-full bg-blue-500">
          <Image
            src={"/maskReveal/img1.png"}
            // src={"/maskReveal/img5.png"}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        {Array.from({ length: 36 }).map((_, index) => (
          <div key={index} className="bg-orange-400 z-10 opacity-0"></div>
        ))}
      </div>
    </div>
  );
}
