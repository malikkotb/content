"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  const animationValues = [
    {
      src: "/drag/img1.png",
      scale: 2,
      x: 100,
      y: 50,
      top: 0,
      left: 0,
      offset: "top 80%",
    },
    {
      src: "/drag/img2.png",
      scale: 1.5,
      x: -50,
      y: 100,
      top: 100,
      left: 50,
      offset: "top 70%",
    },
    {
      src: "/drag/img3.png",
      scale: 3,
      x: 0,
      y: -150,
      top: 200,
      left: 100,
      offset: "top 60%",
    },
    {
      src: "/drag/img4.png",
      scale: 1.8,
      x: 50,
      y: 0,
      top: 300,
      left: 150,
      offset: "top 50%",
    },
    {
      src: "/drag/img5.png",
      scale: 2.5,
      x: -100,
      y: -50,
      top: 400,
      left: 200,
      offset: "top 40%",
    },
  ];

  useGSAP(() => {
    animationValues.forEach((values, index) => {
      const image = imageRefs.current[index];
      if (!image) return; // Safety check in case refs are missing

      // // Apply GSAP animation using the custom values
      // gsap.to(image, {
      //   scale: values.scale,
      //   x: values.x,
      //   y: values.y,
      //   scrollTrigger: {
      //     // trigger: "image", // Each image acts as its own trigger
      //     trigger: ".mainContainer", // The element triggering the scroll animation
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: true,
      //     markers: true,
      //   },
      // });

      gsap.to(image, {
        scale: values.scale,
        x: values.x,
        y: values.y,
        scrollTrigger: {
          trigger: ".mainContainer", // Each image acts as its own trigger
          start: values.offset, // Custom start position
          end: "bottom bottom", // When the animation ends
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className='bg-black mainContainer h-[300vh]'>
      {animationValues.map((values, index) => (
        <div key={index} className='h-52 w-36 borderr fixed top-1/2 left-1/2'>
          <Image
            src='/drag/img1.png'
            fill
            alt='image'
            className='object-contain'
          />
        </div>
      ))}
      <div
        ref={addToImageRefs}
        className='h-52 w-36 borderr fixed top-1/3 left-1/3'
      >
        <Image
          src='/drag/img3.png'
          fill
          alt='image'
          className='object-contain'
        />
      </div>
      <div
        ref={addToImageRefs}
        className='h-52 w-36 borderr fixed top-1/4 left-1/2'
      >
        <Image
          src='/drag/img4.png'
          fill
          alt='image'
          className='object-contain'
        />
      </div>
      <div
        ref={addToImageRefs}
        className='h-52 w-36 borderr fixed top-[15%] left-[25%]'
      >
        <Image
          src='/drag/img1.png'
          fill
          alt='image'
          className='object-contain'
        />
      </div>
      <div
        ref={addToImageRefs}
        className='h-52 w-36 borderr fixed top-[35%] left-[20%]'
      >
        <Image
          src='/drag/img4.png'
          fill
          alt='image'
          className='object-contain'
        />
      </div>
      <div
        ref={addToImageRefs}
        className='h-52 w-36 borderr fixed top-[30%] left-[45%]'
      >
        <Image
          src='/drag/img2.png'
          fill
          alt='image'
          className='object-contain'
        />
      </div>
    </div>
  );
}
