import React from "react";
import Cuisines from "./Filters/Cuisines";
import Intolerances from "./Filters/Intolerances";
import Ingredients from "./Filters/Ingredients";
import Diets from "./Filters/Diets";
import RecipeCard from "./RecipeCard";
import { Button } from "@/components/ui/button";

// Change this searchbar with form element create action for it
function SearchBar() {
  return (
    <div className="w-1/2 justify-items-center">
      <label className="relative ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>

        <input
          className="placeholder-italic placeholder-text-slate-400  bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 search-shadow  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Recipes..."
          type="text"
          name="search"
        />
      </label>
    </div>
  );
}
export default function MiddleSection() {
  return (
    <div className="flex justify-center flex-col ">
      {/* Searchbar component */}
      <div className="flex justify-center p-4 relative">
        <SearchBar />
      </div>
      <hr className="top-5 left-0 right-0" />

      {/* FILTERS */}
      <div className="border-b mb-2">
        <Cuisines />
      </div>
      <div className="filter-container border-b ">
        <div>
          <Intolerances />
        </div>
        <div>
          <h1 className="intolerance-title">Ingredients</h1>
          <div className="mt-4">
            <Ingredients />
          </div>
          <div>
            <ul className="grid grid-cols-3 justify-items-center mt-4">
              <li>Chicken</li>
              <li>Butter</li>
              <li>Apple</li>
            </ul>
          </div>
        </div>
        <div>
          <Diets />
        </div>
      </div>

      {/* CARDS  */}
      <div className="grid grid-cols-3 gap-4 p-4 mt-8">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}
