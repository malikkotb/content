"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import "./embla.css";
import gsap from "gsap";

const OPTIONS = { dragFree: true, loop: true };

export default function Page() {
  const emblaRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);
  const [hoveredSlide, setHoveredSlide] = useState(1);

  const onSelect = useCallback((emblaApi) => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!prevBtn || !nextBtn) return;

    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  }, []);

  // Debug interval to cycle through slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHoveredSlide((current) => {
  //       // Reset to 1 if we reach the end, otherwise increment
  //       return current >= 8 ? 1 : current + 1;
  //     });
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (!emblaRef.current) return;

    const embla = EmblaCarousel(emblaRef.current, OPTIONS, [
      ...(typeof window !== "undefined" && window.innerWidth < 768
        ? [WheelGesturesPlugin({ forceWheelAxis: "x" })]
        : [WheelGesturesPlugin({ forceWheelAxis: "y" })]),
    ]);
    setEmblaApi(embla);

    embla.on("select", onSelect);
    embla.on("init", onSelect);
    embla.on("reInit", onSelect);

    return () => {
      if (embla) embla.destroy();
    };
  }, [onSelect]);

  return (
    <>
      <div className='debug-grid'>
        {[...Array(12)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <div className='w-full flex justify-end items-end'>
        <section className='embla borderr w-full'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <div
                  className={`embla__slide ${
                    number === hoveredSlide ? "embla__slide--wide" : ""
                  }`}
                  key={number}
                >
                  <div className='embla__slide__number bg-cyan-500'>
                    {number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
