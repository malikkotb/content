document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(CustomEase);
  CustomEase.create("button-ease", "0.5, 0.05, 0.05, 0.99");

  initMenuButton();

  // Select the h1 element
  const heading = document.querySelector(".animated-heading");
  const navbar = document.querySelector(".navbar");
  const headerCity = document.getElementById("headerCity");
  if (!heading) return;

  const tl = gsap.timeline();
  tl.from(".header30_background-image", {
    scale: 1.1,
    duration: 0.75,
    ease: "cubic-bezier(0.22,0.61,0.36,1);",
  })
    .from(
      heading,
      {
        y: "100%",
        opacity: 0,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
      },
      "<"
    )
    .from(
      headerCity,
      {
        y: "100%",
        opacity: 0,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
      },
      "-=0.25"
    )
    .from(
      navbar,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
      },
      "<"
    );

  gsap.registerPlugin(ScrollTrigger);

  document
    .querySelectorAll(".heading-style-h3")
    .forEach((heading) => {
      gsap.from(heading, {
        y: "75%",
        opacity: 0,
        delay: 0.1,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
        scrollTrigger: {
          trigger: heading,
          start: "top 97%", // Adjust for when animation should start
          toggleActions: "play none none none",
        },
      });
    });

  document
    .querySelectorAll(".text-weight-light")
    .forEach((paragraph) => {
      if (paragraph.id !== "headerCity") {
        let splitText = new SplitType(paragraph, { types: "lines" });

        gsap.from(splitText.lines, {
          y: "50%",
          opacity: 0,
          delay: 0.4,
          duration: 0.5,
          ease: "cubic-bezier(0.22,0.61,0.36,1);",
          // ease: "cubic-bezier(0.165, 0.84, 0.44, 1)", // Very smooth!
          stagger: { each: 0.1, from: "start" },
          scrollTrigger: {
            trigger: paragraph,
            start: "top 97%",
            toggleActions: "play none none none",
          },
        });
      }
    });

  document
    .querySelectorAll(".heading-style-h3")
    .forEach((heading) => {
      gsap.from(heading, {
        y: "75%",
        opacity: 0,
        delay: 0.1,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
        scrollTrigger: {
          trigger: heading,
          start: "top 97%", // Adjust for when animation should start
          toggleActions: "play none none none",
        },
      });
    });

  //"animated-link-btn"
  document
    .querySelectorAll(".animated-link-btn")
    .forEach((button) => {
      gsap.from(button, {
        y: "50%",
        opacity: 0,
        delay: 0.65,
        duration: 0.5,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
        //ease: "cubic-bezier(0.165, 0.84, 0.44, 1)", // Very smooth!
        scrollTrigger: {
          trigger: button,
          start: "top 97%",
          toggleActions: "play none none none",
        },
      });
    });

  document.querySelectorAll(".cta_button").forEach((button) => {
    gsap.from(button, {
      y: "50%",
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "cubic-bezier(0.22,0.61,0.36,1);",
      //ease: "cubic-bezier(0.165, 0.84, 0.44, 1)", // Very smooth!
      scrollTrigger: {
        trigger: button,
        start: "top 97%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.from(
    ".cta27_background-image",
    {
      scale: 1.1,
      duration: 0.75,
      ease: "cubic-bezier(0.22,0.61,0.36,1);",
      scrollTrigger: {
        trigger: ".cta27_background-image",
        start: "top 98%",
        toggleActions: "play none none none",
      },
    },
    "<"
  );

  document
    .querySelectorAll(".home_features-list-1_image-wrapper")
    .forEach((imageWrapper) => {
      gsap.from(imageWrapper, {
        y: "25%",
        opacity: 0,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
        scrollTrigger: {
          trigger: imageWrapper,
          start: "top 97%",
          toggleActions: "play none none none",
        },
      });
    });

  const images = document.querySelectorAll(
    ".home_features-list-1_image"
  );

  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
        ease: "power2.out",
      });
    });

    image.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.75,
        ease: "cubic-bezier(0.22,0.61,0.36,1);",
      });
    });
  });

  // change color of header based on if background image is intersecting
  const targetSection = document.querySelector(".section_header30");
  const bookingBtn = document.getElementById("booking-btn-header");
  const lines = document.querySelectorAll(".menu-button-line");

  const logoPath1 = document.getElementById("logo-path1");
  const logoPath2 = document.getElementById("logo-path2");
  const logoPath3 = document.getElementById("logo-path3");

  if (!navbar || !targetSection || !bookingBtn) return;

  function checkSection() {
    const rect = targetSection.getBoundingClientRect();
    const offset = 25; // Adjust this px value to trigger earlier

    if (rect.top <= offset && rect.bottom >= offset) {
      bookingBtn.classList.remove("black-color"); // Remove the class when in view
      bookingBtn.classList.remove("underline-link--black");
      lines.forEach((line) =>
        line.classList.remove("background-black")
      );
      lines.forEach((line) => line.classList.add("background-white"));
      logoPath1.classList.add("fill-white");
      logoPath2.classList.add("fill-white");
      logoPath3.classList.add("fill-white");
      navbar.classList.remove("background-white");
    } else {
      bookingBtn.classList.add("black-color"); // Add when out of view
      bookingBtn.classList.add("underline-link--black");
      lines.forEach((line) =>
        line.classList.remove("background-white")
      );
      lines.forEach((line) => line.classList.add("background-black"));
      logoPath1.classList.remove("fill-white");
      logoPath2.classList.remove("fill-white");
      logoPath3.classList.remove("fill-white");
      navbar.classList.add("background-white");
    }
  }

  window.addEventListener("scroll", checkSection);
  checkSection(); // Run on load in case user starts mid-page

  const links = document.querySelectorAll(".menu-link");
  const menuImages = document.querySelectorAll(".menu-image");

  // Show the last image initially
  menuImages.forEach((img, idx) => {
    if (idx === menuImages.length - 1) {
      img.style.opacity = "1";
      img.style.visibility = "inherit";
    } else {
      img.style.opacity = "0";
      img.style.visibility = "hidden";
    }
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // Set opacity to 50% for all links except the hovered one

      links.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.style.opacity = "0.3";
          //otherLink.style.filter = 'blur(4px)';
        }
      });

      // Get the index of the image to show from the data attribute
      const imageIndex = link.dataset.imageIndex;

      // Hide all images
      menuImages.forEach((img) => {
        img.style.opacity = "0";
        img.style.visibility = "hidden";
      });

      // Show the specific image linked to the hovered link
      const imageToShow = menuImages[imageIndex - 1]; // Convert to 0-based index
      if (imageToShow) {
        imageToShow.style.opacity = "1";
        imageToShow.style.visibility = "inherit";
      }
    });

    link.addEventListener("mouseleave", () => {
      // Reset opacity to 100% for all links
      links.forEach((otherLink) => {
        //otherLink.style.filter = "none";
        otherLink.style.opacity = "1";
      });
    });
  });
});

