import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/auth";


import ShoppingListPage from "@/components/pages/ShoppingListPage";
import { fetchMyRecipeByEmail, fetchMyRecipeDetails } from "@/api/myRecipe/data";

export default async function ShoppingList() {
  const session = await getServerSession(authOptions);
  console.log('session:', session);

  // Session value
  // session: {
  //   user: {
  //     name: '青山晃也',
  //     email: 'aoyama.ko0920@gmail.com',
  //     image: 'https://lh3.googleusercontent.com/a/ACg8ocKtIezSkZzTsRW7o3LPfOTydNTffcqkMdMPXLZ1W8DM=s96-c'
  //   }
  // }
  if (session === null) {
    // TODO: Confirm if the path is correct
    redirect("/");
  }

  // TODO: Get fridge data
  // TODO: Get MyRecipe
  // TODO: Get MyRecipe details

  const myRecipe = await fetchMyRecipeByEmail(session.user?.email || '');
  const myRecipeDetails = myRecipe === null || !myRecipe.recipeIds.length
    ? []
    : await fetchMyRecipeDetails(myRecipe.recipeIds);

  // Fridge = {
  //   userEmail: string;
  //   ingredients: string[];
  // };

  // TODO: Remove duplicates and keep only unique items(by ingredient ID)
  // TODO: Then convert them into fridge items (compare name -> if name in Fridge, skip, else { uuid: string, name: string })

  // let itemsToBuy: { uuid: string; name: string }[] = [];

  // TODO:  if !myRecipeDetails.length return JSX here


  const allExtendedIngredients = myRecipeDetails.flatMap(recipe => recipe.extendedIngredients);

  // Filter out duplicates
  const uniqueIngredientIds = new Set<number>();
  const uniqueIngredients = allExtendedIngredients.filter(ingredient =>
    !uniqueIngredientIds.has(ingredient.id) ? uniqueIngredientIds.add(ingredient.id) : false
  ).map(ingredient => ({ id: ingredient.id, name: ingredient.name }));

  // TODO: need to save items to buy to ItemsToBuy table
  

  return (
    <ShoppingListPage myRecipeDetails={myRecipeDetails} />
  );
}
