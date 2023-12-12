import React, { useState, useEffect } from 'react';
import { CuisinesFilter } from './Filters/CuisinesFilter';
import { IntolerancesFilter } from './Filters/IntolerancesFilter';
import { IngredientsFilter } from './Filters/IngredientsFilter';
import { DietsFilter } from './Filters/DietsFilter';
import { RecipeNameFilter } from './Filters/RecipeNameFilter';
import { RecipeCardsDisplay } from './RecipeCardsDisplay/RecipeCardsDisplay';
import { fetchRecipeData } from '@/api/recipe/data';
import { SearchParamsType } from '../../../../../types/commonType';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import { fetchFridgeData } from '@/api/fridge/data';

type Props = {
  searchParams: SearchParamsType;
};

export async function MiddleSection({ searchParams }: Props) {
  const recipes = await fetchRecipeData(searchParams);
  const session = await getServerSession(authOptions);

  const fridgeData =
    session &&
    session.user &&
    session.user.email &&
    (await fetchFridgeData(session.user.email));

  const ingredientsInFridge = fridgeData && fridgeData.ingredients;

  return (
    <div className="flex justify-center flex-col ">
      <RecipeNameFilter />
      <hr className="top-5 left-0 right-0" />
      <div className="border-b mb-2">
        <CuisinesFilter />
      </div>
      <div className="filter-container border-b ">
        <div>
          <IntolerancesFilter />
        </div>
        <IngredientsFilter ingredientsInFridge={ingredientsInFridge} />
        <div>
          <DietsFilter />
        </div>
      </div>
      {recipes ? <RecipeCardsDisplay recipes={recipes} /> : null}
    </div>
  );
}
