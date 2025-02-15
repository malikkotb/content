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

  useGSAP(() => {
    const headings = headingRef.current.querySelectorAll("h1");

    let tl = gsap.timeline();
    tl.from(headings, {
      delay: 0.5,
      y: 150, // Move up from below
      duration: 1, // Animation duration
      ease: "power3.out", // Smooth easing
      stagger: { each: 0.25, from: "end" }, // Delay between each letter
    })
      .to(headingOne.current, {
        x: -155,
        duration: 0.7,
        ease: "power3.inOut",
      })
      .to(
        headingTwo.current,
        {
          x: 250,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        imageRef.current,
        {
          clipPath: "polygon(17% 17%, 100% 0%, 83% 83%, 0% 100%)",
          duration: 0.7, // Slightly increased duration for smoothness
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        imageRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.3,
          ease: "power3.out", // // TODO: maybe change easing
        },
        "-=0.25"
      )
      .fromTo(
        buttonRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        linesRef.current,
        { y: "-85%", opacity: 0 },
        {
          y: "0",
          opacity: 1,
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1], // Custom ease
          stagger: {
            each: 0.075,
            from: "end",
          },
        },
        "<"
      )
      .to(
        authorRef.current,
        {
          opacity: 0.7,
          delay: 0.1,
          duration: 1,
        },
        "<"
      );
  }, []);


  return (
    <>
      <div className='p-6 h-screen bg-black text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-[53px] text-left ${neueMontreal.className}`}
        >
          My girlfriend said she liked this type of interaction on a
          website. Now, if only I could get her to like my cooking as
          much as she likes these animations...
        </motion.div>
      </div>
      <section
        ref={containerRef}
        style={{ zIndex: 1 }}
        className='h-[90vh] bg-black relative overflow-hidden w-full'
      >
        <div
          ref={addToImageRefs}
          className='w-[35vw] h-[30vw] absolute top-8 left-40 '
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
          className='w-[25vw] h-[25vw] absolute top-[40vh] left-[50vw]'
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
    </>
  );
}
