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

  /*
      slides.forEach(slide => {
    const inner = slide.querySelector('.slide-inner')

    slide.addEventListener('mouseenter', () => {
      // Make the whole slide wider
      slide.style.flex = '0 0 25%' // Increase width (default was ~17%)

      // Make inner content taller and wider
      inner.style.height = '350px'
    })

    slide.addEventListener('mouseleave', () => {
      // Reset to original slide size
      slide.style.flex = ''
      inner.style.height = '100%'
    })
  })

  */

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
              {[0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
                <div
                  className='embla__slide'
                  style={{
                    // flex:
                    //   number === hoveredSlide ? "0 0 35%" : "0 0 17%",
                    // width:
                    //   number === hoveredSlide ? "300px" : "250px",
                    // transition: "width 0.3s ease",
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
                    className='slide-inner'
                    style={{
                      backgroundColor:
                        number === hoveredSlide
                          ? "#22c55e"
                          : "#06b6d4",
                      height:
                        number === hoveredSlide
                          ? "400px"
                          : "var(--slide-height)",
                      transition:
                        "height 0.3s ease, background-color 0.3s ease",
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
