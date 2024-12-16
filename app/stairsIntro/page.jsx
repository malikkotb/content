"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";

export default function FontWeightAnimation() {
  const stairRefs = useRef([]);

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine.to(stairRefs.current, {
      scaleY: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.inOut",
      delay: 2,
    });
  }, []);

  return (
    <div className="flex">
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
      <div className="absolute flex w-full bottom-0">
        <div className={styles.number}>0</div>
        <div className={styles.number}>0</div>
        <div className={styles.number}>0</div>
      </div>
    </div>
  );
}
