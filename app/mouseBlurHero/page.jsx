"use client";
import { useRef, useEffect, useState } from "react";
import { DotsCanvas } from "./DotsCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

const neueRegrade = localFont({
  src: [
    {
      path: "./Neue Regrade Variable.ttf",
    },
  ],
});

export default function Page() {
  const imageRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  // get mouse to blur dots
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    console.log(position);
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [position]);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useGSAP(() => {}, []);

  return (
    <>
      <div
        className={`text-[#3C3D37] h-screen flex justify-center items-center w-full ${neueRegrade.className} p-5 bg-[rgb(190,191,186)] relative`}
      >
        <div className='bg-[rgb(190,191,186)] absolute top-0 left-0 ml-5 pt-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>8.6</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute top-0 pt-6 px-2 left-1/2 -translate-x-1/2'>
          <h1 className='text-[25px] leading-none font-bold'>TO</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute top-0 right-0 mr-4 pt-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>29.6</h1>
        </div>

        <div className='text-[60px] cursor-none text-center items-center justify-center leading-[55px] tracking-[-0.08em] absolute font-extrabold flex flex-col'>
          <h1 className=''>Ana Salinas</h1>
          <h1>( Solo Exhibition )</h1>
          <h1>Private Room</h1>
        </div>

        <DotsCanvas mouseX={mousePos.x} mouseY={mousePos.y} />
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 left-0 ml-5 pb-5 pt-3'>
          <h1 className='text-[100px] leading-[70px] font-bold'>8.6</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 pb-6 px-2 left-1/2 -translate-x-1/2'>
          <h1 className='text-[25px] leading-[30px] font-bold'>TO</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 right-0 mr-4 pb-5 pt-3'>
          <h1 className='text-[100px] leading-[70px] font-bold'>29.6</h1>
        </div>
      </div>
    </>
  );
}
