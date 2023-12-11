'use server';
import { v4 as uuidv4 } from 'uuid';

import { Fridge } from '../../../types/entities/fridge.entity';
import { apiPath } from '../route';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createNewFridge = async (userEmail: string) => {
  const path = apiPath.createNewFridge;

  const id = uuidv4();

  const newFridge: Fridge = {
    id,
    userEmail,
    ingredients: [],
  };
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFridge),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
  revalidatePath('/');
  redirect('/');
};

export const fetchFridgeData = async (
  userEmail: string
): Promise<Fridge | undefined> => {
  const path = apiPath.getItemsFromFridge + `?userEmail=${userEmail}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (data.length === 0) {
      return undefined;
    }

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const updateFridgeData = async (
  id: string,
  userEmail: string,
  ingredients: string[]
) => {
  const path = apiPath.updateFridge + '/' + id;
  try {
    const response = await fetch(path, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients, userEmail }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
  revalidatePath('/');
  redirect('/');
};

export const addIngredientToFridge = async (
  userEmail: string,
  ingredient: string
) => {
  const data = await fetchFridgeData(userEmail);
  if (data) {
    const { id } = data;
    const ingredients = data.ingredients;
    ingredients.push(ingredient);
    await updateFridgeData(id, userEmail, ingredients);
  }
};

export const removeIngredientFromFridge = async (
  userEmail: string,
  ingredient: string
) => {
  const data = await fetchFridgeData(userEmail);

  if (data) {
    const { id, ingredients } = data;

    const index = ingredients.indexOf(ingredient);

    ingredients.splice(index, 1);

    await updateFridgeData(id, userEmail, ingredients);
  }
};
