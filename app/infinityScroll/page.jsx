"use client";
import gsap from "gsap";
import styles from "./style.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
export default function InfinityScroll() {
  // TODO: use only gsap for transitions (mixing them up with css, might fuck things up)

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });

    observer.observe(cards[0]);
  }, []);

  return (
    <div className="mt-20 pl-8">
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.show}`}>
          This is the first card.
        </div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is a card.</div>
        <div className={styles.card}>This is the last card.</div>
      </div>
    </div>
  );
}
