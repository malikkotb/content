"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

const AeMotionPage = () => {
  const leftTextRef = useRef(null);
  const leftText = useRef(null);
  const rightTextRef = useRef(null);
  const rightText = useRef(null);
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

      .to(leftTextRef.current, { x: 410, duration: 0.4 })
      .to(rightTextRef.current, { x: -260, duration: 0.4 }, "<")
      .to(imgRef.current, { x: 200, duration: 0.4 }, "<")
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img3.png";
        }
      }, "-=0.35")
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

      .to(imgRef.current, { scale: 0, duration: 0.2 })
      .to(leftTextRef.current, { y: 265, duration: 0.4 }, "<")
      .to(rightTextRef.current, { y: -265, duration: 0.4 }, "<")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Graphy";
        }
      }, "<")
      .add(() => {
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "Typo";
        }
      }, "<")
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img4.png";
        }
      }, "-=0.2")
      .to(imgRef.current, { scale: 1, duration: 0.2 }, "<");

    //   .to(leftTextRef.current, { x: -60, y: -265, duration: 0.4 }, "<")
    //   .to(rightTextRef.current, { x: 75, y: 265, duration: 0.4 }, "<");
  }, []);

  return (
    <div className="h-screen grid place-content-center bg-[#ddd] overflow-hidden">
      <div className="fixed top-0 flex w-full justify-between p-5 opacity-50 tracking-tighter">
        <div>BECAUSE</div>
        <div>BECAUSE</div>
        <div>BECAUSE</div>
      </div>
      <div className="fixed bottom-0 flex w-full justify-between p-5 opacity-50 tracking-tighter">
        <div>BECAUSE</div>
        <div>BECAUSE</div>
        <div>BECAUSE</div>
      </div>
      <div className="h-screen w-full absolute grid place-content-center overflow-hidden">
        <img
          ref={imgRef}
          src="/img1.png"
          alt="img"
          className="h-[425px] object-cover borderr invisible"
        />
      </div>
      <div className="flex">
        <div ref={leftTextRef} className="text-left">
          <h1 ref={leftText} className={`${styles.heading} borderr`}>
            Fa
          </h1>
        </div>
        <h1 ref={rightTextRef} className={`${styles.heading}`}>
          shion
        </h1>
      </div>
    </div>
  );
};

export default AeMotionPage;
