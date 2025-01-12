"use client";
import gsap from "gsap";
import styles from "./style.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
export default function InfinityScroll() {
  // TODO: use only gsap for transitions (mixing them up with css, might fuck things up)

  const cardRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToCardRefs = addToRefs(cardRefs);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    if (cards.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        console.log(entries);
      });

      cards.forEach((card) => observer.observe(card));
    }
  }, []);

  return (
    <div className="mt-20 pl-8">
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.show}`}>
          This is the first card.
        </div>
        {[...Array(12)].map((_, index) => (
          <div key={index} ref={addToCardRefs} className={styles.card}>
            Card
          </div>
        ))}
        <div className={styles.card}>This is the last card.</div>
      </div>
    </div>
  );
}
