"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function InfiniteScroll() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      start: "top bottom", 
      markers: true,
      end: "max",
      onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: (self) => self.scroll(2),
    }).scroll(2);
  }, []);
  return (
    <>
      <div className="infinite-scroll">
        <div className="infinite-scroll-fixed">
          <span className="skill">Frontend developer, based in Wiesbaden</span>
          <h1>
            John <br /> Doe
          </h1>
          <div className="contact">
            <span className="email">info@johndoe.com</span>
            <span className="linkedin">linkedin</span>
          </div>
        </div>
        <div className="projects-wrapper">
          {[...Array(5)].map((project, index) => (
            <div className="project" key={index}>
              <img src={`/drag/img${index + 1}.png`} alt="" />
              <h2>Project{index}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;
