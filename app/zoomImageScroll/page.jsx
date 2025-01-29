"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animationValues } from "./values.js";
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

  // TODO: Title: Zoom Parallax Scroll Animation

  useGSAP(() => {
    // GSAP ScrollTrigger for scaling effect
    imageRefs.current.forEach((image, index) => {
      gsap.to(image, {
        scale: 4, // Final scale value (2x or 4x zoom)
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Start when container top aligns with viewport top
          end: "bottom bottom", // End when container bottom aligns with viewport bottom
          scrub: true, // Smoothly tie animation to scroll position
        },
      });
    });
  }, []);

  // TODO: in tutorial explain and show that I used: https://cssgridgenerator.io/ to generate a layout and then used chatgpt
  // to convert that into the values array that I am looping over.
  // or just say take some time to place the images in a way that is fitting
  // -> you want the images to not be centered, in the screen, so they actually
  // dissappear on scroll

  return (
    <>
      <div className='relative h-[500vh]'>
        <div className='h-screen sticky overflow-hidden top-0'>
          {animationValues.map((src, index) => {
            return (
              <div
                key={index}
                ref={addToImageRefs}
                style={{
                  scale: `${src.scaleFrom}`,
                }}
                className='absolute top-0 w-full h-full flex items-center justify-center'
                // TODO: I think it should be used like this
                // to zoom in the correct aspect ratio and not just scale the image
              >
                <div
                  style={{
                    width: `${src.width}vw`,
                    height: `${src.height}vh`,
                    top: `${src.top}vh`,
                    left: `${src.left}vw`,
                  }}
                  className='relative'
                >
                  <Image src={src} fill alt='image' className='object-cover' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
