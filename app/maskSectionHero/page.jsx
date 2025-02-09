"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

const neueMontrealArabic = localFont({
  src: [
    {
      path: "./PPNeueMontrealArabic-Regular.otf",
    },
  ],
});

// inspiration: mai sai gon

export default function Page() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const imageRefs = useRef([]);
  const buttonRef = useRef(null);
  const authorRef = useRef(null);
  const headingOne = useRef(null);
  const headingTwo = useRef(null);

  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const animateHeadings = (direction) => {
    let tl = gsap.timeline();
    tl.to(headingOne.current, {
      x: direction === "enter" ? 0 : -155,

      duration: 0.5,
      ease: "power3.inOut",
    }).to(
      headingTwo.current,
      {
        x: direction === "enter" ? 0 : 250,
        duration: 0.5,
        ease: "power3.inOut",
      },
      "<"
    );
  };

  const linesRef = useRef([]);
  const addToLinesRefs = addToRefs(linesRef);

  useEffect(() => {
    const headings = headingRef.current.querySelectorAll("h1");

    let tl = gsap.timeline();
    tl.from(headings, {
      y: 150, // Move up from below
      duration: 1, // Animation duration
      ease: "power3.out", // Smooth easing
      stagger: { each: 0.25, from: "end" }, // Delay between each letter
    })
      .to(headingOne.current, {
        x: -155,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(
        headingTwo.current,
        {
          x: 250,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(imageRef.current, {
        clipPath: "polygon(25% 25%, 100% 0%, 75% 75%, 0% 100%)",

        duration: 0.5,
        ease: "power3.inOut", // TODO: change easing
      })
      .to(
        imageRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.5,
          ease: "power3.inOut", // TODO: change easing
        },
        "-=0.2"
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

  useGSAP(() => {}, []);

  return (
    <div
      className={`h-screen relative justify-center flex items-center`}
    >
      <div className='w-full h-screen flex justify-center items-center bg-black'>
        <div
          ref={imageRef}
          className='bg-cover bg-center w-full h-screen relative justify-center flex'
          style={{
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          }}
        >
          <div
            className='absolute top-0 w-full h-full bg-black opacity-40'
            style={{ zIndex: 10 }}
          ></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute top-0 left-0 w-full h-full object-cover'
          >
            <source src='/drag/gradientBg.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          {/* <div
          ref={imageRef}
          className='bg-cover bg-center w-full h-screen relative cursor-pointer justify-center flex'
          style={{
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            backgroundImage: "url('/drag/img5.png')",
          }}
        > */}
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.1,
              },
            }}
            style={{ zIndex: 100 }}
            className='text-white absolute px-6 pt-6 flex w-full justify-between'
          >
            <div className={`${neueMontrealArabic.className}`}>
              كل حاجة تمام
            </div>
            <div className='flex gap-6'>
              <div className='flex font-mono gap-2 text-xs justify-between items-center'>
                <span className='underline'>EN</span>
                <span className='opacity-60'>AR</span>
                <span className='opacity-60'>FR</span>
              </div>
              <div className='px-2 group rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-500'>
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 15 15'
                  fill='none'
                >
                  <path
                    fill='#4f46e5'
                    className='group-hover:fill-white'
                    d='M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.4,
              },
            }}
            style={{ zIndex: 100 }}
            className='w-full flex items-center justify-center text-xl text-white absolute top-60'
          >
            (Space)
          </motion.div>
          <div
            style={{ zIndex: 100 }}
            className='text-white uppercase w-[400px] flex flex-col gap-8 text-center items-center absolute bottom-24'
          >
            <div className='leading-tight'>
              {[
                "Crafting experiences with precision.",
                "Every detail matters in design.",
                "Seamless interactions drive engagement.",
                "Motion brings interfaces to life.",
                "Innovation starts with bold ideas.",
              ].map((text, index) => (
                <div
                  key={index}
                  ref={addToLinesRefs}
                  className='opacity-0'
                >
                  {text}
                </div>
              ))}
            </div>
            <motion.p
              ref={authorRef}
              className='text-xs uppercase opacity-0'
            >
              Zayn El-Masry, AUTHOR OF THE PROJECT
            </motion.p>
            <motion.div
              onMouseEnter={() => animateHeadings("enter")}
              onMouseLeave={() => animateHeadings("leave")}
              ref={buttonRef}
              className='rounded-full px-4 py-3 w-fit normal-case transition-colors duration-500 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white'
            >
              Start exploring
            </motion.div>
          </div>
        </div>
      </div>

      <div
        ref={headingRef}
        style={{ zIndex: 100 }}
        className={`${neueMontrealArabic.className} absolute overflow-hidden w-full px-6 leading-snug font-serif text-white text-[140px] flex`}
      >
        <h1
          ref={headingOne}
          style={{ transform: "translateX(25px)" }}
          className='w-1/3 text-right'
        >
          تمام
        </h1>
        <h1 className='w-1/3 text-center'>حاجة</h1>
        <h1
          ref={headingTwo}
          style={{ transform: "translateX(-25px)" }}
          className='w-1/3'
        >
          كل
        </h1>
      </div>
    </div>
  );
}

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/drag/noise.png")',
      }}
      className='pointer-events-none absolute -inset-[100%] opacity-[15%]'
    />
  );
};
