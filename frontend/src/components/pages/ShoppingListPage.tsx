"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Icons } from "@/components/icons/Icons";
import SideBarListItem from "@/components/parts/SideBar/SideBarListItem";
import SideBarInput from "@/components/parts/SideBar/SideBarInput";
import RecipeAccordion from "@/components/parts/ShoppingList/RecipeAccordion";
import SideBarTitle from "@/components/parts/SideBar/SideBarTitle";
import { RecipeDetail } from "../../../types/api";
import { createIngredientsToBuy, removeIngredientsToBuy, removeIngredientsToBuyBulk } from "@/api/ingredientToBuy/data";
import { revalidatePath, revalidateTag } from "next/cache";
import { addIngredientToFridge, removeIngredientFromFridge } from "@/api/fridge/data";
import { removeMyRecipeByEmail } from "@/api/myRecipe/data";

type Props = {
  myRecipeDetails: RecipeDetail[]
  ingredientsToBuy: string[]
  ingredientsInFridge: string[]
};

export default function ShoppingListPage({ myRecipeDetails, ingredientsToBuy, ingredientsInFridge }: Props) {
  const session = useSession();
  const userEmail = session.data?.user?.email || '';

  const router = useRouter();

  const handleFridgeItemOnClick = async (ingredientName: string) => {
    await removeIngredientFromFridge(userEmail, ingredientName);

    if (ingredientsToBuy.includes(ingredientName)) return;

    await createIngredientsToBuy({ userEmail, ingredientName });
    router.refresh();
  };

  const addToFridge = async (ingredientName: string) => {
    await addIngredientToFridge(userEmail, ingredientName);
    router.refresh();
  };

  const handleIngredientOnClick = async (ingredientName: string)=> {
    await removeIngredientsToBuy({ userEmail, ingredientName });

    if (ingredientsInFridge.includes(ingredientName)) return;

    await addToFridge(ingredientName);
    router.refresh();
  };

  const removeRecipe = async (recipeId: number) => {

    await removeMyRecipeByEmail({ userEmail, recipeId });

    const myRecipe = myRecipeDetails.find(recipe => recipe.id === recipeId);
    const ingredientsToRemove = myRecipe!.extendedIngredients.map(ingredientDetail => ingredientDetail.name);

    await removeIngredientsToBuyBulk({ userEmail, ingredientNames: ingredientsToRemove });

    router.refresh();
  };

  const inputButtonOnClick = async (ingredientName: string) => {
    await addToFridge(ingredientName);
    router.refresh();
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex overflow-y-hidden">
      {/* left sidebar */}
      <div className="w-1/4 flex flex-col items-center border-r bg-popover p-4 overflow-y-auto">
        <SideBarTitle title="My Fridge" />
        <SideBarInput buttonOnClick={inputButtonOnClick} />
        <ul className="w-full p-6">
          {ingredientsInFridge.map(ingredientName =>
            <SideBarListItem
              key={ingredientName}
              label={ingredientName}
              buttonLabel={<Icons.plus className="w-4 h-4 text-black" strokeWidth={4}/>}
              buttonOnClick={() => handleFridgeItemOnClick(ingredientName)}
            />
          )}
        </ul>
      </div>

      {/* main contents */}
      <div className="w-1/2 px-8 py-12 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {myRecipeDetails.map(recipe =>
            <RecipeAccordion
              key={recipe.id}
              title={recipe.title}
              description={recipe.summary}
              imageUrl={recipe.image}
              handleDelete={() => removeRecipe(recipe.id)}
            />
          )}
        </div>
      </div>

      {/* right sidebar */}
      <div className="w-1/4 flex flex-col items-center border-l bg-popover p-4 overflow-y-auto">
        <SideBarTitle title="Items to Buy" />
        <ul className="w-full p-6">
          {ingredientsToBuy.map(ingredientName =>
            <SideBarListItem
              key={ingredientName}
              label={ingredientName}
              buttonLabel={<Icons.plus className="w-4 h-4 text-black" strokeWidth={4}/>}
              buttonOnClick={() => handleIngredientOnClick(ingredientName)}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
