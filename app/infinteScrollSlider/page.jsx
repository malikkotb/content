"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Observer from "gsap/Observer"

function InfiniteScrollSlider() {

  // TODO: inspo: https://dezea.digital/showcase
  // https://www.youtube.com/watch?v=qssQ5DID0J8
  // CSS and CodePen: https://codepen.io/GreenSock/pen/XWzRraJ

  gsap.registerPlugin(Observer);

  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    splitHeadings = headings.map(
      (heading) =>
        new SplitText(heading, {
          type: "chars,words,lines",
          linesClass: "clip-text",
        })
    ),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  function gotoSection(index, direction) {
    index = wrap(index); // make sure it's valid
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
    if (currentIndex >= 0) {
      // The first time this function runs, current is -1
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
      },
      {
        yPercent: 0,
      },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        splitHeadings[index].chars,
        {
          autoAlpha: 0,
          yPercent: 150 * dFactor,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random",
          },
        },
        0.2
      );

    currentIndex = index;
  }

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);

  return (
    <>
      <div className="">
        <header>
          <div>Animated Sections</div>
          <div>
            <a href="https://codepen.io/BrianCross/pen/PoWapLP">
              Original By Brian
            </a>
          </div>
        </header>
        <section className="first">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <h2 className="section-heading">Scroll down</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="second">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Animated with GSAP</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="third">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">GreenSock</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Animation platform</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="fifth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Keep scrolling</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InfiniteScroll;
