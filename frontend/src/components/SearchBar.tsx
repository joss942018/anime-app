import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

type SearchBarProps = {
  onSearch: (query: string) => void; // Note: This is a good way to type functions and to separate responsibilities ✅
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["search-bar"]}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an anime..."
        className={styles["search-input"]} // Note: This is a good way to style components, but the naming convention is not good ❌ (should be searchInput to keep consistency with the rest of the code)
      />
      <button type="submit" className={styles["search-button"]}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
