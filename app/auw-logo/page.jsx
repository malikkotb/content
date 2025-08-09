"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // Store the timeline for character movements
    const moveTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top+=5vh top",
        end: "top+=5vh top",
        toggleActions: "play none none reverse",
      },
    });

    // Let’s make the bounce much subtler

    // Add movement animations to timeline
    moveTimeline
      .to(".fade-char", {
        opacity: 0,
        x: -5,
        duration: 0.2,
        ease: "power3.in",
      })
      .to(
        [".u-char", ".w-char"],
        {
          x: (index, target) => {
            const isU = target.classList.contains("u-char");
            return isU ? -2 : -58;
          },
          duration: 0.7,
          ease: "back.out(1)",
        },
        "<+0.1"
      )
      .to(
        ".trademark",
        {
          x: -98,
          duration: 0.7,
          ease: "back.out(1)",
        },
        "<+0.15"
      );
  }, []);

  return (
    <div className='w-full h-[125vh] relative borderr flex justify-center'>
      <div
        style={{ gap: "0px" }}
        className='logo-container flex font-medium text-xl fixed top-[12px]'
      >
        <span>A</span>
        <div className='flex gap-0 pl-[2px]'>
          <span className='u-char'>U</span>
          <span className='fade-char'>n</span>
          <span className='fade-char'>i</span>
          <span className='fade-char'>f</span>
          <span className='fade-char'>i</span>
          <span className='fade-char'>e</span>
          <span className='fade-char'>d</span>
        </div>
        <div className='flex pl-[2px] gap-0'>
          <span className='w-char'>W</span>
          <span className='fade-char'>h</span>
          <span className='fade-char'>o</span>
          <span className='fade-char'>l</span>
          <span className='fade-char'>e</span>
        </div>
        <span className='trademark text-sm'>®</span>
      </div>
    </div>
  );
}
