'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { Icons } from '@/components/icons/Icons';
import React from 'react';

export function RecipeNameFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="flex justify-center p-4 relative">
      <div className="w-1/2 justify-items-center">
        <label className="relative ">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icons.search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
          </span>
          <input
            className="placeholder-italic placeholder-text-slate-400  bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 search-shadow  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search Recipes..."
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            type="text"
            name="search"
          />
        </label>
      </div>
    </div>
  );
}
