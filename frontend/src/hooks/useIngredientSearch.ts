// useIngredientSearch.ts
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
const useIngredientSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const ingredients = useSelector((state: RootState) => state.ingredients.list);
  const [filteredIngredients, setFilteredIngredients] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = ingredients.filter((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredIngredients(filtered);
    } else {
      setFilteredIngredients([]);
    }
  }, [searchTerm, ingredients]);

  return { searchTerm, setSearchTerm, filteredIngredients };
};

export default useIngredientSearch;
