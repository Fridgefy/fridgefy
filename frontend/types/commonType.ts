export type SearchParamsType = {
  query?: string;
  cuisine?: string | string[];
  diet?: string | string[];
  intolerances?: string | string[];
  includeIngredients?: string;
};

export type RecipePageProps = {
  params: { id: string };
  searchParams?: SearchParamsType;
};
