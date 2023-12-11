const port = 3005;
const apiKey = process.env.SPOONACULAR_API_KEY;
const jsonServerBaseUrl = `http://localhost:${port}/`;

type IngredientsToBuy = {
  id: number
  userEmail: string
  ingredients: string[]
};

export const fetchIngredientsToBuyByEmail = async (userEmail: string): Promise<IngredientsToBuy | null> => {
  const endpoint = `${jsonServerBaseUrl}ingredients-to-buy?userEmail=${userEmail}`;

  try {
    const res = await fetch(endpoint, { next: { tags: ["ingredientsToBuy"] } });
    if (!res.ok) throw new Error("Failed to fetch ingredients to buy");

    const list = await(res.json()) as IngredientsToBuy[];
    if (list.length > 1) throw new Error("Found multiple records");
    if (!list.length) return null;

    return list[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchIngredientsToBuyById = async (id: number): Promise<IngredientsToBuy> => {
  const endpoint = `${jsonServerBaseUrl}ingredients-to-buy/${id}`;

  try {
    const res = await fetch(endpoint, { next: { tags: ["ingredientsToBuyById"] } });
    if (!res.ok) throw new Error("Failed to fetch ingredients to buy");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createIngredientToBuyRecord = async ({ userEmail, ingredientName }: { userEmail: string; ingredientName: string; }): Promise<IngredientsToBuy> => {
  const endpoint = `${jsonServerBaseUrl}ingredients-to-buy`;

  const reqBody: Omit<IngredientsToBuy, "id"> = {
    userEmail,
    ingredients: [ingredientName]
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    if (!res.ok) throw new Error("Failed to create ingredients to buy");

    return res.json();
  } catch (error) {
    throw error;
  }
};

const createIngredientsToBuy = async ({ userEmail, ingredientName }: { userEmail: string; ingredientName: string }): Promise<IngredientsToBuy> => {
  const ingredientsToBuy = await fetchIngredientsToBuyByEmail(userEmail);

  try {
    if (ingredientsToBuy === null) {
      return await createIngredientToBuyRecord({ userEmail, ingredientName });
    }

    const endpoint = `${jsonServerBaseUrl}ingredients-to-buy/${ingredientsToBuy.id}`;

    const reqBody: IngredientsToBuy = {
      id: ingredientsToBuy.id,
      userEmail: userEmail,
      ingredients: [...ingredientsToBuy.ingredients, ingredientName],
    };

    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    if (!res.ok) throw new Error("Failed to update ingredients to buy");

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }

};
