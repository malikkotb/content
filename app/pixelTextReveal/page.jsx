"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function Page() {
  const images = ["/maskReveal/img1.png", "/maskReveal/img5.png"];
  const getNextImage = (currentSrc) => {
    const currentIndex = images.indexOf(currentSrc);
    const nextIndex = (currentIndex + 1) % images.length;
    return images[nextIndex];
  };

  const [src, setSrc] = useState(images[1]);

  const [isHovered, setIsHovered] = useState(false);

  

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isHovered) {
      tl.fromTo(
        ".pixel",
        { clipPath: "inset(50% 50% 50% 50%)" },
        {
          clipPath: "inset(-1% -1% -1% -1%)",
          ease: "power1.out",
          duration: 0.5,
          stagger: { each: 0.008, from: "random" },
          onComplete: () => {
            setSrc(images[0]);
          },
        }
      ).to(".pixel", {
        clipPath: "inset(50% 50% 50% 50%)",
        ease: "power1.in",
        stagger: { each: 0.008, from: "random" },
      });
    }
    // else {
    //   tl.fromTo(
    //     ".pixel",
    //     { clipPath: "inset(50% 50% 50% 50%)" },
    //     {
    //       clipPath: "inset(-1% -1% -1% -1%)",
    //       //   duration: 0.5,
    //       ease: "power1.out",
    //       stagger: { amount: 0.1, from: "random" },
    //       onComplete: () => {
    //         setSrc(images[1]);
    //       },
    //     }
    //   ).to(".pixel", {
    //     clipPath: "inset(50% 50% 50% 50%)",
    //     // duration: 0.5,
    //     ease: "power1.in",
    //     stagger: { amount: 0.1, from: "random" },
    //   });
    // }
  }, [isHovered]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
        className="relative h-[40vh] w-[40vh] grid grid-cols-6 grid-rows-6"
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
            className=" bg-purple-500 pixel z-10 origin-center" // rounded-full
          ></div>
        ))}
      </div>
    </div>
  );
}
