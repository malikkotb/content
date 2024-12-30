"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlipThroughImages() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const totalImages = 8;

    ScrollTrigger.create({
      trigger: ".scroll-container", // The container div
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const imageIndex = Math.min(
          Math.floor(self.progress * totalImages) + 1,
          totalImages
        ); // Ensure index stays within bounds
        setCurrentImage(imageIndex);

        console.log(
          "Scroll Progress:",
          self.progress,
          "Current Image:",
          imageIndex
        );
      },
    });

    return () => ScrollTrigger.kill(); // Clean up ScrollTrigger on unmount
  }, []);

  return (
    <div className="scroll-container h-[200vh] w-full relative">
      <div className="flex z-10 flex-col gap-1 fixed h-screen top-1/4 left-1/2 translate-x-1/2">
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
      <div className="sticky top-0 h-screen w-full flex justify-center items-center">
        <Image
          src={`/drag/img${currentImage}.png`}
          alt={`Image ${currentImage}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
