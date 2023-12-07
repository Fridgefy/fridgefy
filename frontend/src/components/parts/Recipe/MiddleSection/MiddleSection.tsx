import React from "react";
import { Input } from "@/components/ui/input";
import Cuisines from "./Filters/Cuisines";
import Intolerances from "./Filters/Intolerances";
import Diets from "./Filters/Diets";
import RecipeCard from "./RecipeCard";

// Change this searchbar with form element create action for it
function SearchBar() {
  return (
    <div className="relative">
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
      <Input
        type="text"
        placeholder="Search"
        className="pl-12 pr-4 focus:outline-none shadow-md"
      />
    </div>
  );
}

export default function MiddleSection() {
  return (
    <div className="flex justify-center flex-col ">
      {/* Searchbar component */}
      <div className="p-4 relative">
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
          <div>
            <h1 className="intolerance-title">Ingredients</h1>
            <div className="mt-4">
              <SearchBar />
            </div>
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
