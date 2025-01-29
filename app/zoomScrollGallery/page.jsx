"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { values } from "./values.js";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // TODO: Title: https://www.ingamana.com/ rebuild

  useGSAP(() => {
    // GSAP ScrollTrigger for scaling effect
    imageRefs.current.forEach((image, index) => {
      //   console.log("index: ", index, values[index].scaleTo);
      // if (index >= 4) gsap.set(image, { visibility: "hidden" });

      gsap.to(image, {
        // scale: animationValues[index].scaleTo, // Final scale value
        scale: 8,
        visibility: "visible",
        scrollTrigger: {
          //   trigger: containerRef.current,
          start: "top top", // Start when container top aligns with viewport top
          //   start: `top+=${index < 4 ? 0 : 400}vh top`, // First images start at top, others start after 200vh
          end: "bottom bottom", // End when container bottom aligns with viewport bottom
          scrub: true, // Smoothly tie animation to scroll position
          markers: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div className='h-[300vh] overflow-hidden'>
        {values.map((element, index) => (
          <div
            key={index}
            ref={addToImageRefs}
            className='absolute top-0 w-full h-full flex items-center justify-center'
          >
            <div
              style={{
                // width: `${src.width}vw`,
                // height: `${src.height}vh`,
                // top: `${element.top}vh`,
                left: `${element.left}vw`,
              }}
              className='bg-green-500 relative h-44 w-52'
              // TODO: explain that the most important values here are relative (so relative to the parent container which is an absolute container)
              // and then the top and left values for positioning
            ></div>
          </div>
        ))}
        {/* <div
          ref={addToImageRefs}
          className='absolute borderr top-0 w-full h-full flex items-center justify-center '
        >
          <div className='bg-green-500 relative h-44 w-52 -left-[40vw]'></div>
        </div> */}
        {/* <div
          ref={addToImageRefs}
          className='absolute top-0 w-full h-full flex items-center justify-center'
        >
          <div className='bg-red-500 relative h-44 w-52 -left-[20vw]'></div>
        </div>
        <div
          ref={addToImageRefs}
          className='absolute top-0 w-full h-full flex items-center justify-center'
        >
          <div className='bg-orange-500 relative h-44 w-52'></div>
        </div>
        <div
          ref={addToImageRefs}
          className='absolute top-0 w-full h-full flex items-center justify-center'
        >
          <div className='bg-yellow-500 relative left-[20vw] h-44 w-52'></div>
        </div>
        <div
          ref={addToImageRefs}
          className='absolute top-0 w-full h-full flex items-center justify-center '
        >
          <div className='bg-purple-500 relative left-[40vw] h-44 w-52'></div>
        </div> */}
      </div>
    </>
  );
}
