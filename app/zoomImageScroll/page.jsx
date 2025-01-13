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

      gsap.to(image, {
        scale: values.scale,
        x: values.x,
        y: values.y,
        scrollTrigger: {
          trigger: image, // Each image acts as its own trigger
          start: values.offset, // Custom start position
          end: "bottom top", // When the animation ends
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className='bg-black mainContainer h-[300vh]'>
      {animationValues.map((values, index) => (
        <div
          key={index}
          className={`h-52 w-36 borderr fixed top-[${values.top}px] left-[${values.left}px]`}
        >
          <Image src={values.src} fill alt='image' className='object-contain' />
        </div>
      ))}
    </div>
  );
}
