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
    <div className={`bg-[#ddd] h-screen flex flex-col justify-between`}>
      {/* <div className="flex-1 flex flex-col justify-center"></div> */}

      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center borderr flex-1"
      >
        Hover Over Me!
      </h1>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center borderr flex-1"
      >
        Hover Over Me!
      </h1>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center borderr flex-1"
      >
        Hover Over Me!
      </h1>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center borderr flex-1"
      >
        Hover Over Me!
      </h1>
      <h1
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-4xl font-bold text-center borderr flex-1 flex w-full h-full justify-center"
      >
        Hover Over Me!
      </h1>
    </div>
  );
}
