import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OpacityText({ text }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.75", "end end"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={container}
      //   className='flex text-2xl tracking-tight leading-none py-10 px-4 max-w-7xl flex-wrap'
      className='flex flex-wrap'
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={"relative mr-3 mt-3"}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={"absolute opacity-20"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
