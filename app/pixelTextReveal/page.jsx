"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const [src, setSrc] = useState("/maskReveal/img5.png");

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    gsap.from(".pixel", {
      opacity: 0,
      ease: "none",
      stagger: { amount: 0.5, from: "random" },
      // onComplete: () => { setSrc("/maskReveal/img1.png"); }
    });
  }, []);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-[40vh] w-[40vh] bg-red-700 grid grid-cols-7 grid-rows-7"
      >
        <div className="absolute h-full w-full">
          <Image
            // src={"/maskReveal/img1.png"}
            src={src}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        {Array.from({ length: 49 }).map((_, index) => (
          <div key={index} className="bg-orange-400 pixel z-10"></div>
        ))}
      </div>
    </div>
  );
}
