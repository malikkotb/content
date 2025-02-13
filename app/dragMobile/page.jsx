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

  // TODO: put sth. in the caption - my girlfriend said she liked this type of animation/interaction on a website

  return (
    <>
      <div className='p-6 h-screen bg-black text-white borderr'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-[53px] ${neueMontreal.className}`}
        >
          You’ll also learn the little things people forget to teach
          (that’ll make you look French) – like putting a space before
          punctuation, writing your 1 like ^, and saying euh instead
          of um.
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
            className='w-[35vw] h-[30vw] top-4 left-44 relative'
          >
            <Image
              src='/dragMobile/1.gif'
              fill
              className='object-cover'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[60vh] left-[80vw]'
          >
            <Image
              src='/dragMobile/3.gif'
              fill
              className='object-cover'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[25vw] absolute top-[60vh] left-[5vw]'
          >
            <Image
              src='/dragMobile/4.gif'
              fill
              className='object-cover'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[30vw] h-[30vw] absolute top-[60vh] left-[40vw]'
          >
            <Image
              src='/dragMobile/5.gif'
              fill
              className='object-cover'
              alt='1'
            />
          </div>
          <div
            ref={addToImageRefs}
            className='w-[25vw] h-[35vw] absolute top-[25vh] left-[60vw]'
          >
            <Image
              src='/dragMobile/2.gif'
              fill
              className='object-cover'
              alt='1'
            />
          </div>
        </section>
      </div>
    </>
  );
}
