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

  useEffect(() => {
    numberRefs.current.forEach((numberRef, index) => {
      if (index === 0) {
        setTimeout(() => {
          numberRef.textContent = 1;
        }, 2000);
      }
      if (index === 1) {
        let count = 0;

        const interval = setInterval(() => {
          numberRef.textContent = count;

          if (count === 9) {
            clearInterval(interval);

            // Delay before setting the content to "0"
            setTimeout(() => {
              numberRef.textContent = 0;
            }, 500);
          }

          count++;
        }, 150 * (count + 1));

        return () => clearInterval(interval); // Ensure cleanup in case of component unmount
      }
    });
  }, []);

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine
      .to(stairRefs.current, {
        y: "-100vh",
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
        delay: 2.3,
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

  // TODO: caption: i think loading screens should not be too long

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
      <div className="fixed flex flex-col justify-center items-center text-[350px] text-[#ff7c23] h-screen w-full">
        <div className="flex-col flex ">
          <span className="tracking-tighter leading-[250px]">Hello</span>
          <span className="text-4xl ml-4">Have a nice day.</span>
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
