import { useEffect, useRef } from "react";

export function DotsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dotSize = 3; // Diameter of dots
    const spacing = 10; // Space between dots
    const blurProbability = 0.1; // 10% of dots will be blurred

    // Start at half-spacing to avoid cut-off on edges
    const offset = spacing / 2;

    // Calculate grid limits, ensuring the last dot doesn’t get clipped
    const cols = Math.floor((canvas.width - offset) / spacing);
    const rows = Math.floor((canvas.height - offset) / spacing);

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        const posX = x * spacing + offset;
        const posY = y * spacing + offset;

        // Apply blur randomly
        ctx.filter = Math.random() < blurProbability ? "blur(3px)" : "none";

        ctx.fillStyle = "#3C3D37";
        ctx.beginPath();
        ctx.arc(posX, posY, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Reset filter after drawing
    ctx.filter = "none";
  }, []);

  return <canvas ref={canvasRef} className='w-full h-full'></canvas>;
}

// import { useEffect, useRef } from "react";

// export function DotsCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas size to match viewport
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const dotSize = 3; // Diameter of dots
//     const spacing = 7; // Space between dots

//     const cols = Math.floor(canvas.width / spacing);
//     const rows = Math.floor(canvas.height / spacing);

//     ctx.fillStyle = "black";

//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < cols; x++) {
//         ctx.beginPath();
//         ctx.arc(x * spacing, y * spacing, dotSize / 2, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }
//   }, []);

//   return <canvas ref={canvasRef} className='w-full h-full ml-1'></canvas>;
// }
