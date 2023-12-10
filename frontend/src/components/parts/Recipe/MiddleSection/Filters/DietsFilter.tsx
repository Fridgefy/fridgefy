"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import "./filterStyling.css";
import Image from "next/image";
import { useState } from "react";
const diets: string[] = ["Gluten", "Vegan", "Keto"];
type Diet = (typeof diets)[number];
export function DietsFilter() {
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectDiet = (diet: Diet) => {
    setSelectedDiet(diet);

    const params = new URLSearchParams(searchParams);
    if (diet) {
      params.set("diets", diet);
    } else {
      params.delete("diets");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <h1 className="intolerance-title mb-3">Diets</h1>
      <div className="grid grid-cols-3 justify-items-center  gap-x-3">
        {diets.map((diet, index) => (
          <div
            key={index}
            className={`flex flex-col items-center hover:cursor-pointer ${
              selectedDiet === diet
                ? "bg-accent p-1 border-2 border-black-500 rounded-lg shadow-lg"
                : "bg-transparent border-2 border-transparent"
            }`}
            onClick={() => handleSelectDiet(diet)}
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
