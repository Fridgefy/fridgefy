'use server';

import { apiPath } from '../route';
import { MyRecipe } from '../../../types/models';
import { RecipeDetail } from '../../../types/api';

const port = 3005;
const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const jsonServerBaseUrl = `http://localhost:${port}/`;

const handleError = (res: Response, message: string = '') => {
  if (!res.ok) throw new Error(message);
};

/**
 * Get MyRecipe by userEmail
 *
 * @param {string} userEmail
 * @return {Promise<MyRecipe>}
 */
export const fetchMyRecipeByEmail = async (
  userEmail: string
): Promise<MyRecipe | null> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes?userEmail=${userEmail}`;

  try {
    const res = await fetch(endpoint, { cache: 'no-store' });
    handleError(res, "Failed to fetch user's recipe by email");

    // Since the data is not searched by id, Return type is: [MyRecipe,...]
    // so it needs to be confirmed that there's only one item in the array
    const list = (await res.json()) as MyRecipe[];
    if (list.length > 1) throw new Error('Found multiple records');
    if (!list.length) return null;

    return list[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchMyRecipeById = async (id: number): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const res = await fetch(endpoint, { cache: 'no-store' });
    handleError(res, "Failed to fetch user's recipe by id");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addMyRecipe = async ({
  id,
  recipeId,
}: {
  id: number;
  recipeId: number;
}): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const myRecipe = await fetchMyRecipeById(id);

    const reqBody: MyRecipe = {
      ...myRecipe,
      recipeIds: [...myRecipe.recipeIds, recipeId],
    };

    console.log('reqBody', reqBody);

    const res = await fetch(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(reqBody),
    });
    handleError(res, 'Failed to update the record');

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createMyRecipeRecord = async ({
  userEmail,
  recipeId,
}: {
  userEmail: string;
  recipeId: number;
}): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes`;

  const reqBody: Omit<MyRecipe, 'id'> = {
    userEmail,
    recipeIds: [recipeId],
  };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    handleError(res, 'Failed to create a record');

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const createMyRecipe = async ({
  userEmail,
  recipeId,
}: {
  userEmail: string;
  recipeId: number;
}): Promise<MyRecipe> => {
  try {
    const myRecipe = await fetchMyRecipeByEmail(userEmail);

    return myRecipe === null
      ? await createMyRecipeRecord({ userEmail, recipeId })
      : await addMyRecipe({ id: myRecipe.id, recipeId });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const removeMyRecipeByEmail = async ({
  userEmail,
  recipeId,
}: {
  userEmail: string;
  recipeId: number;
}): Promise<MyRecipe> => {
  try {
    const myRecipe = await fetchMyRecipeByEmail(userEmail);
    if (myRecipe === null) {
      throw new Error('Record not found');
    }

    const endpoint = `${jsonServerBaseUrl}my-recipes/${myRecipe.id}`;

    const reqBody: MyRecipe = {
      ...myRecipe,
      recipeIds: myRecipe.recipeIds.filter(
        (myRecipeId) => myRecipeId !== recipeId
      ),
    };

    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    handleError(res, 'Failed to update the record');

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get details by IDs(bulk)
export const fetchMyRecipeDetails = async (
  recipeIds: number[]
): Promise<RecipeDetail[]> => {
  // https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429
  const endpoint = `${apiPath.getRecipeDetails}&ids=${recipeIds.join(',')}`;

  try {
    const res = await fetch(endpoint, { next: { tags: ['recipeDetails'] } });
    handleError(res, 'Failed to fetch recipe details');

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
