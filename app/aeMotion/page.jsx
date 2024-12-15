"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

const AeMotionPage = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const imgRef = useRef(null);

  const masterTl = gsap.timeline();
  useGSAP(() => {
    gsap.set(imgRef.current, { scale: 0 });

    // TODO: add easings

    masterTl
      .to(imgRef.current, { visibility: "visible" })
      .to(imgRef.current, { scale: 1, x: -125, duration: 0.4 }, "<")

      .to(leftTextRef.current, { x: -60, y: -265, duration: 0.4 }, "<")
      .to(rightTextRef.current, { x: 75, y: 265, duration: 0.4 }, "<")
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img2.png";
        }
      })
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Por";
        }
      }, "<")
      .add(() => {
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "trait";
        }
      }, "<")

      .to(imgRef.current, { scale: 0, duration: 0.4 });
  }, []);

  return (
    <div className="h-screen grid place-content-center bg-[#ddd] overflow-hidden">
      <div className="h-screen w-full absolute grid place-content-center overflow-hidden">
        <img
          ref={imgRef}
          src="/img1.png"
          alt="img"
          className="h-[40vh] invisible"
        />
      </div>
      <div className="flex">
        <h1 ref={leftTextRef} className={`${styles.heading}`}>
          Fa
        </h1>
        <h1 ref={rightTextRef} className={`${styles.heading}`}>
          shion
        </h1>
      </div>
    </div>
  );
};

export default AeMotionPage;
