import "./filterStyling.css";
import Image from "next/image";
const intolerance: string[] = ["Dairy", "Egg", "Peanut"];
export default function Intolerances() {
  return (
    <>
      <h1 className="intolerance-title mb-3">Intolerances</h1>
      <div className="grid grid-cols-3 justify-items-center  gap-x-3">
        {intolerance.map((intolerance, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer"
          >
            <Image
              src={`/images/Filter/${intolerance}.png`}
              alt={`Icon ${index}`}
              className="w-8 h-8"
              width={30}
              height={30}
            />
            <h2 className="font-light drop-shadow-lg">{intolerance}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
