"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animationValues } from "./values.js";
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

  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  useGSAP(() => {
    animationValues.forEach((values, index) => {
      const image = imageRefs.current[index];

      gsap.to(image, {
        scale: values.scale,
        x: values.x,
        y: values.y,
        scrollTrigger: {
          trigger: containerRef.current,
          start: values.start, // ...px down from the start of the scroll
          end: values.end, // ...px down from the start of the scroll
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className='bg-black h-[500vh]'>
      {animationValues.map((values, index) => (
        <div
          key={index}
          ref={addToImageRefs}
          style={{
            zIndex: index + 10,
            // top: `${values.top}vh`,
            // left: `${values.left}vw`,
            top: `40%`,
            left: `40%`,
            // transform: `translate(-50%, -50%)`,
            scale: 0,
          }}
          className={`h-52 w-36 borderr fixed`}
        >
          <Image src={values.src} fill alt='image' className='object-contain' />
        </div>
      ))}
    </div>
  );
}
