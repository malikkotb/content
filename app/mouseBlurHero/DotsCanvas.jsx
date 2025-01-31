import { useEffect, useRef } from "react";

export function DotsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dotSize = 3; // Diameter of dots
    const spacing = 7; // Space between dots

    const cols = Math.floor(canvas.width / spacing);
    const rows = Math.floor(canvas.height / spacing);

    ctx.fillStyle = "black";

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        ctx.arc(x * spacing, y * spacing, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, []);

  return <canvas ref={canvasRef} className='w-full h-full'></canvas>;
}
