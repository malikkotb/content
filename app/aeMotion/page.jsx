"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

const AeMotionPage = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const imgRef = useRef(null);

  const masterTl = gsap.timeline(); //{ defaults: { ease: "power3.in" } }
  useGSAP(() => {
    gsap.set(imgRef.current, { scale: 0 });

    // TODO: add easings

    masterTl
      .to(imgRef.current, { visibility: "visible" })
      .to(imgRef.current, { scale: 1, x: -125, duration: 0.4 }, "<")

      .to(leftTextRef.current, { x: -140, y: -265, duration: 0.4 }, "<")
      .to(rightTextRef.current, { x: 75, y: 265, duration: 0.4 }, "<")

      .to(leftTextRef.current, { x: 450, duration: 0.4 })
      .to(rightTextRef.current, { x: -220, duration: 0.4 }, "<")
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
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "Typo";
        }
      }, "-=0.4")

      //   //
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img6.png";
        }
      }, "<")
      .to(imgRef.current, { scale: 1, duration: 0.2 }, "-=0.2")

      ///////

      .to(imgRef.current, { x: -200, duration: 0.4 })
      .to(leftTextRef.current, { x: 30, duration: 0.4 }, "<")
      .to(rightTextRef.current, { x: 150, duration: 0.4 }, "<")

      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img8.png";
        }
      }, "-=0.35")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "duct";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "pro";
        }
      }, "<");
  }, []);

  return (
    <div className="h-screen relative grid place-content-center bg-[#ddd] overflow-hidden">
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
          className="h-[425px] object-cover invisible"
        />
      </div>
      <div className="borderr flex mr-44">
        <h1 ref={leftTextRef} className={`${styles.heading} flex justify-end`}>
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
