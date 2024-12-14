import { motion } from "framer-motion";

const AnimatedWord = ({ word, delay = 0 }) => {
  return (
    <div style={{ display: "flex" }}>
      {word.split("").map((letter, index) => (
        <motion.div
          key={index}
          style={{
            display: "inline-block",
          }}
          initial={{
            opacity: 0,
            y: 80,
            rotateX: 70, // Start fully folded up
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0, // Unfold to the correct position
            rotateZ: 0, // Straighten out
          }}
          transition={{
            duration: 0.7, // Animation duration
            ease: "easeInOut", // Smooth transition
            delay: index * 0.02 + delay, // Stagger animation for each letter
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedWord;
