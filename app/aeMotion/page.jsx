"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

const AeMotionPage = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const masterTl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
  }); //{ defaults: { ease: "power3.in" } }
  useGSAP(() => {
    gsap.set(imgRef.current, { scale: 0 });

    masterTl
      .to(imgRef.current, { visibility: "visible" })
      .to(imgRef.current, { scale: 1, x: -125, duration: 0.7 }, "<")

      .to(leftTextRef.current, { x: -130, y: -265, duration: 0.7 }, "<")
      .to(rightTextRef.current, { x: 70, y: 265, duration: 0.7 }, "<")

      .to(leftTextRef.current, { x: 450, duration: 0.7 })
      .to(rightTextRef.current, { x: -250, duration: 0.7 }, "<")
      .to(imgRef.current, { x: 200, duration: 0.7 }, "<")
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img3.png";
        }
      }, "-=0.4")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Por";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "trait";
        }
      }, "<")

      .to(imgRef.current, { scale: 0, duration: 0.35 })
      .to(leftTextRef.current, { y: 265, duration: 0.7 }, "<")
      .to(rightTextRef.current, { y: -265, duration: 0.7 }, "<")

      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Graphy";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "Typo";
        }
      }, "-=0.4")

      .to(
        imgRef.current,
        { scale: 1, duration: 0.35, ease: "power4.out" },
        "-=0.4"
      )
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img8.png";
        }
      }, "<")

      //   ///////

      .to(imgRef.current, { x: -155, duration: 0.7 })
      .to(leftTextRef.current, { x: 30, duration: 0.7 }, "<")
      .to(rightTextRef.current, { x: 170, duration: 0.7 }, "<")

      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img10.png";
        }
      }, "-=0.4")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "duct";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "pro";
        }
      }, "<")

      .to(imgRef.current, { scale: 0, duration: 0.35 })

      .to(leftTextRef.current, { y: 0, x: 0, duration: 0.7 }, "<")
      .to(rightTextRef.current, { y: 0, x: 0, duration: 0.7 }, "<")

      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "fa";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "shion";
        }
      }, "-=0.4")
      // 1 round of the animation is now complete

      .to(containerRef.current, {
        filter: "invert(1)",
        duration: 0.3,
      })
      .to(imgRef.current, { visibility: "visible" })
      .to(imgRef.current, { scale: 1, x: -125, duration: 0.7 }, "<")

      .to(leftTextRef.current, { x: -130, y: -265, duration: 0.7 }, "<")
      .to(rightTextRef.current, { x: 70, y: 265, duration: 0.7 }, "<")

      .to(leftTextRef.current, { x: 450, duration: 0.7 })
      .to(rightTextRef.current, { x: -250, duration: 0.7 }, "<")
      .to(imgRef.current, { x: 200, duration: 0.7 }, "<")
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img3.png";
        }
      }, "-=0.4")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Por";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "trait";
        }
      }, "<")

      .to(imgRef.current, { scale: 0, duration: 0.35 })
      .to(leftTextRef.current, { y: 265, duration: 0.7 }, "<")
      .to(rightTextRef.current, { y: -265, duration: 0.7 }, "<")

      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "Graphy";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "Typo";
        }
      }, "-=0.4")

      .to(
        imgRef.current,
        { scale: 1, duration: 0.35, ease: "power4.out" },
        "-=0.4"
      )
      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img8.png";
        }
      }, "<")

      //   ///////

      .to(imgRef.current, { x: -155, duration: 0.7 })
      .to(leftTextRef.current, { x: 30, duration: 0.7 }, "<")
      .to(rightTextRef.current, { x: 170, duration: 0.7 }, "<")

      .add(() => {
        if (imgRef.current) {
          imgRef.current.src = "/img10.png";
        }
      }, "-=0.4")
      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "duct";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "pro";
        }
      }, "<")

      .to(imgRef.current, { scale: 0, duration: 0.1 })

      .to(leftTextRef.current, { y: 0, x: 0, duration: 0.7 }, "<")
      .to(rightTextRef.current, { y: 0, x: 0, duration: 0.7 }, "<")

      .add(() => {
        if (leftTextRef.current) {
          leftTextRef.current.textContent = "fa";
        }
        if (rightTextRef.current) {
          rightTextRef.current.textContent = "shion";
        }
      }, "-=0.4");
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen relative grid place-content-center bg-[#ddd] overflow-hidden"
    >
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