function initMenuButton() {
  // Select elements
  const menuButton = document.querySelector("[data-menu-button]");
  const lines = document.querySelectorAll(".menu-button-line");
  const [line1, line2, line3] = lines;

  // Define one global timeline
  let menuButtonTl = gsap.timeline({
    defaults: {
      overwrite: "auto",
      ease: "button-ease",
      duration: 0.3,
    },
  });

  const menuOpen = () => {
    const targetSection = document.querySelector(".section_header30");
    const rect = targetSection.getBoundingClientRect();
    const offset = 25; // Adjust this px value to trigger earlier

    if (rect.top <= offset && rect.bottom >= offset) {
      menuButtonTl
        .clear() // Stop any previous tweens, if any
        .to(line2, { scaleX: 0, opacity: 0 }) // Step 1: Hide middle line
        .to(line1, { x: "-1.3em", opacity: 0 }, "<") // Step 1: Move top line
        .to(line3, { x: "1.3em", opacity: 0 }, "<") // Step 1: Move bottom line
        .to([line1, line3], { opacity: 0, duration: 0.1 }, "<+=0.2") // Step 2: Quickly fade top and bottom lines
        .to(
          lines,
          {
            className: "menu-button-line background-black",
            duration: 0.1,
          },
          "<"
        )
        .set(line1, { rotate: -135, y: "-1.3em", scaleX: 0.9 }) // Step 3: Instantly rotate and scale top line
        .set(line3, { rotate: 135, y: "-1.4em", scaleX: 0.9 }, "<") // Step 3: Instantly rotate and scale bottom line
        .to(line1, { opacity: 1, x: "0em", y: "0.4em" }) // Step 4: Move top line to final position
        .to(line3, { opacity: 1, x: "0em", y: "-0.15em" }, "<+=0.1"); // Step 4: Move bottom line to final position
    } else {
      menuButtonTl
        .clear() // Stop any previous tweens, if any
        .to(line2, { scaleX: 0, opacity: 0 }) // Step 1: Hide middle line
        .to(line1, { x: "-1.3em", opacity: 0 }, "<") // Step 1: Move top line
        .to(line3, { x: "1.3em", opacity: 0 }, "<") // Step 1: Move bottom line
        .to([line1, line3], { opacity: 0, duration: 0.1 }, "<+=0.2") // Step 2: Quickly fade top and bottom lines
        .to(
          lines,
          { toggleClass: "background-red", duration: 0.01 },
          "<"
        )
        .to(
          lines,
          {
            className: "menu-button-line background-black",
            duration: 0.1,
          },
          "<"
        )

        .set(line1, { rotate: -135, y: "-1.3em", scaleX: 0.9 }) // Step 3: Instantly rotate and scale top line
        .set(line3, { rotate: 135, y: "-1.4em", scaleX: 0.9 }, "<") // Step 3: Instantly rotate and scale bottom line
        .to(line1, { opacity: 1, x: "0em", y: "0.4em" }) // Step 4: Move top line to final position
        .to(line3, { opacity: 1, x: "0em", y: "-0.15em" }, "<+=0.1"); // Step 4: Move bottom line to final position
    }
  };

  const menuClose = () => {
    const targetSection = document.querySelector(".section_header30");
    const rect = targetSection.getBoundingClientRect();
    const offset = 25; // Adjust this px value to trigger earlier

    if (rect.top <= offset && rect.bottom >= offset) {
      // Code block intentionally left empty
      menuButtonTl
        .clear() // Stop any previous tweens, if any
        .to(
          lines,
          {
            className: "menu-button-line background-white",
            duration: 0.1,
          },
          "<"
        )
        .to([line1, line2, line3], {
          // Move all lines back in a different animation
          scaleX: 1,
          rotate: 0,
          x: "0em",
          y: "0em",
          opacity: 1,
          duration: 0.45,
          overwrite: "auto",
        });
    } else {
      // Code block intentionally left empty
      menuButtonTl
        .clear() // Stop any previous tweens, if any
        .to(
          lines,
          {
            className: "menu-button-line background-black",
            duration: 0.1,
          },
          "<"
        )
        //.to(lines, { className: "+=background-black", duration: 0.01 }, "<")
        .to([line1, line2, line3], {
          // Move all lines back in a different animation
          scaleX: 1,
          rotate: 0,
          x: "0em",
          y: "0em",
          opacity: 1,
          duration: 0.45,
          overwrite: "auto",
        });
    }
  };

  // Toggle Animation
  menuButton.addEventListener("click", () => {
    const currentState = menuButton.getAttribute("data-menu-button");
    //const lines = document.querySelectorAll(".menu-button-line");

    if (currentState === "burger") {
      //lines.forEach((line) =>
      menuOpen();
      menuButton.setAttribute("data-menu-button", "close");
    } else {
      menuClose();
      menuButton.setAttribute("data-menu-button", "burger");
    }
  });
}
