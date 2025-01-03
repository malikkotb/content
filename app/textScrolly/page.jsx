"use client";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap";

export default function TextScrolly() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container", // Element to trigger the timeline
        start: "top top", // Start when `.scroll-container` reaches the top of the viewport
        end: "bottom bottom", // End when `.scroll-container` leaves the viewport
        scrub: true, // Smooth animation tied to scroll
        pin: true, // Optional: Pins the container during the animation
      },
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <svg
        className="w-[70%] md:w-[50%] xl:max-h-[calc(100vh-15rem)]"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2167 2197"
        style={{
          // TODO: maybe change this or not
          transform: "rotate(-2.5545deg)",
        }}
      >
        <path
          id="a"
          d="M-.3 331c561.7-488.8 1413.2-429.7 1902 132 391 449.3 343.7 1130.6-105.6 1521.6a862.8 862.8 0 0 1-1217.3-84.5 690.2 690.2 0 0 1 67.6-973.8 552.2 552.2 0 0 1 779.1 54.1 441.6 441.6 0 0 1-43.3 623.2 353.5 353.5 0 0 1-498.6-34.6 282.7 282.7 0 0 1 27.7-398.9 226.2 226.2 0 0 1 319.1 22.1 181 181 0 0 1-17.7 255.3"
          fill="transparent"
          stroke="black"
        ></path>
        <text>
          <textPath
            xlinkHref="#a"
            startOffset="0%"
            alignmentBaseline="middle"
            className="font-caslon text-[209px] tracking-[-0.07em]"
          >
            A turn around in the{" "}
            <tspan alignmentBaseline="middle" className="italic">
              fashion canon
            </tspan>{" "}
            is imminent, stripped of dead-end irony, in favour of a newfound
            joie de vivre.
          </textPath>
        </text>
        {/* <path
          d="M-.3 331c561.7-488.8 1413.2-429.7 1902 132 391 449.3 343.7 1130.6-105.6 1521.6a862.8 862.8 0 0 1-1217.3-84.5 690.2 690.2 0 0 1 67.6-973.8 552.2 552.2 0 0 1 779.1 54.1 441.6 441.6 0 0 1-43.3 623.2 353.5 353.5 0 0 1-498.6-34.6 282.7 282.7 0 0 1 27.7-398.9 226.2 226.2 0 0 1 319.1 22.1 181 181 0 0 1-17.7 255.3"
          stroke="white"
          strokeWidth="350px"
          fill="none"
          style={{
            strokeDashoffset: "23345px",
            strokeDasharray: "12000",
          }}
        ></path> */}
      </svg>
    </div>
  );
}
