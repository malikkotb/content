"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
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
        <script>

        window.addEventListener("DOMContentLoaded", (event) => {
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  document.querySelectorAll("[text-split]").forEach((element) => {
    element.style.whiteSpace = "normal"; // Ensure proper word spacing in parent element
  });

  gsap.from(".headingSpan", { scale: 0, stagger: { each: 0.5 }, duration: 1 });
  gsap.from(".bigZero", {
    opacity: 0,
    yPercent: 100,
    stagger: { each: 0.2 },
    duration: 1,
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline();
    tl.from($(this).find(".char"), {
      yPercent: 100,
      duration: 0.5,
      ease: "power2.out",
      stagger: { each: 0.1 },
    }).from(
      ".circle",
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    );
  });
});

        </script>
      <FuzzyOverlay />
      <header
        style={{ zIndex: 10000 }}
        className="absolute tracking-tight flex flex-col top-0 p-3 w-full"
      >
        <span>Fabrice Brass</span>
        <span>Creative design & Art-direction</span>
      </header>
      <section
        ref={containerRef}
        style={{ zIndex: 1 }}
        className="h-screen overflow-hidden w-full"
      >
        <div
          ref={addToImageRefs}
          className="w-[25vw] h-[25vw] top-4 left-44 relative rounded-xl"
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
          className="w-80 h-80 absolute top-[60vh] left-[80vw] rounded-xl"
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
          className="w-80 h-96 absolute top-[60vh] left-[40vw] rounded-xl"
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
          className="w-56 h-72 absolute top-[7vh] left-[75vw] rounded-xl"
        >
          <Image
            src="/drag/img8.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>

        <div
          ref={addToImageRefs}
          className="w-72 h-96 absolute top-[25vh] left-[60vw] rounded-xl"
        >
          <Image
            src="/drag/img6.png"
            fill
            className="object-cover rounded-xl"
            alt="1"
          />
        </div>
      </section>
      <footer style={{ zIndex: 10000 }} className="fixed bottom-0 p-3 w-full">
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
