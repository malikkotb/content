"use client";
import gsap from "gsap";
import styles from "./style.module.css";
export default function InfinityScroll() {
  return (
    <div className="">
      <div className="cardContainer">
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
