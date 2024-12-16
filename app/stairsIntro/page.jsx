"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";

export default function FontWeightAnimation() {
  const stairRefs = useRef([]);

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine.to([stairRefs.current], {
        scaleY: 0.5,
        stagger: 0.1

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
    </div>
  );
}
