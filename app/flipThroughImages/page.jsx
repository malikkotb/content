import Image from "next/image";

export default function FlipThroughImages() {
  return (
    <div className="h-screen w-full overflow-hidden bg-red-200">
      {Array(8).map((image, index) => (
        <div key={index} className="relative h-56 w-56">
          {image}
          <Image src={`/drag/img1.png`} alt="img" fill />
        </div>
      ))}
    </div>
  );
}
