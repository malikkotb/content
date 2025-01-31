"use client";
import { useRef, useEffect, useState } from "react";
import { DotsCanvas } from "./DotsCanvas"
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
  //   const manageMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     console.log(clientX, clientY);
  //     mouse.x.set(clientX - cursorSize / 2);
  //     mouse.y.set(clientY - cursorSize / 2);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("mousemove", manageMouseMove);
  //     return () => {
  //       window.removeEventListener("mousemove", manageMouseMove);
  //     };
  //   }, []);

  useGSAP(() => {}, []);

  return (
    <>
      <div
        className={`h-screen w-full ${neueRegrade.className} p-5 bg-[rgb(190,191,186)] relative`}
      >
        <div className='bg-[rgb(190,191,186)] absolute top-0 left-0 ml-6 pt-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>5.6</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute top-0 left-1/2 -translate-x-1/2'>
          <h1 className='text-[25px] leading-none font-bold mt-7 p-1'>TO</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute top-0 right-0 mr-5 pt-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>29.6</h1>
        </div>
        {/* <div className='h-full w-full flex flex-wrap space-x-1 space-y-1 p-1 overflow-hidden'>
          {Array.from({ length: 6000 }).map((_, index) => (
            <div
              key={index}
              //   ref={addToImageRefs}
              className='w-[3px] h-[3px] items-center bg-black rounded-full'
            ></div>
          ))}
        </div> */}
        <DotsCanvas />
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 left-0 ml-6 pb-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>5.6</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 pb-9 left-1/2 -translate-x-1/2'>
          <h1 className='text-[25px] leading-[30px] font-bold'>TO</h1>
        </div>
        <div className='bg-[rgb(190,191,186)] absolute bottom-0 right-0 mr-5 pb-9'>
          <h1 className='text-[100px] leading-[70px] font-bold'>29.6</h1>
        </div>
      </div>
    </>
  );
}
