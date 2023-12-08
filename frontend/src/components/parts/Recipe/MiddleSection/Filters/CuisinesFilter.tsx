import React from 'react';
import './filterStyling.css';
import Image from 'next/image';
const cuisines: string[] = [
  'Japanese',
  'Mexican',
  'Chinese',
  'Greek',
  'Italian',
  'French',
];
export function CuisinesFilter() {
  return (
    <div>
      <div>
        <h1 className="cuisineTitle">Cuisines</h1>
      </div>
      <div className="grid grid-cols-6 justify-items-center gap-2 p-2">
        {cuisines.map((cuisines, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer"
          >
            <Image
              src={`/images/Filter/${cuisines}.png`}
              alt={`Icon ${index}`}
              className="w-12 h-12"
              width={50}
              height={50}
            />
            <h2 className="font-light drop-shadow-lg">{cuisines}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
