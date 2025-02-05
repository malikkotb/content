"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleImage = () => {
    gsap.to(imageRef.current, {
      clipPath: isExpanded
        ? "circle(100px at center)"
        : "circle(100% at center)",
      duration: 1,
      ease: "power3.out",
    });
    setIsExpanded(!isExpanded);
  };

  useGSAP(() => {}, []);

  return (
    <div className='h-screen relative justify-center flex items-center'>
      <div
        className='w-full h-screen flex justify-center items-center bg-black'
        onClick={toggleImage}
      >
        <div
          ref={imageRef}
          className='bg-cover bg-center w-full h-screen relative cursor-pointer justify-center flex'
          style={{
            backgroundImage: "url('/drag/img5.png')",
            clipPath: "circle(100px at center)",
          }}
        >
          <div className='text-white uppercase w-[330px] flex flex-col gap-4 text-center absolute bottom-48'>
            <p className='leading-none'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sapiente sunt, fuga sed laudantium exercitationem quos quaerat
              laborum Lorem ipsum dolor sit, amet consectetur adipisicing elit
              lorem.
            </p>
            <p className='opacity-70 text-xs'>
              KHOA LÊ, AUTHOER OF THE PROJECT
            </p>
            <div className='rounded-full px-4 py-2 w-fit normal-case bg-white text-indigo-400'>
              Start exploring
            </div>
          </div>
        </div>
      </div>

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
