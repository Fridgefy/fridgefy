import { apiPath } from "../route";
import { MyRecipe } from "../../../types/models";
import { RecipeDetail } from "../../../types/api";

const port = 3005;
const jsonServerBaseUrl = `http://localhost:${port}/`;

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

    // Since the data is not searched by id, Return type is: [MyRecipe,...]
    // so it needs to be confirmed that there's only one item in the array
    const list = await(res.json()) as MyRecipe[];
    if (list.length > 1) throw new Error();
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
    const res = await fetch(endpoint, { next: { tags: ["myRecipesById"] } });
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createMyRecipe = async (
  { userEmail, recipeId }: { userEmail: string; recipeId: number; }
): Promise<MyRecipe> => {

  try {
    const myRecipe = await fetchMyRecipeByEmail(userEmail);

    if (myRecipe === null) {
      const endpoint = `${jsonServerBaseUrl}my-recipes`;

      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ userEmail, recipeIds: [recipeId] }),
      });

      return res.json();
    }

    const endpoint = `${jsonServerBaseUrl}my-recipes/${myRecipe.id}`;

    const res = await fetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(
        {...myRecipe, recipeIds: [...myRecipe.recipeIds, recipeId]}
      ),
    })


    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }

};

const addMyRecipe = async ({ id, recipeId }: { id: number; recipeId: number; }) => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const myRecipe = await fetchMyRecipeById(id);

    const res = await fetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(
        {...myRecipe, recipeIds: [...myRecipe.recipeIds, recipeId]}
      ),
    })

    return res.json();
  } catch(error) {
    console.error(error);
    throw error;
  }
};


const removeMyRecipeById = async (
  { id, recipeId }: { id: number; recipeId: number; }
): Promise<MyRecipe> => {
  const endpoint = `${jsonServerBaseUrl}my-recipes/${id}`;

  try {
    const myRecipe = await fetchMyRecipeById(id);

    const reqBody: MyRecipe = {
      ...myRecipe,
      recipeIds: myRecipe.recipeIds.filter(myRecipeId => myRecipeId !== recipeId),
    };

    const res = await fetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(reqBody),
    });

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// TODO: get details by IDs(bulk)
const fetchMyRecipeByEmailDetails = async (recipeIds: number[]): Promise<RecipeDetail[]> => {
  //  https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429
  const endpoint = `${apiPath.getRecipeDetails}?${recipeIds.join(',')}`

  try {
    const res = await fetch(endpoint, { next: { tags: ["recipeDetails"] } });
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};