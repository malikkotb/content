import { useEffect, useRef } from "react";

export function DotsCanvas({ mouseX, mouseY }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dotSize = 3; // Diameter of dots
    const spacing = 10; // Space between dots
    const blurRadius = 40; // Radius around the mouse where dots blur

    const offset = spacing / 2;
    const cols = Math.floor((canvas.width - offset) / spacing);
    const rows = Math.floor((canvas.height - offset) / spacing);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        const posX = x * spacing + offset;
        const posY = y * spacing + offset;

        // Calculate distance from mouse
        const distance = Math.hypot(mouseX - posX, mouseY - posY);

        // Apply blur if within blur radius
        ctx.filter = distance < blurRadius ? "blur(3px)" : "none";

        ctx.fillStyle = "#3C3D37";
        ctx.beginPath();
        ctx.arc(posX, posY, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.filter = "none"; // Reset filter after drawing
  }, [mouseX, mouseY]); // Re-run when mouse moves

  return (
    <canvas
      ref={canvasRef}
      className='w-full h-full absolute top-0 left-0'
    ></canvas>
  );
}

// import { useEffect, useRef } from "react";

// export function DotsCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const dotSize = 3; // Diameter of dots
//     const spacing = 10; // Space between dots
//     const blurProbability = 0.1; // 10% of dots will be blurred

//     // Start at half-spacing to avoid cut-off on edges
//     const offset = spacing / 2;

//     // Calculate grid limits, ensuring the last dot doesn’t get clipped
//     const cols = Math.floor((canvas.width - offset) / spacing);
//     const rows = Math.floor((canvas.height - offset) / spacing);

//     for (let y = 0; y <= rows; y++) {
//       for (let x = 0; x <= cols; x++) {
//         const posX = x * spacing + offset;
//         const posY = y * spacing + offset;

//         // Apply blur randomly
//         ctx.filter = Math.random() < blurProbability ? "blur(3px)" : "none";

//         ctx.fillStyle = "#3C3D37";
//         ctx.beginPath();
//         ctx.arc(posX, posY, dotSize / 2, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Reset filter after drawing
//     ctx.filter = "none";
//   }, []);

//   return <canvas ref={canvasRef} className='w-full h-full'></canvas>;
// }
