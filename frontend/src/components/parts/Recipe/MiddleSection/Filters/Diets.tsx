import "./filterStyling.css";
import Image from "next/image";
const diets: string[] = ["Gluten", "Vegan", "Keto"];
export default function Diets() {
  return (
    <>
      <h1 className="intolerance-title mb-3">Diets</h1>
      <div className="grid grid-cols-3 justify-items-center  gap-x-3">
        {diets.map((diet, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer"
          >
            <Image
              src={`/images/Filter/${diet}.png`}
              alt={`Icon ${index}`}
              className="w-8 h-8"
              width={30}
              height={30}
            />
            <h2 className="font-light drop-shadow-lg">{diet}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
