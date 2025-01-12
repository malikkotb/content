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

  const observerRef = useRef(null);

  const handleIntersection = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle(styles.show, entry.isIntersecting);
      // to stop the element from animating again once it has already animated in (i.e. if you scroll back up)
      if (entry.isIntersecting) observerRef.current.unobserve(entry.target);
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });

    cardRefs.current.forEach((card) => {
      if (card) observerRef.current.observe(card);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div className="my-12 ml-8">
      <div className={styles.cardContainer}>
        <div ref={addToCardRefs} className={`${styles.card}`}>
          This is the first card.
        </div>
        {[...Array(12)].map((_, index) => (
          <div key={index} ref={addToCardRefs} className={`${styles.card}`}>
            This is a card.
          </div>
        ))}
        <div ref={addToCardRefs} className={styles.card}>
          This is the last card.
        </div>
      </div>
    </div>
  );
}
