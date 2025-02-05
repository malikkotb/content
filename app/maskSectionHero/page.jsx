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
        style={{ backgroundImage: "url('/drag/img5.png')" }}
        className='w-full h-full bg-cover bg-center'
      ></div>

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
