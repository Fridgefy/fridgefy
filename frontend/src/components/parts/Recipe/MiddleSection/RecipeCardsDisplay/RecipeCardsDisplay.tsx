import React from "react";
import { Recipe } from "../../../../../../types/models";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipes: Recipe[];
};

export const RecipeCardsDisplay = ({ recipes }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 mt-8">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};
