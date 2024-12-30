"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";

export default function FlipThroughImages() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-red-200 flex justify-center items-center">
      <div className="flex z-10 flex-col gap-1">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="relative h-20 w-16">
            <Image
              src={`/drag/img${index + 1}.png`}
              alt={`img ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <Image
        src={`/drag/img${1}.png`}
        alt={`img ${1}`}
        fill
        className="object-cover"
      />
    </div>
  );
}
