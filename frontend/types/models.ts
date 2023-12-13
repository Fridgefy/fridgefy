export type Ingredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
};

export type Recipe = {
  id: number;
  cuisines: string[];
  intolerances: string[];
  title: string;
  diets: string[];
  image: string;
  ingredients: Ingredient[];
};

export const sampleRecipes: Recipe[] = [
  {
    id: 1,
    cuisines: ['American'],
    intolerances: ['Gluten'],
    title: 'Chicken Parmesan',
    diets: ['Ketogenic'],
    image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    ingredients: [
      {
        id: 1,
        aisle: 'Pasta and Rice',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/spaghetti.jpg',
        consistency: 'solid',
        name: 'spaghetti',
        nameClean: 'spaghetti',
        original: '1 lb spaghetti',
        originalName: 'spaghetti',
        amount: 1,
        unit: 'lb',
        meta: [],
        measures: {
          us: {
            amount: 1,
            unitShort: 'lb',
            unitLong: 'pound',
          },
          metric: {
            amount: 453.592,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
      {
        id: 2,
        aisle: 'Spices and Seasonings',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/seasoning.png',
        consistency: 'solid',
        name: 'salt and pepper',
        nameClean: 'salt and pepper',
        original: 'Salt and pepper to taste',
        originalName: 'Salt and pepper to taste',
        amount: 1,
        unit: 'servings',
        meta: ['to taste'],
        measures: {
          us: {
            amount: 1,
            unitShort: 'serving',
            unitLong: 'serving',
          },
          metric: {
            amount: 1,
            unitShort: 'serving',
            unitLong: 'serving',
          },
        },
      },
    ],
  },
  {
    id: 2,
    cuisines: ['American'],
    intolerances: ['Gluten'],
    title: 'Chicken Parmesan',
    diets: ['Ketogenic'],
    image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    ingredients: [],
  },
];

/* My Recipe */
export type MyRecipe = {
  id: number
  userEmail: string
  recipeIds: number[]
};
