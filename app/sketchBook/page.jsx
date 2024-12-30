"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
export default function Sketchbook() {
  const selected = [
    "/drag/img1.png",
    "/drag/img2.png",
    "/drag/img3.png",
    "/drag/img4.png",
    "/drag/img5.png",
    "/drag/img6.png",
    "/drag/img7.png",
    "/drag/img8.png",
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img10.png",
    "/img11.png",
  ];
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: containerRef.current,
      rootMargin: "0px -99% 0px 0px", // Very narrow margin on the left
      threshold: 0, // Trigger when an image barely enters the left side
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setCurrentIndex(index);
        }
      });
    }, options);

    const slides = containerRef.current.querySelectorAll(".image-slide");
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, [selected]);

  const imageRefs = useRef([]);
  const bottomImageRef = useRef(null);
  const imageMaskRef = useRef(null);
  const revealRefs = useRef([]);

  const addToRefs = (refsArray) => (el) => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };

  const addToImageRefs = addToRefs(imageRefs);
  const addToRevealRefs = addToRefs(revealRefs);

  // TODO: add horizontal scroll

  const setInitialStates = () => {
    gsap.set(revealRefs.current, {
      yPercent: 100,
    });
    // gsap.set(imageRefs.current, {
    //   yPercent: 250,
    //   opacity: 0,
    // });
    gsap.set(bottomImageRef.current, {
      yPercent: 105,
    });
  };

  const preloaderAnimation = () => {
    const tl = gsap.timeline({
      defaults: {},
    });

    // tl.to(imageRefs.current, {
    //   visibility: "visible",
    // })
    //   .to(
    //     imageRefs.current,
    //     {
    //       yPercent: 0,
    //       opacity: 1,
    //       duration: 1,
    //       stagger: 0.02,
    //       ease: "power3.out",
    //     },
    //     "<"
    //   )
    tl.to(
      bottomImageRef.current,
      {
        yPercent: 0,
        duration: 1.6,
        ease: "power4.out",
      },
      "<"
    )
      .to(
        imageMaskRef.current,
        {
          scaleY: 0,
          duration: 1.3,
          ease: "power4.out",
        },
        "<0.2"
      )
      .to(
        revealRefs.current,
        {
          visibility: "visible",
        },
        "-=1.3"
      )
      .to(
        revealRefs.current,
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
        },
        "<"
      );
  };

  const imageVariants = {
    initial: {
      y: "250%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1], // Equivalent to "power3.out"
      },
    },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.02, // Staggering effect
      },
    },
  };

  useGSAP(() => {
    document.body.style.backgroundColor = "#fff";
    const master = gsap.timeline();
    master.add(setInitialStates).add(preloaderAnimation());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex w-full mb-6 mt-12">
        <div
          ref={imageMaskRef}
          style={{ zIndex: 10 }}
          className="w-full h-full absolute origin-top"
        ></div>
        <div
          className="w-[80vw] ml-4 overflow-hidden md:w-[45vw] max-h-[70vh]"
          ref={bottomImageRef}
        >
          <Image
            src={selected[currentIndex]}
            width={500}
            height={500}
            className="object-contain self-end object-bottom"
            alt=""
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        ref={containerRef}
        className="noScrollBar w-full fixed h-[100vh] top-0 bottom-0 pt-[calc(100vh-80px)] pl-4 flex gap-2 overflow-x-auto overflow-y-hidden z-50 pr-[calc(100vw-48px)]"
      >
        {[...selected].map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            data-index={index}
            // ref={addToImageRefs}
            // invisible
            className="relative max-h-16 min-w-12 image-slide"
          >
            <Image
              src={image}
              fill
              sizes="10vw"
              className="object-cover object-top block"
              alt={image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
