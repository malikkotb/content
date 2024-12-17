"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

const stepsMonoFont = localFont({
  src: [
    {
      path: "../../app/fonts/Steps-Mono.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function FontWeightAnimation() {
  const stairRefs = useRef([]);
  const numberRefs = useRef([]);

  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToNumberRefs = addToRefs(numberRefs);

  useEffect(() => {}, []);

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine
      .to(stairRefs.current, {
        y: "-100vh",
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
        delay: 1.5,
      })

      .to(
        numberRefs.current,
        {
          y: "-100vh",
          duration: 1,
          stagger: 0.1,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  return (
    <div className={`flex ${stepsMonoFont.className}`}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (stairRefs.current[index] = el)} // Assign each element to the array
          className={styles.stairSection}
        ></div>
      ))}
      {/* TODO: animate only die zehner stelle von den 3 zahlen
      und dann am ende noch den 100 -> und dann die stairs animation
      */}
      <div className="fixed flex flex-col justify-center items-center text-[350px] text-[#ff7c23] h-screen w-full borderr">
        <div className="flex-col flex">
          <span className="tracking-tighter leading-[250px]">Hello</span>
          <span className="text-2xl ml-4">Have a nice day.</span>
        </div>
      </div>
      <div className={`absolute flex w-full bottom-0`}>
        <div ref={addToNumberRefs} className={styles.number}>
          0
        </div>
        <div ref={addToNumberRefs} className={styles.number}>
          0
        </div>
        <div ref={addToNumberRefs} className={styles.number}>
          0
        </div>
      </div>
    </div>
  );
}
