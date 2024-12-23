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
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);
  useGSAP(() => {
    Draggable.create(img1Ref.current, {
      bounds: containerRef.current,
    });

    Draggable.create(img2Ref.current, {
      type: "rotation",
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
          ref={img1Ref}
          className="w-52 h-60 top-52 left-52 relative rounded-xl"
        >
          <Image
            src="/img1.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img2Ref}
          className="w-40 h-64 top-20 left-20 relative rounded-xl"
        >
          <Image
            src="/img6.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img3Ref}
          className="w-36 h-72 top-40 left-72 relative rounded-xl"
        >
          <Image
            src="/img3.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img4Ref}
          className="w-48 h-80 top-80 left-36 relative rounded-xl"
        >
          <Image
            src="/img4.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img5Ref}
          className="w-32 h-60 top-[25vh] left-[55vw] relative rounded-xl"
        >
          <Image
            src="/img5.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img6Ref}
          className="w-40 h-72 top-[50vh] left-28 relative rounded-xl"
        >
          <Image
            src="/img7.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
        <div
          ref={img7Ref}
          className="w-36 h-68 top-[65vh] left-[65vw] relative rounded-xl"
        >
          <Image
            src="/img8.png"
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
