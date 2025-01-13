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
  const containerRef = useRef(null);
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
      start: "100px",
      end: "500px",
    },
    {
      src: "/drag/img2.png",
      scale: 1.5,
      x: -50,
      y: 100,
      top: 100,
      left: 50,
      start: "100px",
      end: "500px",
    },
    {
      src: "/drag/img3.png",
      scale: 3,
      x: 0,
      y: -150,
      top: 200,
      left: 100,
      start: "100px",
      end: "500px",
    },
    {
      src: "/drag/img4.png",
      scale: 1.8,
      x: 50,
      y: 0,
      top: 300,
      left: 150,
      start: "100px",
      end: "500px",
    },
    {
      src: "/drag/img5.png",
      scale: 2.5,
      x: -100,
      y: -50,
      top: 400,
      left: 200,
      start: "100px",
      end: "500px",
    },
  ];

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
    <div ref={containerRef} className='bg-black h-[300vh]'>
      {animationValues.map((values, index) => (
        <div
          key={index}
          ref={addToImageRefs}
          style={{
            top: `${values.top}px`,
            left: `${values.left}px`,
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
