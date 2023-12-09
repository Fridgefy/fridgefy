export const apiKey = process.env.SPOONACULAR_API_KEY;
export const baseUrl = 'https://api.spoonacular.com/';

const recipeBaseURL = baseUrl + 'recipes/';

const baseURLParams = `?apiKey=${apiKey}`;

export const apiPath = {
  getRecipe: recipeBaseURL + 'complexSearch' + baseURLParams,
  getRecipeDetails: recipeBaseURL + 'informationBulk' + baseURLParams,
};
