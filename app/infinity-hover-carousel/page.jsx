"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import "./embla.css";

const OPTIONS = { dragFree: true, loop: true };

export default function Page() {
  const emblaRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  // useEffect(() => {
  //   if (!emblaRef.current) return;

  //   const embla = EmblaCarousel(emblaRef.current, OPTIONS, [
  //     ...(typeof window !== "undefined" && window.innerWidth < 768
  //       ? [WheelGesturesPlugin({ forceWheelAxis: "x" })]
  //       : [WheelGesturesPlugin({ forceWheelAxis: "y" })]),
  //   ]);
  //   setEmblaApi(embla);

  //   return () => {
  //     if (embla) embla.destroy();
  //   };
  // }, []);

  // TODO: add different slide sizes and width
  // for more breakpints not just 768px

  return (
    <>
      <div className='debug-grid'>
        {[...Array(12)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <div className='w-full flex justify-end items-end'>
        {/* parent of embla needs to be 100vh for this to work */}
        <section className='embla borderr w-full'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <div
                  className={`embla__slide ${
                    number === hoveredSlide
                      ? "embla__slide--wide"
                      : ""
                  }`}
                  key={number}
                  onMouseEnter={() => setHoveredSlide(number)}
                  onMouseLeave={() => setHoveredSlide(null)}
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
