"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // Fade out animation for characters
    gsap.to(".fade-char", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top+=5vh top",
        // TODO: add smoother easing
        end: "top+=5vh top",
        toggleActions: "play none none reverse",
      },
    });

    // Move U and W to the left
    gsap.to([".u-char", ".w-char"], {
      x: (index, target) => {
        // Calculate the distance to move based on the element
        const isU = target.classList.contains("u-char");
        // Move both U and W left to create "AUW"
        return isU ? 0 : -56;
      },
      duration: 0.5,
      delay: 1,
      // TODO: add smoother easing
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top+=5vh top",
        end: "top+=5vh top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  /*

useEffect(() => {
    // Fade out animation for characters
    gsap.to(".fade-char", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top+=5vh top",
        end: "top+=5vh top",
        toggleActions: "play none none reverse",
      },
    });

    // Move A and U to the right
    gsap.to([".a-char", ".u-char"], {
      x: (index, target) => {
        // Calculate the distance to move based on the element
        const isA = target.classList.contains('a-char');
        // Move A further than U to create "AUW"
        return isA ? 58 : 56;  // Increased U's movement from 20 to 65
      },
      duration: 0.5,
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top+=5vh top",
        end: "top+=5vh top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
*/

  return (
    <div className='w-full h-[125vh] relative borderr flex justify-center'>
      <div className='logo-container flex gap-1 font-medium text-xl fixed top-[12px]'>
        <span>A</span>
        <div className='flex gap-0'>
          <span className='u-char'>U</span>
          <span className='fade-char'>n</span>
          <span className='fade-char'>i</span>
          <span className='fade-char'>f</span>
          <span className='fade-char'>i</span>
          <span className='fade-char'>e</span>
          <span className='fade-char'>d</span>
        </div>
        <div className='flex'>
          <span className='w-char'>W</span>
          <span className='fade-char'>h</span>
          <span className='fade-char'>o</span>
          <span className='fade-char'>l</span>
          <span className='fade-char'>e</span>
        </div>
      </div>
    </div>
  );
}
