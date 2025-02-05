"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// inspiration: mai sai gon

export default function Page() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const imageRefs = useRef([]);
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleImage = () => {
    gsap.to(imageRef.current, {
      clipPath: isExpanded
        ? "circle(100px at center)"
        : "circle(100% at center)",
      duration: 1,
      ease: "power3.out",
    });
    setIsExpanded(!isExpanded);
  };

  useGSAP(() => {}, []);

  return (
    <div className='h-screen relative justify-center flex items-center'>
      <div
        className='w-full h-screen flex justify-center items-center bg-black'
        onClick={toggleImage}
      >
        <div
          ref={imageRef}
          className='bg-cover bg-center w-full h-screen relative cursor-pointer justify-center flex'
          style={{
            backgroundImage: "url('/drag/img5.png')",
            clipPath: "circle(100px at center)",
          }}
        >
          <header className='text-white px-6 pt-6 flex w-full justify-between'>
            <div>Ma Sai Gon</div>
            <div className='flex font-mono text-xs justify-between items-center'>
              <span className='underline'>EN</span>
              <span className='underline opacity-60'>DE</span>
              <span className='underline opacity-60'>FR</span>
              <div>
                <svg
                  width='20'
                  height='20'
                  className='borderr'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
            </div>
          </header>
          <div className='text-white uppercase w-[330px] flex flex-col gap-4 text-center items-center absolute bottom-40'>
            <p className='leading-none'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sapiente sunt, fuga sed laudantium exercitationem quos quaerat
              laborum Lorem ipsum dolor sit, amet consectetur adipisicing elit
              lorem.
            </p>
            <p className='opacity-70 text-xs'>
              KHOA LÊ, AUTHOER OF THE PROJECT
            </p>
            {/* TODO: make make color swith on hover come in from bottom using css */}
            <div className='rounded-full px-4 py-3 w-fit normal-case transition-colors duration-300 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white'>
              Start exploring
            </div>
          </div>
        </div>
      </div>

      <div
        ref={headingRef}
        style={{ zIndex: 100 }}
        className='absolute w-full px-6 leading-none font-serif text-white text-[150px] flex justify-between'
      >
        <h1>Mai</h1>
        <h1>Sai</h1>
        <h1>Gon</h1>
      </div>
    </div>
  );
}
