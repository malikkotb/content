"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import localFont from "next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "./PPNeueMontreal-Book.otf",
    },
  ],
});

gsap.registerPlugin(Draggable);

export default function Home() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  useGSAP(() => {
    Draggable.create(imageRefs.current, {
      bounds: containerRef.current,
    });
  }, []);

  // TODO: make this mobile friendly and with gifs
  // dont let your emotions control your actions - tiktok

  return (
    <>
      <div className='h-screen bg-black text-white borderr'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-[53px] ${neueMontreal.className}`}
        >
          Welcome to the Drag and Drop Gallery!
        </motion.div>
      </div>
      <div className='h-screen relative bg-black overflow-hidden font-semibold'>
        <section
          ref={containerRef}
          style={{ zIndex: 1 }}
          className='h-screen overflow-hidden w-full'
        >
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] top-4 left-44 relative rounded-xl'
          >
            <Image
              src='/drag/img1.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[60vh] left-[80vw] rounded-xl'
          >
            <Image
              src='/drag/img3.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[60vh] left-[5vw] rounded-xl'
          >
            <Image
              src='/drag/img4.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[60vh] left-[40vw] rounded-xl'
          >
            <Image
              src='/drag/img5.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[7vh] left-[75vw] rounded-xl'
          >
            <Image
              src='/drag/img8.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>

          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[25vh] left-[60vw] rounded-xl'
          >
            <Image
              src='/drag/img6.png'
              fill
              className='object-cover rounded-xl'
              alt='1'
            />
          </div>
        </section>
      </div>
    </>
  );
}
