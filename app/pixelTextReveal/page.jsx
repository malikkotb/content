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

    tl.fromTo(
      ".pixel",
      { clipPath: "inset(50% 50% 50% 50%)" },
      {
        clipPath: "inset(-1% -1% -1% -1%)",
        duration: 0.5,
        ease: "power1.out",
        stagger: { each: 0.005, from: "random" },
        onComplete: () => {
          setSrc("/maskReveal/img1.png");
        },
      }
    );

    // if (isHovered) {
    //   tl.to(".pixel", {
    //     clipPath: "inset(50% 50% 50% 50%)",
    //     duration: 0.5,
    //     ease: "power1.out",
    //     stagger: { each: 0.005, from: "random" },
    //     onComplete: () => {
    //       setSrc("/maskReveal/img5.png");
    //     },
    //   });
    // }
  }, [isHovered]);

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
            style={{ clipPath: "inset(50% 50% 50% 50%)" }}
            className=" bg-purple-500 pixel z-10 origin-center" // rounded-full
          ></div>
        ))}
      </div>
    </div>
  );
}
