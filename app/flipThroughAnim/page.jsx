"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
export default function FlipThroughImages() {
  const selected = [
    "/drag/img1.png",
    "/drag/img2.png",
    "/drag/img3.png",
    "/drag/img4.png",
    "/drag/img5.png",
    "/drag/img6.png",
    "/drag/img7.png",
    "/drag/img8.png",
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img10.png",
    "/img11.png",
  ];

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: containerRef.current,
      rootMargin: "0px -99% 0px 0px", // Very narrow margin on the left
      threshold: 0, // Trigger when an image barely enters the left side
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setCurrentIndex(index);
        }
      });
    }, options);

    const slides = containerRef.current.querySelectorAll(".image-slide");
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, [selected]);

  const addToRefs = (refsArray) => (el) => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling!");
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <Image
          src={selected[currentIndex]}
          fill
          className="object-cover"
          alt=""
        />
      </div>

      <div
        style={{ zIndex: 100 }}
        className="fixed top-1/4 flex flex-col pointer-events-auto overflow-y-auto gap-1 left-1/2 -translate-x-1/2 h-[50vh] w-16 borderr"
      >
        {selected.map((image, index) => (
          <div
            key={index}
            data-index={index}
            className="relative h-20 flex-shrink-0 image-slide"
          >
            <Image
              src={image}
              fill
              sizes="10vw"
              className="object-cover"
              alt={image}
            />
          </div>
        ))}
      </div>

      {/* <div
        ref={containerRef}
        className="noScrollBar w-full fixed h-[100vh] top-0 bottom-0 pt-[calc(100vh-80px)] pl-4 flex gap-2 overflow-x-auto overflow-y-hidden z-50 pr-[calc(100vw-48px)]"

        // className="noScrollBar w-full fixed h-[100vh] justify-center borderr pl-4 flex gap-1 overflow-x-auto z-50 pr-[calc(100vw-48px)]"
      >
        {[...selected].map((image, index) => (
          <div
            key={index}
            data-index={index}
            className="relative max-h-16 min-w-12 image-slide"
          >
            <Image
              src={image}
              fill
              sizes="10vw"
              className="object-cover object-top block"
              alt={image}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
