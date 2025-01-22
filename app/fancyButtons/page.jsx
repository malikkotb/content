import React from "react";

function FancyButton({ label, onClick }) {
  // swishing effect on hover button

  // Split the text inside all elements with the class "blur-span"
  let typeSplit = new SplitType(".blur-span", {
    types: "chars", // Split into characters
    tagName: "span", // Wrap each character in a <span>
  });

  const blurButton = document.querySelector(".blur-button");
  const blurSpan = document.querySelector(".blur-span");
  const characters = document.querySelectorAll(".blur-span .char");
  const iconRight = document.querySelector(".icon-right");
  const iconLeft = document.querySelector(".icon-left");
  const volumeBtn = document.querySelector(".volume-button");
  // TODO: show how to create this button in webflow
  // step by step, including the two icons
  // one of them being absolutely positioned
  // and then the parent component of the icon
  // being position:relative and having overflow-hidden to hide the other icon

  const volumeBars = document.querySelectorAll(".volume-bars");

  volumeBtn.addEventListener("mouseenter", () => {
    volumeBars.forEach((bar) => {
      bar.style.opacity = "1";
    });
  });

  volumeBtn.addEventListener("mouseleave", () => {
    volumeBars.forEach((bar) => {
      bar.style.opacity = "0.5";
    });
  });

  blurButton.addEventListener("mouseenter", () => {
    let hoverTimeline = gsap.timeline();
    hoverTimeline
      .to([iconRight, iconLeft], {
        x: 45, // we move both icons on the x-axis by 45 which results in one of them swishing away and the other swishing to
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .to(
        characters,
        {
          filter: "blur(4px)", // Apply blur
          //opacity: 0.5, // Optional: Adjust opacity
          duration: 0.2, // Animation duration for each character
          stagger: 0.04, // Stagger effect
          ease: "power3.out",
        },
        "<"
      )
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

    // to get that slight bouncing effect you can see at the end
    // we can set the easing to "back.out ..."
    // you can always adjust the values to your liking of course
    // if you want to see different easing, there is a great easing visualized by gsap: ..

    // if you want to see some more easings in action
    // and even create your own easing functions you can go to
    // https://easings.co/
  });

  // to reverse the animation when we stop hovering:
  blurButton.addEventListener("mouseleave", () => {
    gsap.to([iconRight, iconLeft], {
      x: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
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
