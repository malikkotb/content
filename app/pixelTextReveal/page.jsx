"use client";
import Image from "next/image";
import gsap from "gsap";
import { useState } from "react";

export default function Page() {
  const images = ["/maskReveal/img1.png", "/maskReveal/img5.png"];
  const getNextImage = (currentSrc) => {
    const currentIndex = images.indexOf(currentSrc);
    const nextIndex = (currentIndex + 1) % images.length;
    return images[nextIndex];
  };

  const [src, setSrc] = useState(images[1]);

  const handleMouseEnter = (src) => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".pixel",
      { clipPath: "inset(50% 50% 50% 50%)" },
      {
        clipPath: "inset(-1% -1% -1% -1%)",
        ease: "power1.out",
        stagger: { each: 0.008, from: "random" },
        onComplete: () => {
          setSrc(src);
        },
      }
    ).to(".pixel", {
      clipPath: "inset(50% 50% 50% 50%)",
      ease: "power1.inOut",
      stagger: { each: 0.008, from: "random" },
    });
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => handleMouseEnter(images[0])}
        onMouseLeave={() => handleMouseEnter(images[1])}
        className="relative cursor-pointer h-[40vh] w-[40vh] grid grid-cols-6 grid-rows-6"
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
        {Array.from({ length: 36 }).map((_, index) => (
          <div
            key={index}
            style={{ clipPath: "inset(50% 50% 50% 50%)" }}
            className=" bg-red-700 pixel z-10 origin-center" // rounded-full
          ></div>
        ))}
      </div>
    </div>
  );
}
