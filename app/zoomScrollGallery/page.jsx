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
      console.log("index: ", index, values[index].scaleTo);
      // if (index >= 4) gsap.set(image, { visibility: "hidden" });

      gsap.to(image, {
        // scale: animationValues[index].scaleTo, // Final scale value
        scale: 8,
        visibility: "visible",
        scrollTrigger: {
        //   trigger: containerRef.current,
          start: "top top", // Start when container top aligns with viewport top
        //   start: `top+=${index < 4 ? 0 : 400}vh top`, // First images start at top, others start after 200vh
        //   end: "bottom bottom", // End when container bottom aligns with viewport bottom
          end: "bottom+=100vh",
          scrub: true, // Smoothly tie animation to scroll position
          markers: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div className="borderr h-[300vh] bg-red-100">
        <div className="borderr mt-[75vh] w-full flex flex-col">
            {/* we want to emulate this, by having each image be in their own full-screen div and then positioning them accordingly
            such thata it seems they have a gap of 4 */}
            
            <div className="flex gap-4">
                <div ref={addToImageRefs} className="bg-green-500 h-44 w-52"></div>
                <div ref={addToImageRefs} className="bg-red-500 h-44 w-52"></div>
                <div ref={addToImageRefs} className="bg-purple-500 h-44 w-52"></div>
                <div ref={addToImageRefs} className="bg-orange-500 h-44 w-52"></div>
                <div ref={addToImageRefs} className="bg-yellow-500 h-44 w-52"></div>
            </div>
        </div>
      </div>

      {/* <div className='relative h-[700vh]'>
        <div className='h-screen sticky overflow-hidden top-0'>
          {values.map((src, index) => {
            return (
              <div
                key={index}
                ref={addToImageRefs}
                style={{
                  zIndex: 10 * `${-(index + 1)}`,
                  scale: `${src.scaleFrom}`,
                  visibility: index >= 4 ? "hidden" : "", // Set visibility inline
                }}
                className='absolute top-0 w-full h-full flex items-center justify-center'
                // TODO: I think it should be used like this
                // to zoom in the correct aspect ratio and not just scale the image
                // => so the original layout is kept as well,
                // because if we zoom the images the layout isnt kept
              >
                <div
                  style={{
                    // visibility: "hidden",
                    width: `${src.width}vw`,
                    height: `${src.height}vh`,
                    top: `${src.top}vh`,
                    left: `${src.left}vw`,
                  }}
                  className='relative'
                >
                  <div className='h-full w-full absolute -top-6'>{src.src}</div>
                  <Image src={src} fill alt='image' className='object-cover' />
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
