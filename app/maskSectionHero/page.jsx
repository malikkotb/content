"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// inspiration: mai sai gon

export default function Page() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const imageRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useGSAP(() => {}, []);

  return (
    <div className='bg-black h-screen relative justify-center flex items-center'>
      <div
        className='w-full h-screen flex justify-center items-center bg-gray-100'
        onClick={toggleImage}
      >
        <div
          ref={imageRef}
          className='bg-cover bg-center w-screen h-screen cursor-pointer transition-all'
          style={{
            backgroundImage: "url('/drag/img1.png')",
            clipPath: "circle(100px at center)",
          }}
        ></div>
      </div>

      {/* <div className='w-full h-screen flex justify-center items-center'>
        <div
          className='w-[200px] h-[200px] bg-cover bg-center'
          style={{
            backgroundImage: "url('/drag/img1.png')",
            clipPath: "circle(100px at center)",
          }}
        ></div>
      </div> */}

      <div
        ref={headingRef}
        style={{ zIndex: 100 }}
        className='absolute w-full px-6 leading-none font-serif text-white text-[150px] flex justify-between'
      >
        <h1>Mai</h1>
        <h1>Sai</h1>
        <h1>Gon</h1>
      </div>
    </div>
  );
}
