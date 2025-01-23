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

    // Apply to the first button with custom xDistance and stagger options
    const blurButton1 = document.querySelector("#button1");
    const iconRight1 = document.querySelector("#button1 .icon-right");
    const iconLeft1 = document.querySelector("#button1 .icon-left");
    const characters1 = document.querySelectorAll("#button1 .blur-span .char");

    console.log(characters1);

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
  });

  // to reverse the animation when we stop hovering:
  blurButton.addEventListener("mouseleave", () => {
    gsap.to([iconRight, iconLeft], {
      x: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  });

  const links = document.querySelectorAll(".link-hover");
  const images = document.querySelectorAll(".hover-image");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // Get the index of the image to show from the data attribute
      const imageIndex = link.dataset.imageIndex;

      // Hide all images
      images.forEach((img) => img.classList.remove("visible"));

      // Show the specific image linked to the hovered link
      const imageToShow = images[imageIndex - 1]; // Convert to 0-based index
      if (imageToShow) {
        imageToShow.classList.add("visible");
      }
    });

    link.addEventListener("mouseleave", () => {
      // Optional: Reset to the default image (index 0)
      images.forEach((img) => img.classList.remove("visible"));
      images[0].classList.add("visible"); // Show the first image
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
