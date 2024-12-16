import { useRef } from "react";
import { gsap } from "gsap";

function FontWeightAnimation() {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { fontWeight: 700, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, { fontWeight: 400, duration: 0.3 });
  };

  return (
    <h1
      ref={textRef}
      style={{ fontWeight: 400 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Over Me!
    </h1>
  );
}

export default FontWeightAnimation;
