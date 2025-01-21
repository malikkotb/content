import React from "react";

function FancyButton({ label, onClick }) {
  console.log(document.querySelector(".blur-button"));

  // Split the text inside all elements with the class "blur-span"
  let typeSplit = new SplitType(".blur-span", {
    types: "chars", // Split into characters
    tagName: "span", // Wrap each character in a <span>
  });

  const element = document.querySelector(".blur-button");
  const blurSpan = document.querySelector(".blur-span");
  const characters = document.querySelectorAll(".blur-span .char");
  const iconRight = document.querySelector(".icon-right");
  const iconLeft = document.querySelector(".icon-left");

  element.addEventListener("mouseenter", () => {
    let hoverTimeline = gsap.timeline();

    hoverTimeline
      .to(characters, {
        filter: "blur(4px)", // Apply blur
        //opacity: 0.5, // Optional: Adjust opacity
        duration: 0.2, // Animation duration for each character
        stagger: 0.04, // Stagger effect
        ease: "power3.out",
      })
      .to(
        characters,
        {
          filter: "blur(0px)", // Remove blur
          //opacity: 1, // Reset opacity
          duration: 0.2,
          stagger: 0.04, // Stagger effect in reverse
          ease: "power3.out",
        },
        "<=0.04"
      );

    gsap.to(iconRight, {
      x: 40,
      duration: 0.25,
    });
    gsap.to(iconLeft, {
      x: 40,
      duration: 0.25,
    });

    //let tl = gsap.timeline();
    //tl
    //  .to(".blur-span", { y: -10, duration: 0.3, ease: "power3.out" })
    //  .to(".blur-span", { y: 0, duration: 0.3, ease: "power3.out" });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(iconRight, {
      x: 0,
      duration: 0.25,
    });
    gsap.to(iconLeft, {
      x: 0,
      duration: 0.25,
    });
  });

  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default FancyButton;
