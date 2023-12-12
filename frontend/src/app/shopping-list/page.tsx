import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/auth";

import ShoppingListPage from "@/components/pages/ShoppingListPage";
import { fetchMyRecipeByEmail, fetchMyRecipeDetails } from "@/api/myRecipe/data";
import { fetchIngredientsToBuyByEmail } from "@/api/ingredientToBuy/data";
import { fetchFridgeData } from "@/api/fridge/data";

export default async function ShoppingList() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/");
  }
  const userEmail = session. user?.email || '';

  const fridge = await fetchFridgeData(userEmail);
  const ingredientsInFridge = fridge ? fridge.ingredients : [];

  const myRecipe = await fetchMyRecipeByEmail(userEmail);
  const myRecipeDetails = myRecipe === null || !myRecipe.recipeIds.length
    ? []
    : await fetchMyRecipeDetails(myRecipe.recipeIds);

  const ingredientsToBuyRecord = await fetchIngredientsToBuyByEmail(userEmail);
  const ingredientsToBuy = ingredientsToBuyRecord === null
    ? []
    : ingredientsToBuyRecord.ingredients;

  return (
    <ShoppingListPage
      myRecipeDetails={myRecipeDetails}
      ingredientsToBuy={ingredientsToBuy}
      ingredientsInFridge={ingredientsInFridge}
    />
  );
}
