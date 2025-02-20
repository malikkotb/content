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

  // infinty scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
          }
        });
      },
      { threshold: 1.0 }
    );

    const target = document.querySelector(".load-more-trigger");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useGSAP(() => {
    // GSAP ScrollTrigger for scaling effect
    imageRefs.current.forEach((image, index) => {
      console.log("index: ", index, animationValues[index].scaleTo);
      // if (index >= 4) gsap.set(image, { visibility: "hidden" });

      gsap.to(image, {
        // scale: animationValues[index].scaleTo, // Final scale value
        scale: 5.5,
        y: animationValues[index].top < 0 ? -1000 : 1000,
        visibility: "visible",
        scrollTrigger: {
          start: `${animationValues[index].start} top`, // Start at each index * 100vh
          // TODO: fix this, as its still the same for all which makes it look
          // unnatural
          end: `3000 + ${100 * index}`, // end after 1000px of scrolling
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);

  useEffect(() => {}, []);

  // or just say take some time to place the images in a way that is fitting
  // -> you want the images to not be centered, in the screen, so they actually
  // dissappear on scroll

  return (
    <>
      <div
        className='h-screen w-full bg-black
      '
      >
        <MySVG />
      </div>
      <div className='relative h-[500vh]'>
        <div className='h-screen sticky overflow-hidden top-0'>
          {animationValues.map((src, index) => {
            return (
              <div
                key={index}
                ref={addToImageRefs}
                style={{
                  zIndex: 10 * `${-(index + 1)}`,
                  scale: `${src.scaleFrom}`,
                  // comment the following line out, to see full layout
                  // visibility: index >= 4 ? "hidden" : "", // Set visibility inline
                }}
                className='absolute top-0 w-full h-full flex items-center justify-center'
                // TODO: I think it should be used like this
                // to zoom in the correct aspect ratio and not just scale the image
                // => so the original layout is kept as well,
                // because if we zoom the images the layout isnt kept
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
                  <div className='h-full w-full absolute -top-6'>
                    {src.src}
                  </div>
                  <Image
                    src={src}
                    fill
                    alt='image'
                    className='object-contain'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const MySVG = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 309 213'
    width='309'
    height='213'
  >
    <g>
      <path
        fill='#fff'
        d='M193.12 25.37v90h-4.92V69.41h-66.24v45.96h-4.92v-90h4.92v39.36h66.24V25.37h4.92z'
      />
    </g>
    <g>
      <path
        fill='#fff'
        d='M183.6 115.36l-52.08-46.8v46.8h-4.92v-90h4.92v41.04l50.52-41.04h6.6l-51.6 42 53.28 48h-6.6z'
      />
    </g>
    <g>
      <path
        fill='#fff'
        d='M31.27 199.88l-19.73-18.62v18.62H8.61v-36h2.93v16.32l19.11-16.32h3.89l-19.58 16.75 20.26 19.25h-3.94zM37.65 184.62v-20.74h2.93v20.83c0 7.97 4.66 13.06 12.34 13.06 7.63 0 12.29-5.09 12.29-13.06v-20.83h2.93v20.74c0 9.94-5.95 15.94-15.22 15.94-9.27 0-15.32-6-15.32-15.94zM46.63 156.39c0-1.2.82-1.82 1.92-1.82 1.15 0 1.92.62 1.92 1.82 0 1.15-.77 1.82-1.92 1.82-1.1 0-1.92-.68-1.92-1.82zM55.41 156.39c0-1.2.82-1.82 1.92-1.82 1.2 0 1.92.62 1.92 1.82 0 1.15-.72 1.82-1.92 1.82-1.1 0-1.92-.68-1.92-1.82zM105.72 163.88v36h-2.93v-17.91H77.87v17.91h-2.93v-36h2.93v15.36h24.91v-15.36h2.94zM140.04 189.42c0 6.58-5.14 11.14-16.37 11.14-3.84 0-8.59-.67-10.56-1.39v-35.28h12.72c7.49 0 10.9 3.6 10.9 8.69 0 3.41-2.06 6.43-5.04 7.58 4.38 1.51 8 4.97 8 9.82zM125.78 166.62h-9.79v12.72h10.9c4.42 0 6.91-2.88 6.91-6.43 0-3.51-2.16-6.29-8.01-6.29zM137.11 189.37c0-4.13-3.46-7.49-9.46-7.49h-11.67v15.03c1.68.58 5.14.91 7.92.91 9.7 0 13.21-3.75 13.21-8.45zM166.34 188.79h-16.27l-4.51 11.09h-3.31l15.6-36.48h.72l15.6 36.48h-3.31l-4.51-11.09zM158.18 169.02l-7.06 17.19h14.11l-7.05-17.19zM201.96 198.83c-2.26 1.2-4.99 1.73-7.82 1.73-10.61 0-18.82-8.16-18.82-18.72 0-10.46 8.26-18.48 18.87-18.48 2.83 0 5.52.48 7.78 1.63v2.83c-2.26-1.15-4.85-1.73-7.78-1.73-8.98 0-15.89 6.82-15.89 15.75 0 8.98 6.91 15.89 15.89 15.89 2.93 0 5.52-.53 7.78-1.73v2.81zM238.2 163.88v36h-2.93v-17.91h-24.91v17.91h-2.93v-36h2.93v15.36h24.91v-15.36h2.93zM268.39 197.15v2.74h-22.8v-36h22.18v2.74h-19.35v12.58h18.29v2.74h-18.29v15.22h19.97zM298.44 199.88l-8.78-12.96c-1.63.29-3.46.43-5.42.43-3.07 0-5.38-.29-7.25-.77v13.3h-2.93v-36h13.01c9.7 0 14.21 4.27 14.21 11.09 0 5.71-3.12 9.5-8.79 11.28l9.26 13.63h-3.31zM284.23 184.71c9.31 0 13.97-3.46 13.97-9.7 0-4.99-2.93-8.45-11.38-8.45h-9.84v17.43c1.87.48 4.22.76 7.25.76z'
      />
    </g>
  </svg>
);
