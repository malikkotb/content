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

  // useGSAP(() => {
  //   animationValues.forEach((values, index) => {
  //     const image = imageRefs.current[index];

  //     gsap.to(image, {
  //       scale: values.scale,
  //       // x: values.x,
  //       // y: values.y,
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: values.start, // ...px down from the start of the scroll
  //         end: values.end, // ...px down from the start of the scroll
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   });
  // }, []);

  return (
    <>
      {/* <div className="h-screen bg-slate-800">
        <div >

        </div>
      </div> */}
      <div ref={containerRef} className='bg-black h-[500vh]'>
        <div className='relative w-[25vw] h-[25vh] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[35vw] h-[30vh] -top-[30vh] left-[5vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[20vw] h-[45vh] -top-[10vh] -left-[25vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[25vw] h-[25vh] left-[27.5vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[20vw] h-[25vh] top-[27.5vh] left-[5vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='relative w-[15vw] h-[15vh] top-[22.5vh] left-[25vw] borderr'>
          <img className='object-cover' />
        </div>

        <div className='fixed top-[30vh] left-[5vw] h-[30vh] w-[30vw] bg-red-500'></div>
        <div className='fixed top-[15vh] left-[36vw] h-[35vh] w-[35vw] bg-blue-500'></div>
        <div className='fixed top-[52vh] left-[36vw] h-[25vh] w-[25vw] bg-purple-500'></div>
        <div className='fixed top-[61vh] left-[8vw] h-[20vh] w-[25vw] bg-green-500'></div>
        {/* {animationValues.map((values, index) => (
          <div
            key={index}
            ref={addToImageRefs}
            style={{
              zIndex: 1000 - index * 10,
              top: `${values.top}%`,
              left: `${values.left}%`,
              // transform: `translate(-50%, -50%)`,
              scale: 1,
            }}
            className={`h-52 w-36 borderr fixed`}
          >
            <div
              style={{ zIndex: 10000 }}
              className='abolute -mt-4 font-bold text-white'
            >
              {index + 1}
            </div>
            <Image
              src={values.src}
              fill
              alt='image'
              className='object-contain'
            />
          </div>
        ))} */}
      </div>
    </>
  );
}
