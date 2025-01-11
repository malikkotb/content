"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function Page() {
  const [src, setSrc] = useState("/maskReveal/img5.png");

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".pixel", {
      scale: 0,
      ease: "none",
      stagger: { each: 0.01, from: "random" },
      // onComplete: () => { setSrc("/maskReveal/img1.png"); }
    });
    // .to(
    //   ".pixel",
    //   {
    //     borderRadius: "0%",
    //     duration: 0.5,
    //   },
    //   "-=0.9"
    // );
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-[40vh] w-[40vh] grid grid-cols-7 grid-rows-7"
      >
        <div className="absolute h-full w-full">
          <Image
            // src={"/maskReveal/img1.png"}
            src={src}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        {Array.from({ length: 49 }).map((_, index) => (
          <div
            key={index}
            className="bg-orange-400  pixel z-10" // rounded-full
          ></div>
        ))}
      </div>
    </div>
  );
}
