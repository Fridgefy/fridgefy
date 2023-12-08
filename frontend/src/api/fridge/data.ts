import { Fridge } from '../../../types/entities/fridge.entity';
import { apiPath } from '../route';

export const fetchFridgeData = async (
  userEmail: string
): Promise<Fridge | undefined> => {
  const path = apiPath.getItemsFromFridge + `?userEmail=${userEmail}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const updateFridgeData = async (userEmail: string, ingredients: string[]) => {
  const path = apiPath.postItemToFridge + `?userEmail=${userEmail}`;
  try {
    const response = await fetch(path, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail, ingredients }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addIngredientToFridge = async (
  userEmail: string,
  ingredient: string
) => {
  const data = await fetchFridgeData(userEmail);
  if (data) {
    const ingredients = data.ingredients;
    ingredients.push(ingredient);
    await updateFridgeData(userEmail, ingredients);
  }
};

export const removeIngredientFromFridge = async (
  userEmail: string,
  ingredient: string
) => {
  const data = await fetchFridgeData(userEmail);
  if (data) {
    const ingredients = data.ingredients;
    const index = ingredients.indexOf(ingredient);
    ingredients.splice(index, 1);
    await updateFridgeData(userEmail, ingredients);
  }
};
