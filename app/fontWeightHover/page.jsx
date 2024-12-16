"use client";
import { useRef } from "react";
import { gsap } from "gsap";

export default function FontWeightAnimation() {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { fontWeight: 700, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, { fontWeight: 400, duration: 0.3 });
  };

  return (
    <div className="">
      <h1
        ref={textRef}
        style={{ fontWeight: 400 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center mt-20"
      >
        Hover Over Me!
      </h1>
    </div>
  );
}
