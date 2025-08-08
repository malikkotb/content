"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import EmblaCarousel from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import "./embla.css";

const OPTIONS = { dragFree: true, loop: true };

export default function Page() {
  const emblaRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);
  const [hoveredSlide, setHoveredSlide] = useState(null);

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
          setHoveredSlide(hoveredIndex);
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
              {[0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
                <div
                  className='embla__slide'
                  style={{
                    width:
                      number === hoveredSlide ? "300px" : "250px",
                    transition: "width 0.3s ease",
                  }}
                  key={number}
                  // onMouseEnter={() => {
                  //   setHoveredSlide(number);
                  //   console.log("hovered slide", number);
                  // }}
                  // onMouseLeave={() => {
                  //   setHoveredSlide(null);
                  //   console.log("not hovered");
                  // }}
                >
                  <div
                    className='embla__slide__number'
                    style={{
                      // marginLeft:
                      //   number === hoveredSlide ? "0px" : "96px",
                      // minWidth:
                      //   number === hoveredSlide
                      //     ? "500px"
                      //     : "300px",
                      backgroundColor:
                        number === hoveredSlide
                          ? "#22c55e"
                          : "#06b6d4",
                      height:
                        number === hoveredSlide
                          ? "400px"
                          : "var(--slide-height)",
                      transition:
                        "height 0.3s ease, background-color 0.3s ease, margin-left 0.3s ease",
                    }}
                  >
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
