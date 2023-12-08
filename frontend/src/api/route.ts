export const apiKey = process.env.SPOONACULAR_API_KEY;
export const baseUrl = 'https://api.spoonacular.com/';

const recipeBaseURL = baseUrl + 'recipes/';

const jsonServerBaseURL = 'http://localhost:3005/';

const fridge = 'fridge';

const baseURLParams = `?apiKey=${apiKey}`;

export const apiPath = {
  getRecipe: recipeBaseURL + 'complexSearch' + baseURLParams,
  getItemsFromFridge: jsonServerBaseURL + fridge,
  postItemToFridge: jsonServerBaseURL + fridge,
};
