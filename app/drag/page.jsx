"use client";
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
    <main className="h-screen">
      <header
        style={{ zIndex: 100 }}
        className="fixed top-0 p-3 w-full borderr"
      >
        hi
      </header>
      <section ref={containerRef} className="h-screen w-full">
        <div
          ref={addToImageRefs}
          className="w-52 h-60 top-52 left-52 relative rounded-xl"
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
          className="w-52 h-64 absolute top-10 left-10 rounded-xl"
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
          className="w-60 h-72 absolute top-20 left-64 rounded-xl"
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
          className="w-64 h-80 absolute top-36 left-32 rounded-xl"
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
          className="w-52 h-64 absolute top-48 left-80 rounded-xl"
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
          className="w-56 h-72 absolute top-64 left-20 rounded-xl"
        >
          <Image
            src="/drag/img6.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={addToImageRefs}
          className="w-60 h-68 absolute top-80 left-64 rounded-xl"
        >
          <Image
            src="/drag/img7.png"
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
