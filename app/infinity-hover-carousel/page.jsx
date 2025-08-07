"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import "./embla.css";
import { div } from "framer-motion/client";

const OPTIONS = { dragFree: true, loop: true };

export default function Page() {
  const emblaRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!prevBtn || !nextBtn) return;

    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  }, []);

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

    // Remove hover state on scroll
    embla.on("scroll", () => {
      setHoveredSlide(null);
    });

    return () => {
      if (embla) embla.destroy();
    };
  }, [onSelect]);

  return (
    <div className='w-full flex justify-end items-end'>
      {/* parent of embla needs to be 100vh for this to work */}
      <section className='embla borderr w-full'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {/* TODO: give each slide a different index so one slide doesnt stay hovered */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
              <div
                className={`embla__slide ${
                  number === hoveredSlide ? "embla__slide--wide" : ""
                }`}
                key={number}
                onMouseEnter={() => setHoveredSlide(number)}
                onMouseLeave={() => setHoveredSlide(null)}
              >
                <div className='embla__slide__number bg-cyan-500'>{number}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
