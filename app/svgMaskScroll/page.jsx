"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Home() {
  const container = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    const totalScrollDistance = 150 * images.current.length; // 150vh per image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `${totalScrollDistance}vh`,
        scrub: true,
      },
    });

    images.current.forEach((image, index) => {
      tl.to(
        image,
        {
          maskSize: "400%",
          webkitMaskSize: "400%",
          duration: 1,
          ease: "none",
        },
        index // Stagger animations for each image
      );
    });
  }, []);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (images.current[i] = el)}
            className={styles.imageWrapper}
          >
            <img src={`/medias/img${i + 1}.png`} alt={`Image ${i + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}

// "use client";
// import { useRef, useEffect } from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   const container = useRef(null);
//   const stickyMask = useRef(null);

//   const initialMaskSize = 0;
//   const targetMaskSize = 30;
//   const easing = 0.15;
//   let easedScrollProgress = 0;

//   useEffect(() => {
//     requestAnimationFrame(animate);
//   }, []);

//   const animate = () => {
//     const maskSizeProgress = targetMaskSize * getScrollProgress();
//     stickyMask.current.style.webkitMaskSize =
//       (initialMaskSize + maskSizeProgress) * 100 + "%";
//     requestAnimationFrame(animate);
//   };

//   const getScrollProgress = () => {
//     const scrollProgress =
//       stickyMask.current.offsetTop /
//       (container.current.getBoundingClientRect().height - window.innerHeight);
//     const delta = scrollProgress - easedScrollProgress;
//     easedScrollProgress += delta * easing;
//     return easedScrollProgress;
//   };

//   return (
//     <main className={styles.main}>
//       <div ref={container} className={styles.container}>
//         <div ref={stickyMask} className={styles.stickyMask}>
//           <img src="/medias/img1.png" alt="landscape img" />
//         </div>
//       </div>
//     </main>
//   );
// }
