"use client";

import React, { useState } from "react";

interface SearchFilterProps {
  onSearch: (searchTerm: string) => void;
  onMinPriceChange: (minPrice: string) => void;
  onMaxPriceChange: (maxPrice: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
    onMinPriceChange(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
    onMaxPriceChange(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded-md"
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="p-2 border rounded-md"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchFilter;
