import { v4 as uuidv4 } from "uuid";
import { apiPath } from "../route";
import { MyRecipe } from "../../../types/models";
import { RecipeDetail } from "../../../types/api";

const port = 3005;
const jsonServerBaseUrl = `http://localhost:${port}/`;

const handleError = (res: Response, message: string = "") => {
  if (!res.ok) throw new Error(message);
};

/**
 * Get MyRecipe by userEmail
 *
 * @param {string} userEmail
 * @return {Promise<MyRecipe>}
 */
const fetchMyRecipeByEmail = async (userEmail: string): Promise<MyRecipe | null> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes?userEmail=${userEmail}`;

  try {
    const res = await fetch(endpoint, { next: { tags: ["myRecipesByEmail"] } });
    handleError(res, "Failed to fetch user's recipe by email");

    // Since the data is not searched by id, Return type is: [MyRecipe,...]
    // so it needs to be confirmed that there's only one item in the array
    const list = await(res.json()) as MyRecipe[];
    if (list.length > 1) throw new Error("Found multiple records");
    if (!list.length) return null;

    return list[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchMyRecipeById = async (id: string): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const res = await fetch(endpoint, { next: { tags: ["myRecipesById"] } });
    handleError(res, "Failed to fetch user's recipe by id");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addMyRecipe = async ({ id, recipeId }: { id: string; recipeId: number; }): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const myRecipe = await fetchMyRecipeById(id);

    const reqBody: MyRecipe = { ...myRecipe, recipeIds: [...myRecipe.recipeIds, recipeId] };

    const res = await fetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(reqBody),
    });
    handleError(res, "Failed to update the record");

    return res.json();
  } catch(error) {
    console.error(error);
    throw error;
  }
};

const createMyRecipeRecord = async ({ userEmail, recipeId }: { userEmail: string; recipeId: number; }): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes`;

  const reqBody: MyRecipe = {
    id: uuidv4(),
    userEmail,
    recipeIds: [recipeId],
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  handleError(res, "Failed to create a record");

  return res.json();
};

const createMyRecipe = async ({ userEmail, recipeId }: { userEmail: string; recipeId: number; }): Promise<MyRecipe> => {
  try {
    const myRecipe = await fetchMyRecipeByEmail(userEmail);

    return myRecipe === null
      ? await createMyRecipe({ userEmail, recipeId })
      : await addMyRecipe({ id: myRecipe.id, recipeId });
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const removeMyRecipeById = async ({ id, recipeId }: { id: string; recipeId: number; }): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const myRecipe = await fetchMyRecipeById(id);

    const reqBody: MyRecipe = {
      ...myRecipe,
      recipeIds: myRecipe.recipeIds.filter(myRecipeId => myRecipeId !== recipeId),
    };

    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    handleError(res, "Failed to update the record");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get details by IDs(bulk)
const fetchMyRecipeByEmailDetails = async (recipeIds: number[]): Promise<RecipeDetail[]> => {
  //  https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429
  const endpoint = `${apiPath.getRecipeDetails}?${recipeIds.join(',')}`

  try {
    const res = await fetch(endpoint, { next: { tags: ["recipeDetails"] } });
    handleError(res, "Failed to recipe details");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};