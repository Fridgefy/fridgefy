"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import "./filterStyling.css";
import Image from "next/image";
import { useState } from "react";
const diets: string[] = ["Gluten Free", "Vegan", "Ketogenic"];
type Diet = (typeof diets)[number];
export function DietsFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);

  const handleSelectDiet = (diet: Diet) => {
    const newSelectedDiets = selectedDiet.includes(diet)
      ? selectedDiet.filter((c) => c !== diet)
      : [...selectedDiet, diet];

    setSelectedDiet(newSelectedDiets);

    const params = new URLSearchParams(searchParams);
    if (newSelectedDiets.length > 0) {
      params.set("diets", newSelectedDiets.join(","));
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
              selectedDiet.includes(diet)
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
