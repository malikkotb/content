"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainContainer",
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-black mainContainer h-screen">
      <div className="h-52 w-36 borderr absolute top-1/3 left-1/3">
        <Image src="/drag/img3.png" layout="fill" alt="image" className="object-contain" />
      </div>
      <div className="h-52 w-36 borderr absolute top-1/4 left-1/2">
        <Image src="/drag/img4.png" layout="fill" alt="image" className="object-contain" />
      </div>
    </div>
  );
}
