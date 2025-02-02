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
    const spacing = 15; // Space between dots
    const blurRadius = 50; // Radius around the mouse where dots blur/move
    const attractionStrength = 70; // How much dots move toward the mouse

    const offset = spacing / 2;
    const cols = Math.floor((canvas.width - offset) / spacing);
    const rows = Math.floor((canvas.height - offset) / spacing);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        let posX = x * spacing + offset;
        let posY = y * spacing + offset;

        // Calculate distance from mouse
        const dx = mouseX - posX;
        const dy = mouseY - posY;
        const distance = Math.hypot(dx, dy);

        // If within attraction radius, move slightly toward the mouse
        if (distance < blurRadius) {
          const force = (blurRadius - distance) / blurRadius; // Strength of attraction (0 to 1)
          posX += dx * force * (attractionStrength / 100);
          posY += dy * force * (attractionStrength / 100);
          ctx.filter = "blur(1px)"; // Blur only affected dots
        } else {
          ctx.filter = "none";
        }

        // Draw the dot
        ctx.fillStyle = "#3C3D37";
        ctx.beginPath();
        ctx.arc(posX, posY, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.filter = "none"; // Reset filter after drawing
  }, [mouseX, mouseY]); // Re-run when mouse moves

  return <canvas ref={canvasRef} className='w-full h-full'></canvas>;
}
