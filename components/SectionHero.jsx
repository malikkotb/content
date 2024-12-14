import Image from "next/image";
import AnimatedWord from "./AnimatedWord";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

const phrases = ["Services", "Rendering", "Prototyping", "Concept & Design"];
const phrasesLocation = ["Location", "Germany"];
const phrasesDescription = [
  "Exterior designer based in Munich.",
  "For any questions or project inquires,",
  "feel free to contact me.",
];
const phrasesContact = [
  { title: "Contact", link: "" },
  { title: "Email", link: "mailto:matteojust@gmail.com" },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/matteo-just-528048173",
  },
  { title: "Behance", link: "https://www.behance.net/matteojst" },
  { title: "Instagram", link: "https://instagram.com/matteojust" },
];

function SectionHero() {
  return (
    <section className="h-[100vh] relative flex items-center flex-col">
      <div className="text-[12vw] leading-[14vw] mt-[10vh] xl:mt-[7vh]">
        <div className="overflow-hidden">
          <AnimatedWord word="Exterior" />
        </div>

        <div className="pl-[12vw] overflow-hidden flex items-center">
          <div className="overflow-hidden">
            <motion.div
              className=""
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            >
              <IoMdArrowForward />
            </motion.div>
          </div>
          <AnimatedWord word="Designer" delay={0.2} />
        </div>
      </div>
      <div className="flex w-full px-[10vw] md:px-[15vw] lg:px-[20vw] pt-12 text-sm md:text-base xl:text-lg">
        <div className="flex justify-between  w-6/12 flex-col">
          <div className="">
            <div className="flex flex-col">
              {phrases.map((phrase, index) => {
                return (
                  <div key={index} className={"overflow-hidden"}>
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      className={`${
                        index === 0
                          ? "text-xs tracking-tighter"
                          : "tracking-tight"
                      }`}
                      transition={{
                        duration: 0.75,
                        ease: [0.33, 1, 0.68, 1],
                        delay: 0.5 + 0.075 * index,
                      }}
                    >
                      {phrase}
                    </motion.div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4 flex flex-col">
              {phrasesLocation.map((phrase, index) => {
                return (
                  <div key={index} className={"overflow-hidden"}>
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      className={`${
                        index === 0
                          ? "text-xs tracking-tighter"
                          : "tracking-tight"
                      }`}
                      transition={{
                        duration: 0.75,
                        ease: [0.33, 1, 0.68, 1],
                        delay: 0.5 + 0.075 * (index + 1),
                      }}
                    >
                      {phrase}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            {phrasesContact.map((phrase, index) => {
              return (
                <div key={index} className={"overflow-hidden"}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    className={`${
                      index === 0
                        ? "text-xs tracking-tighter"
                        : "tracking-tight"
                    }`}
                    transition={{
                      duration: 0.75,
                      ease: [0.33, 1, 0.68, 1],
                      delay: 0.5 + 0.075 * (index + 2),
                    }}
                  >
                    {index < 1 ? (
                      phrase.title
                    ) : (
                      <a
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        target="_blank"
                        className="w-fit headerLink"
                        href={phrase.link}
                      >
                        {phrase.title}
                      </a>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between w-6/12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
            className=" relative flex"
          >
            <Image
              src={"/profile.png"}
              alt="Matteo Just"
              width={150}
              height={250}
              className="object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            {phrasesDescription.map((phrase, index) => {
              return (
                <div key={index} className={"overflow-hidden"}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    className={`tracking-tight`}
                    transition={{
                      duration: 0.75,
                      ease: [0.33, 1, 0.68, 1],
                      delay: 0.5 + 0.075 * (index + 2),
                    }}
                  >
                    {phrase}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="absolute bottom-1 -translate-y-1/2"
      >
        <ArrowDownIcon />
      </motion.div>
    </section>
  );
}

export default SectionHero;
