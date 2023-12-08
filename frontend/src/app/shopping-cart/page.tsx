"use client";

import { useState } from "react";
import { Icons } from "@/components/icons/Icons";
import SideBarListItem from "@/components/parts/SideBar/SideBarListItem";
import SideBarInput from "@/components/parts/SideBar/SideBarInput";
import RecipeAccordion from "@/components/parts/ShoppingList/RecipeAccordion";
import SideBarTitle from "@/components/parts/SideBar/SideBarTitle";

const tmpItems = [
  { name: "item-1" },
  { name: "item-2" },
  { name: "item-3" },
  { name: "item-4" },
  { name: "item-5" },
  { name: "item-6" },
  { name: "item-7" },
  { name: "item-8" },
  { name: "item-9" },
  { name: "item-10" },
  { name: "item-11" },
  { name: "item-12" },
  { name: "item-13" },
  { name: "item-14" },
  { name: "item-15" },
  { name: "item-16" },
];

const tmpBuyItems = [
  { name: "buy-1" },
  { name: "buy-2" },
  { name: "buy-3" },
  { name: "buy-4" },
  { name: "buy-5" },
  { name: "buy-6" },
  { name: "buy-7" },
  { name: "buy-8" },
  { name: "buy-9" },
  { name: "buy-10" },
];

const tempRecipes = [
  {
    id: 1,
    name: "Recipe 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 2,
    name: "Recipe 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 3,
    name: "Recipe 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 4,
    name: "Recipe 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 5,
    name: "Recipe 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 6,
    name: "Recipe 6",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 7,
    name: "Recipe 7",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 8,
    name: "Recipe 8",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 9,
    name: "Recipe 9",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
  {
    id: 10,
    name: "Recipe 10",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/placeholder.png",
  },
];

export default function ShoppingCart() {
  const [fridgeItems, setFridgeItems] = useState<typeof tmpItems[number][]>(tmpItems);
  const [ingredients, setIngredients] = useState<typeof tmpBuyItems[number][]>(tmpBuyItems);
  const [recipes, setRecipes] = useState<typeof tempRecipes[number][]>(tempRecipes);

  // TODO: temporary workaround
  const handleFridgeItemOnClick = (name: string) => {
    const item = fridgeItems.find(item => item.name === name);
    if (!item) return;

    const newFridgeItems = fridgeItems.filter(item => item.name !== name);
    const newIngredients = [...ingredients, item];
    setFridgeItems(newFridgeItems);
    setIngredients(newIngredients);
  };

  // TODO: temporary workaround
  const handleIngredientOnClick = (name: string)=> {
    const item = ingredients.find(item => item.name === name);
    if (!item) return;

    const newFridgeItems = [...fridgeItems, item];
    const newIngredients = ingredients.filter(item => item.name !== name);
    setFridgeItems(newFridgeItems);
    setIngredients(newIngredients);
  };

  // TODO: temporary workaround
  const removeRecipe = (id: number) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    // TODO: remove ingredients that belongs to the recipe(should be related with id?)
  };

  // TODO: temporary workaround
  const addToFridge = (name: string) => {
    setFridgeItems([...fridgeItems, { name }]);
    setIngredients(ingredients.filter(ingredient => ingredient.name !== name));
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex overflow-y-hidden">
      {/* left sidebar */}
      <div className="w-1/4 flex flex-col items-center border-r bg-popover p-4 overflow-y-auto">
        <SideBarTitle title="My Fridge" />
        <SideBarInput />
        <ul className="w-full p-6">
          {fridgeItems.map(item =>
            <SideBarListItem
              key={item.name}
              label={item.name}
              buttonLabel={<Icons.plus className="w-4 h-4 text-black" strokeWidth={4}/>}
              buttonOnClick={() => handleFridgeItemOnClick(item.name)}
            />
          )}
        </ul>
      </div>

      {/* main contents */}
      <div className="w-1/2 px-8 py-12 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          {recipes.map(recipe =>
            <RecipeAccordion
              key={recipe.name}
              title={recipe.name}
              description={recipe.description}
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
          {ingredients.map(item =>
            <SideBarListItem
              key={item.name}
              label={item.name}
              buttonLabel={<Icons.plus className="w-4 h-4 text-black" strokeWidth={4}/>}
              buttonOnClick={() => handleIngredientOnClick(item.name)}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
