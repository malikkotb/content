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

      gsap.fromTo(
        image,
        { scale: values[index].scaleFrom },
        {
          scale: values[index].scaleTo, // Final scale value
          //   scale: 5,
          scrollTrigger: {
            //   trigger: containerRef.current,
            start: "top top", // Start when container top aligns with viewport top
            // TODO: make the start activate every 5 elements
            // so that 5 elements start simultanously
            // start: `top+=${index < 5 ? 0 : 200}vh top`, // First images start at top, others start after 200vh
            end: "bottom bottom", // End when container bottom aligns with viewport bottom
            scrub: true, // Smoothly tie animation to scroll position
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className='h-[700vh] overflow-hidden'>
        <div className='h-screen sticky overflow-hidden top-0'>
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
                  top: `${element.top}vh`,
                  left: `${element.left}vw`,
                }}
                className='bg-green-500 relative h-44 w-52'
                // TODO: explain that the most important values here are relative (so relative to the parent container which is an absolute container)
                // and then the top and left values for positioning
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
