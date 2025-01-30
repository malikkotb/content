"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const rows = gsap.utils.toArray(".row");

    rows.forEach((row, index) => {
      gsap.fromTo(
        row,
        { scale: 0.8, y: 100 }, // Start smaller & slightly below
        {
          scale: 4,
        //   y: 0, // Move into position
          scrollTrigger: {
            trigger: row,
            start: `top bottom`,
            // start: `top+=${index * 100}vh bottom`, // Staggered scaling effect
            end: `top+=${index * 50}vh top`,
            scrub: true, // Smooth animation linked to scroll
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className='relative min-h-[500vh]'>
      {/* Full-height container to allow scrolling */}
      <div className='absolute top-0 h-screen w-full flex justify-center'>
        {/* Rows Container */}
        <div className='absolute bottom-0 translate-y-full flex flex-col items-center space-y-12'>
          {/* <div className="absolute bottom-0 flex flex-col items-center space-y-12"> */}
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className='row flex space-x-4'>
              {[...Array(5)].map((_, colIndex) => (
                <div key={colIndex} className='w-32 h-32 bg-blue-200 relative'>
                    <Image src="/drag/img1.png" alt="image" className="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollAnimation() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const rows = gsap.utils.toArray(".row");

//     rows.forEach((row, index) => {
//       gsap.fromTo(
//         row,
//         { scale: 0.8, y: 100 }, // Start smaller & slightly below
//         {
//           scale: 1,
//           y: 0, // Move into place
//           scrollTrigger: {
//             trigger: row,
//             start: `top bottom-=${index * 50}`, // Delays scaling for each row
//             end: "top top",
//             scrub: true, // Smooth animation linked to scroll
//             // markers: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div ref={containerRef} className='relative min-h-[500vh]'>
//       <div className='absolute top-0 h-screen'>
//         {/* Rows Container */}
//         <div className='absolute bottom-0 flex flex-col space-y-12'>
//           {[...Array(4)].map((_, rowIndex) => (
//             <div key={rowIndex} className='row flex space-x-4'>
//               {[...Array(5)].map((_, colIndex) => (
//                 <div key={colIndex} className='w-32 h-32 bg-blue-500' />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import { useRef, useEffect } from "react";
// import Lenis from "lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { values } from "./values.js";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Page() {
//   const containerRef = useRef(null);
//   const imageRefs = useRef([]);
//   const addToRefs = (refArray) => (el) => {
//     if (el && !refArray.current.includes(el)) {
//       refArray.current.push(el);
//     }
//   };
//   const addToImageRefs = addToRefs(imageRefs);

//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);

//   // TODO: Title: https://www.ingamana.com/ rebuild

//   useGSAP(() => {
//     // GSAP ScrollTrigger for scaling effect
//     imageRefs.current.forEach((image, index) => {
//       //   console.log("index: ", index, values[index].scaleTo);
//       // if (index >= 4) gsap.set(image, { visibility: "hidden" });

//       gsap.fromTo(
//         image,
//         { scale: values[index].scaleFrom },
//         {
//           scale: values[index].scaleTo, // Final scale value
//           //   scale: 5,
//           scrollTrigger: {
//             //   trigger: containerRef.current,
//             start: "top top", // Start when container top aligns with viewport top
//             // TODO: make the start activate every 5 elements
//             // so that 5 elements start simultanously
//             // start: `top+=${index < 5 ? 0 : 200}vh top`, // First images start at top, others start after 200vh
//             end: "bottom bottom", // End when container bottom aligns with viewport bottom
//             scrub: true, // Smoothly tie animation to scroll position
//             markers: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <div className='h-[700vh] overflow-hidden'>
//         {values.map((element, index) => (
//           <div
//             key={index}
//             ref={addToImageRefs}
//             className='absolute top-0 w-full h-full flex items-center justify-center'
//           >
//             <div
//               style={{
//                 // width: `${src.width}vw`,
//                 // height: `${src.height}vh`,
//                 top: `${element.top}vh`,
//                 left: `${element.left}vw`,
//               }}
//               className='bg-green-500 relative h-44 w-52'
//               // TODO: explain that the most important values here are relative (so relative to the parent container which is an absolute container)
//               // and then the top and left values for positioning
//             ></div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
