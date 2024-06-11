"use client";

import React from "react";
import { useRef, useState } from "react";

const Home: React.FC = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState<string>("");

  const manageSearch = () => {
    if (searchInput.current) {
      setSearch(searchInput.current.value);
    }
  };
  return (
    <div className="search-box">
      <input type="text" className="search-bar" placeholder="SYMBL" />
      <div
        className="search-button"
        onClick={() => {
          manageSearch();
        }}
      >
        Search
      </div>
    </div>
  );
};

export default Home;
