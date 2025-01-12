"use client";
import gsap from "gsap";
import styles from "./style.module.css";
export default function InfinityScroll() {


    // TODO: use only gsap for transitions (mixing them up with css, might fuck things up)

  return (
    <div className="mt-20 pl-8">
      <div className={styles.cardContainer}>
        <div className={styles.card}>This is the first card.</div>
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
