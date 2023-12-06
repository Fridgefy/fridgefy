import Image from "next/image";
import "./hero.css";
export default function HeroBackground() {
  const svgs: string[] = [
    "foodIcon-1.svg",
    "foodIcon-2.svg",
    "foodIcon-3.svg",
    "foodIcon-4.svg",
    "foodIcon-5.svg",
    "foodIcon-6.svg",
    "foodIcon-7.svg",
    "foodIcon-8.svg",
    "foodIcon-9.svg",
    "foodIcon-10.svg",
    "foodIcon-11.svg",
    "foodIcon-12.svg",
    "foodIcon-13.svg",
    "foodIcon-14.svg",
    "foodIcon-15.svg",
    "foodIcon-16.svg",
    "foodIcon-17.svg",
    "foodIcon-18.svg",
    "foodIcon-19.svg",
    "foodIcon-20.svg",
    "foodIcon-21.svg",
    "foodIcon-22.svg",
  ];

  const createBackgroundElements = (
    columns: number,
    rows: number
  ): string[] => {
    const totalElements = columns * rows;
    let elements: string[] = [];
    while (elements.length < totalElements) {
      elements.push(...svgs);
    }
    return elements.slice(0, totalElements);
  };

  const backgroundElements: string[] = createBackgroundElements(10, 6);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="grid grid-cols-10 gap-4 p-10 w-full h-full ml-4 justify-center items-center">
        {backgroundElements.map((svg, index) => (
          <div
            key={index}
            className="w-12 h-12 flex justify-center items-center rotateIcon"
          >
            <Image
              src={`/images/Hero/${svg}`}
              alt={`Icon ${index}`}
              layout="responsive"
              className="w-12 h-12"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
