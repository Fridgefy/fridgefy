'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import './filterStyling.css';
import Image from 'next/image';
import { useState } from 'react';
const intolerance: string[] = ['Dairy', 'Egg', 'Peanut'];
type Intolerance = (typeof intolerance)[number];

export function IntolerancesFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedIntolerances, setSelectedIntolerances] = useState<string[]>(
    []
  );

  const handleSelectIntolerance = (intolerance: Intolerance) => {
    const newSelectedIntolerances = selectedIntolerances.includes(intolerance)
      ? selectedIntolerances.filter((i) => i !== intolerance)
      : [...selectedIntolerances, intolerance];
    setSelectedIntolerances(newSelectedIntolerances);
    const params = new URLSearchParams(searchParams);
    if (newSelectedIntolerances.length > 0) {
      if (newSelectedIntolerances.length > 1) {
        params.set('intolerances', newSelectedIntolerances.join(','));
      } else {
        params.set('intolerances', newSelectedIntolerances[0]);
      }
    } else {
      params.delete('intolerances');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <h1 className="intolerance-title mb-3">Intolerances</h1>
      <div className="grid grid-cols-3 justify-items-center  gap-x-3">
        {intolerance.map((intolerance, index) => (
          <div
            key={index}
            className={`flex flex-col items-center hover:cursor-pointer ${
              selectedIntolerances.includes(intolerance)
                ? 'bg-accent p-1 border-2 border-black-500 rounded-lg shadow-lg'
                : 'bg-transparent border-2 border-transparent'
            }`}
            onClick={() => handleSelectIntolerance(intolerance)}
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
