"use client";

import FilterButtons from "./FilterButtons";
import PlateCard from "./PlateCard";
import { useMenuFilter } from "../hooks/useMenuFilter";

export default function Menu() {
  const { selectedCategory, setSelectedCategory, filteredPlates } =
    useMenuFilter();

  return (
    <article className="w-full min-h-screen p-4">
      <FilterButtons
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ul className="grid grid-cols-4 gap-4">
        {filteredPlates.map((plate) => (
          <PlateCard key={plate.id} plate={plate} />
        ))}
      </ul>
    </article>
  );
}
