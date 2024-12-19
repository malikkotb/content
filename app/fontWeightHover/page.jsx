"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import localFont from "next/font/local";
import styles from "./style.module.css";

const neueRegrade = localFont({
  src: [
    {
      path: "./Neue Regrade Variable.ttf",
    },
  ],
});

export default function FontWeightAnimation() {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { fontWeight: 700, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, { fontWeight: 400, duration: 0.3 });
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(`.${styles.item}`);

    const handleMouseMove = (e) => {
      const hoverRadius = 150; // Define the hover radius

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

        // Calculate distance from cursor to item's center
        const distance = Math.sqrt(
          Math.pow(e.clientX - itemCenterX, 2) +
            Math.pow(e.clientY - itemCenterY, 2)
        );

        // Apply hover effect based on proximity to the cursor
        if (distance < hoverRadius) {
          const proximity = 1 - distance / hoverRadius; // Closer = higher proximity (0 to 1)
          item.style.transform = `scale(${1 + proximity * 0.2})`; // Scale based on proximity
          item.style.opacity = `${0.5 + proximity * 0.5}`; // Adjust opacity
          item.style.zIndex = `${Math.floor(proximity * 10)}`; // Adjust z-index
        } else {
          item.style.transform = "scale(1)";
          item.style.opacity = "1";
          item.style.zIndex = "0";
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div>
      
    </div>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <div
        className={`bg-[#ddd] h-screen ${neueRegrade.className} flex flex-col justify-between`}
      >
        <h1 className="text-4xl font-bold text-center borderr flex-1">
          <span
            ref={textRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="borderr w-fit uppercase"
          >
            Hover Over Me!
          </span>
        </h1>
      </div>
    </>
  );
}
