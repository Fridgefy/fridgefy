"use client";
import { useState } from "react";
import SearchBar from "../trial/SearchBar";
import SearchResults from "../trial/SearchResults";
import recipesData from "../../../db.json";

const YourPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }

    const ingredients = new Set<string>();
    recipesData.recipes.forEach((recipe) => {
      recipe.extendedIngredients.forEach((ingredient) => {
        if (ingredient.name.toLowerCase().includes(query.toLowerCase())) {
          ingredients.add(ingredient.name);
        }
      });
    });

    setSearchResults(Array.from(ingredients));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default YourPage;
