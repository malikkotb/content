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
  useGSAP(() => {
    Draggable.create(img1Ref.current, {
      bounds: containerRef.current,
      inertia: true,
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
          className="w-52 h-52 top-52 left-52 relative rounded-xl"
        >
          <Image
            src="/img1.png"
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
