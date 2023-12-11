"use client";

import React, { useState, useEffect } from "react";
import { CuisinesFilter } from "./Filters/CuisinesFilter";
import { IntolerancesFilter } from "./Filters/IntolerancesFilter";
import { IngredientsFilter } from "./Filters/IngredientsFilter";
import { DietsFilter } from "./Filters/DietsFilter";
import { RecipeNameFilter } from "./Filters/RecipeNameFilter";
import { RecipeCardsDisplay } from "./RecipeCardsDisplay/RecipeCardsDisplay";
import { fetchRecipeData } from "@/api/recipe/data";
import { SearchParamsType } from "../../../../../types/commonType";
import { Recipe } from "../../../../../types/models";
type Props = {
  searchParams: SearchParamsType;
};

export function MiddleSection() {
  const [searchParams, setSearchParams] = useState<SearchParamsType>({});
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  const updateSearchParams = (newParams: Partial<SearchParamsType>) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      ...newParams,

      // Check if cuisine is an array and join it, otherwise, leave it as it is
      cuisine: Array.isArray(newParams.cuisine)
        ? newParams.cuisine.join(",")
        : newParams.cuisine,
    }));
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const recipeData = await fetchRecipeData(searchParams);
        setRecipes(recipeData || null);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setRecipes(null);
      }
    }

    fetchData();
  }, [searchParams]);

  return (
    <div className="flex justify-center flex-col ">
      <RecipeNameFilter />
      <hr className="top-5 left-0 right-0" />
      <div className="border-b mb-2">
        <CuisinesFilter
          onCuisineChange={(selectedCuisines) =>
            updateSearchParams({ cuisine: selectedCuisines })
          }
        />
      </div>
      <div className="filter-container border-b ">
        <div>
          <IntolerancesFilter />
        </div>
        <IngredientsFilter />
        <div>
          <DietsFilter />
        </div>
      </div>

      {recipes ? <RecipeCardsDisplay recipes={recipes} /> : null}
    </div>
  );
}
