'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { Icons } from '@/components/icons/Icons';
import './filterStyling.css';
import { useState } from 'react';
import { cn } from '@/lib/tailwind/utils';

type Props = {
  ingredientsInFridge: '' | string[] | null | undefined;
};

export function IngredientsFilter({ ingredientsInFridge }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const handleSearch = useDebouncedCallback((term) => {
    if (!isChecked) {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('includeIngredients', term);
      } else {
        params.delete('includeIngredients');
      }
      replace(`${pathname}?${params.toString()}`);
    }
  }, 300);

  const handleIsChecked = (checked: boolean) => {
    console.log(ingredientsInFridge);

    setIsChecked(checked);
    const params = new URLSearchParams(searchParams);
    if (checked && ingredientsInFridge && ingredientsInFridge.length > 0) {
      if (ingredientsInFridge.length > 1) {
        params.set('includeIngredients', ingredientsInFridge.join(','));
      } else {
        params.set('includeIngredients', ingredientsInFridge[0]);
      }
    } else {
      params.delete('includeIngredients');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <h1 className="intolerance-title">Ingredients</h1>
      <div className="mt-4">
        <div className="w-full">
          <label className="relative ">
            <span className="sr-only">Search</span>
            {!isChecked && (
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Icons.search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
              </span>
            )}
            <input
              className={cn(
                'placeholder-italic placeholder-text-slate-400  bg-gray-100  w-full border border-slate-300 rounded-md py-2 pl-9 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
                isChecked && 'cursor-not-allowed'
              )}
              placeholder={isChecked ? '' : 'Search Ingredients...'}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              type="text"
              name="search"
              disabled={isChecked}
            />
          </label>
        </div>
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-sky-500"
              onChange={(e) => {
                handleIsChecked(e.target.checked);
              }}
            />
            <span className="ml-2 text-sm text-gray-600">
              Only items in fridge
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
