"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";
import styles from "./style.module.css";

const neueRegrade = localFont({
  src: [
    {
      path: "./Neue Regrade Variable.ttf",
    },
  ],
});

export default function FontWeightAnimation() {
  const containerRef = useRef(null);
  const hoverAreaRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const spans = container.querySelectorAll("span");
    const hoverRadius = 300; // Define the hover radius
    const hoverArea = hoverAreaRef.current;

    const handleMouseMove = (e) => {
      gsap.to(hoverArea, {
        x: e.clientX - hoverRadius / 2,
        y: e.clientY - hoverRadius / 2,
        duration: 0.1,
        ease: "power2.out",
      });

      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const spanCenterX = rect.left + rect.width / 2;
        const spanCenterY = rect.top + rect.height / 2;

        // Calculate the distance between cursor and span center
        const distance = Math.sqrt(
          Math.pow(e.clientX - spanCenterX, 2) +
            Math.pow(e.clientY - spanCenterY, 2)
        );

        if (distance < hoverRadius) {
          // Proximity-based font-weight animation
          const proximity = 1 - distance / hoverRadius;
          const fontWeight = 400 + proximity * 200; // Font weight ranges from 300 to 700

          gsap.to(span, {
            fontVariationSettings: `'wght' ${fontWeight}`,
            duration: 0.5,
            ease: "power4.out",
          });
        } else {
          // Reset font weight when outside the hover area
          gsap.to(span, {
            fontVariationSettings: `'wght' 400`,
            duration: 0.5,
            ease: "power4.out",
          });
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`flex ${neueRegrade.className} uppercase h-screen text-[260px] bg-[#FF8400] text-[#1e1e1e] flex-col`}
      >
        {/* <div
          ref={hoverAreaRef}
          className="absolute bg-white top-0 left-0 w-[50px] h-[50px] pointer-events-none border mix-blend-difference rounded-full"
        ></div> */}
        <div className="flex mt-10 leading-[230px]">
          <span>S</span>
          <span>E</span>
          <span>P</span>
        </div>
        <div className="flex justify-end leading-[230px]">
          <span>T</span>
          <span>E</span>
          <span>M</span>
        </div>
        <div className="flex justify-center leading-[230px]">
          <span>B</span>
          <span>E</span>
          <span>R</span>
        </div>
        <div className="flex justify-center leading-[230px]">
          <span>2</span>
          <span className="">0</span>
          <span>2</span>
          <span>1</span>
          <span>©</span>
        </div>
      </div>
    </>
  );
}
