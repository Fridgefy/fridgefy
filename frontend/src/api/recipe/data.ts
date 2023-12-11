import { SearchParamsType } from "../../../types/commonType";
import { Recipe } from "../../../types/models";
import { apiPath, baseUrl } from "../route";

export const fetchRecipeData = async (
  searchParams: SearchParamsType = {}
): Promise<Recipe[] | undefined> => {
  let path = apiPath.getRecipe;
  const searchParamsKeys = Object.keys(searchParams);
  const searchParamsArray = Object.entries(searchParams);
  for (let i = 0; i < searchParamsKeys.length; i++) {
    const key = searchParamsKeys[i];
    const value = searchParamsArray[i][1];
    if (value) {
      path += `&${key}=${value}`;
    }
  }
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// http://localhost:3000/produtos?name_like=^(a).* start with a
