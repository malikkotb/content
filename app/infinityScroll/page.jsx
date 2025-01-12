"use client";
import gsap from "gsap";
import styles from "./style.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function InfinityScroll() {
  // TODO: use only gsap for transitions (mixing them up with css, might fuck things up)
  // https://www.youtube.com/watch?v=2IbRtjez6ag

  const cardRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToCardRefs = addToRefs(cardRefs);

  const observerRef = useRef(null);
  const cardContainerRef = useRef(null);
  const lastCardObserverRef = useRef(null); // infinity scroll observer

  const handleIntersection = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle(styles.show, entry.isIntersecting);
      // to stop the element from animating again once it has already animated in (i.e. if you scroll back up):
      //   if (entry.isIntersecting) observerRef.current.unobserve(entry.target);
    });
  };

  const handleLastCardObserverCallback = (entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards(); // this function will only be called if our last card is visible
    lastCardObserverRef.current.unobserve(lastCard.target);
    lastCardObserverRef.current.observe(
      cardRefs.current[cardRefs.current.length - 1]
    ); // only observe the very last card again
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1,
      // rootMargin: allows us to offset when sth will happen
      // rootMargin: "-100px", // this says our container is now 100px smaller than it normally would be
      // => from the top of the container we're subtracting 100px, everything is leaving and entering 100px earlier
      // rootMargin: "100px", // all the animations are playing when the element is 100px away from becoming on the screen

      // default root is the viewport (entire screen itself)
      //   root: // with root we can specify the container that we're watching
      // as long as you set root to some parent element, it will track all the children elements of that parent element
    });
    cardRefs.current.forEach((card) => {
      if (card) observerRef.current.observe(card);
    });

    lastCardObserverRef.current = new IntersectionObserver(
      handleLastCardObserverCallback,
      {
        rootMargin: "100px",
      }
    );

    lastCardObserverRef.current.observe(
      cardRefs.current[cardRefs.current.length - 1]
    ); // only observe the very last card

    return () => observerRef.current.disconnect();
  }, []);

  function loadNewCards() {
    for (let i = 0; i < 10; i++) {
      const card = document.createElement("div");
      card.textContent = "This is a new card.";
      card.classList.add(styles.card);
      observerRef.current.observe(card);
      cardContainerRef.current.appendChild(card);
    }
  }

  return (
    <div className="my-12 ml-8">
      <div ref={cardContainerRef} className={styles.cardContainer}>
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
