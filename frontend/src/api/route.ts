export const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
export const baseUrl = 'https://api.spoonacular.com/';

const recipeBaseURL = baseUrl + 'recipes/';

const jsonServerBaseURL = 'http://localhost:3005/';

const fridge = 'fridge';

const baseURLParams = `?apiKey=${apiKey}`;

export const apiPath = {
  getRecipe: recipeBaseURL + 'complexSearch' + baseURLParams,
  createNewFridge: jsonServerBaseURL + fridge,
  getItemsFromFridge: jsonServerBaseURL + fridge,
  updateFridge: jsonServerBaseURL + fridge,
};
