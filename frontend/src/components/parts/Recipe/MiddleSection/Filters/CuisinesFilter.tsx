"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React, { useState } from "react";
import "./filterStyling.css";
import Image from "next/image";
const cuisines: string[] = [
  "Japanese",
  "Mexican",
  "Chinese",
  "Greek",
  "Italian",
  "French",
];
type CuisinesFilterProps = {
  onCuisineChange: (selectedCuisines: string[]) => void;
};
type Cuisine = (typeof cuisines)[number];
export function CuisinesFilter({ onCuisineChange }: CuisinesFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  const handleSelectCuisine = (cuisine: Cuisine) => {
    const newSelectedCuisines = selectedCuisines.includes(cuisine)
      ? selectedCuisines.filter((c) => c !== cuisine)
      : [...selectedCuisines, cuisine];

    setSelectedCuisines(newSelectedCuisines);
    onCuisineChange(newSelectedCuisines);
    const params = new URLSearchParams(searchParams);

    if (newSelectedCuisines.length > 0) {
      params.set("cuisine", newSelectedCuisines.join(","));
    } else {
      params.delete("cuisine");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <div>
        <h1 className="cuisineTitle">Cuisines</h1>
      </div>
      <div className="grid grid-cols-6 justify-items-center gap-2 p-2">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            className={`flex flex-col items-center hover:cursor-pointer ${
              selectedCuisines.includes(cuisine)
                ? "card-click p-1 border-2 border-black-500 rounded-lg shadow-lg"
                : "bg-transparent border-2 border-transparent"
            }`}
            onClick={() => handleSelectCuisine(cuisine)}
          >
            <Image
              src={`/images/Filter/${cuisine}.png`}
              alt={`Icon ${index}`}
              className="w-12 h-12"
              width={50}
              height={50}
            />
            <h2 className="font-light drop-shadow-lg">{cuisine}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
