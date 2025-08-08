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

  // Store mouse position globally
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!emblaRef.current) return;

    const embla = EmblaCarousel(emblaRef.current, OPTIONS, [
      ...(typeof window !== "undefined" && window.innerWidth < 768
        ? [WheelGesturesPlugin({ forceWheelAxis: "x" })]
        : [WheelGesturesPlugin({ forceWheelAxis: "y" })]),
    ]);
    setEmblaApi(embla);

    let lastHovered = null;

    embla.on("scroll", () => {
      // Get element under the cursor
      const hoveredEl = document.elementFromPoint(
        window.innerWidth / 2, // or use actual mouseX if needed
        window.innerHeight / 2 // or actual mouseY
      );

      if (!hoveredEl) return;

      // Check if this element is inside a slide
      const slideEl = hoveredEl.closest(".embla__slide");
      if (slideEl) {
        const slides = embla.slideNodes();
        const hoveredIndex = slides.indexOf(slideEl);

        if (hoveredIndex !== lastHovered) {
          lastHovered = hoveredIndex;
          console.log(`Hovered slide: ${hoveredIndex}`);
        }
      }
    });

    return () => {
      if (embla) embla.destroy();
    };
  }, []);

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
                  id={`slide-${number}-${Math.random()
                    .toString(36)
                    .substr(2, 9)}`}
                  className={`embla__slide ${
                    number === hoveredSlide
                      ? "embla__slide--wide"
                      : ""
                  }`}
                  key={number}
                  onMouseEnter={() => {
                    setHoveredSlide(number);
                    console.log("hovered slide", number);
                  }}
                  onMouseLeave={() => {
                    setHoveredSlide(null);
                    console.log("not hovered");
                  }}
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
