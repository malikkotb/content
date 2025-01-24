// TODO: show how to create this button in webflow
// step by step, including the two icons
// one of them being absolutely positioned
// and then the parent component of the icon
// being position:relative and having overflow-hidden to hide the other icon

// Split the text inside all elements with the class "blur-span"
let typeSplit = new SplitType(".blur-span", {
  types: "chars", // Split into characters
  tagName: "span", // Wrap each character in a <span>
});

// Reusable function for hover animation with customizable options
function createHoverAnimation(
  button,
  iconRight,
  iconLeft,
  characters,
  xDistance,
  staggerOptions = { amount: 0.04, from: "start" }
) {
  button.addEventListener("mouseenter", () => {
    let hoverTimeline = gsap.timeline();
    hoverTimeline
      .to([iconRight, iconLeft], {
        x: xDistance,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .to(
        characters,
        {
          filter: "blur(5px)",
          duration: 0.2,
          stagger: staggerOptions,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        characters,
        {
          filter: "blur(0px)", // Remove blur effect
          duration: 0.2,
          stagger: staggerOptions,
          ease: "power3.out",
        },
        "<=0.04"
      );
  });

  // Reverse the animation on mouseleave
  button.addEventListener("mouseleave", () => {
    gsap.to([iconRight, iconLeft], {
      x: 0, // Return icons to their original position
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  });
}

// Apply to the first button with custom xDistance and stagger options
const blurButton1 = document.querySelector("#button1");
const iconRight1 = document.querySelector("#button1 .icon-right");
const iconLeft1 = document.querySelector("#button1 .icon-left");
const characters1 = document.querySelectorAll("#button1 .blur-span .char");

createHoverAnimation(blurButton1, iconRight1, iconLeft1, characters1, 45, {
  each: 0.04,
});

// Apply to the second button with custom xDistance and stagger options
const blurButton2 = document.querySelector("#button2");
const iconRight2 = document.querySelector("#button2 .icon-right-2");
const iconLeft2 = document.querySelector("#button2 .icon-left-2");
const characters2 = document.querySelectorAll("#button2 .blur-span .char");

createHoverAnimation(blurButton2, iconRight2, iconLeft2, characters2, -45, {
  each: 0.04,
  from: "end",
});

// Volume Button Hover Animation
const volumeBtn = document.querySelector(".volume-button");
const volumeBars = document.querySelectorAll(".volume-bars");

volumeBtn.addEventListener("mouseenter", () => {
  volumeBars.forEach((bar) => {
    bar.style.opacity = "1";
  });

  let hoverTimeline = gsap.timeline();
  hoverTimeline
    .to(
      volumeBars,
      {
        filter: "blur(4px)", // Apply blur
        duration: 0.25, // Animation duration for each character
        y: -8,
        stagger: 0.05, // Stagger effect
        ease: "power3.out",
      },
      "<"
    )
    .to(
      volumeBars,
      {
        filter: "blur(0px)", // Remove blur
        duration: 0.25,
        y: 0,
        stagger: 0.05, // Stagger effect in reverse
        ease: "power3.out",
      },
      "<=0.05"
    );
});

volumeBtn.addEventListener("mouseleave", () => {
  volumeBars.forEach((bar) => {
    bar.style.opacity = "0.5";
  });
});
