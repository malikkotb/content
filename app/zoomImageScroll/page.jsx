"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.to(".scaleElement", {
      scale: 3, // Final scale value
      scrollTrigger: {
        trigger: ".mainContainer", // The element triggering the scroll animation
        //   trigger: ".scaleElement", // The element triggering the scroll animation
        start: "top center", // When the animation starts
        end: "bottom center", // When the animation ends
        scrub: true, // Smoothly ties the animation to the scroll position
        markers: true, // For debugging (shows start/end markers)
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainContainer",
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
    tl.to(".borderr", {
      x: 100,
      y: 100,
    });
  }, []);

  return (
    <div className="bg-black mainContainer h-[300vh]">
      <div ref={addToImgRefs} className="h-52 w-36 borderr fixed top-1/3 left-1/3">
        <Image
          src="/drag/img3.png"
          fill
          alt="image"
          className="object-contain"
        />
      </div>
      <div className="h-52 w-36 borderr fixed top-1/4 left-1/2">
        <Image
          src="/drag/img4.png"
          fill
          alt="image"
          className="object-contain"
        />
      </div>
    </div>
  );
}
