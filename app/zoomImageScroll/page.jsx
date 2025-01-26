"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animationValues } from "./values.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  const addToImageRefs = addToRefs(imageRefs);

  // useGSAP(() => {
  //   animationValues.forEach((values, index) => {
  //     const image = imageRefs.current[index];

  //     gsap.to(image, {
  //       scale: values.scale,
  //       // x: values.x,
  //       // y: values.y,
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: values.start, // ...px down from the start of the scroll
  //         end: values.end, // ...px down from the start of the scroll
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   });
  // }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  const scales = [scale1, scale2, scale3, scale4];

  return (
    <>
      <div ref={containerRef} className='bg-black relative h-[500vh]'>
        <div className='sticky overflow-hidden top-0 h-[100vh]'>
          {animationValues.map((src, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale: scales[index] }}
                className={
                  "absolute top-0 w-full h-full flex borderr items-center justify-center"
                }
              >
                <div
                  style={{
                    width: `${src.width}vw`,
                    height: `${src.height}vh`,
                    top: `${src.top}vh`,
                    left: `${src.left}vw`,
                  }}
                  className={`relative`}
                >
                  <Image src={src} fill alt='image' className='object-cover' />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
