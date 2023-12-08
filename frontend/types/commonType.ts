export type SearchParamsType = {
  query?: string;
  cuisine?: string;
  diet?: string;
  intolerances?: string;
  includeIngredients?: string;
};

export type RecipePageProps = {
  params: { id: string };
  searchParams?: SearchParamsType;
};