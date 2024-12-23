"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
// import styles from "./style.module.css";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(Draggable);

export default function Home() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  useGSAP(() => {
    Draggable.create(imageRefs.current, {
      bounds: containerRef.current,
    });
  }, []);

  return (
    <main className="h-screen overflow-hidden text-3xl font-semibold">
      <FuzzyOverlay />
      <header
        style={{ zIndex: 100 }}
        className="fixed top-0 p-3 w-full borderr"
      >
        hi
      </header>
      <section ref={containerRef} className="h-screen overflow-hidden w-full">
        <div
          ref={addToImageRefs}
          className="w-[25vw] h-[25vw] top-32 left-32 relative rounded-xl"
        >
          <Image
            src="/drag/img1.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-64 h-80 absolute top-10 left-[50vw] rounded-xl"
        >
          <Image
            src="/drag/img2.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-80 h-80 absolute top-[50vh] left-[80vw] rounded-xl"
        >
          <Image
            src="/drag/img3.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-64 h-80 absolute top-[60vh] left-[5vw] rounded-xl"
        >
          <Image
            src="/drag/img4.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-80 h-96 absolute top-[60vh] left-[45vw] rounded-xl"
        >
          <Image
            src="/drag/img5.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-52 h-64 absolute top-[35vh] left-[30vw] rounded-xl"
        >
          <Image
            src="/drag/img7.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-72 h-96 absolute top-[20vh] left-[70vw] rounded-xl"
        >
          <Image
            src="/drag/img6.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
      </section>
      <footer style={{ zIndex: 100 }} className="fixed bottom-0 p-3 w-full">
        hello@mail.com
      </footer>
    </main>
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
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};
