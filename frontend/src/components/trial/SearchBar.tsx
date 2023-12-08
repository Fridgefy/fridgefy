// SearchBar.tsx
import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInput(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder="Search ingredients..."
    />
  );
};

export default SearchBar;
