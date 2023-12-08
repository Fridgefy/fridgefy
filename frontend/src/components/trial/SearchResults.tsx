// SearchResults.tsx
import React from "react";

interface Props {
  results: string[];
}

const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <ul>
      {results.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
