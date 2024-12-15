"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

const AeMotionPage = () => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const imgRef = useRef(null);

  const masterTl = gsap.timeline();
  useGSAP(() => {
    masterTl.to(divRef1.current, { x: 100, duration: 2 });
  }, []);

  return (
    <div className="h-screen grid place-content-center bg-[#ddd]">
      <div className="flex">
        <h1 className={`${styles.heading}`}>Fa</h1>
        <h1 className={`${styles.heading}`}>shion</h1>
      </div>
    </div>
  );
};

export default AeMotionPage;
