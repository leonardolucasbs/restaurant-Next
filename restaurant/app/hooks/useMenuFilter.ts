import { useState } from "react";
import { definition } from "../types/enums/definition";
import { mockPlates } from "../service/plateData";

export const useMenuFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<definition | null>(
    null,
  );

  const filteredPlates =
    selectedCategory !== null
      ? mockPlates.filter((plate) => plate.definition === selectedCategory)
      : mockPlates;

  return {
    selectedCategory,
    setSelectedCategory,
    filteredPlates,
  };
};
