"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animationValues } from "./values.js";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// INSPO: https://www.ingamana.com/ and https://savee.it/i/NVJEcR8/

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

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
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

  useEffect(() => {
    const loadMoreImages = () => {
      // Logic to load more images and update animationValues
      // For example, you can fetch new images from an API and update the state
      console.log("Loading more images...");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMoreImages();
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
