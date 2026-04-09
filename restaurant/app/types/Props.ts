import { definition } from "./enums/definition";
import type { Plate } from "./Plate";

export interface FilterButtonsProps {
  selectedCategory: definition | null;
  onCategoryChange: (category: definition | null) => void;
}

export interface PlateCardProps {
  plate: Plate;
}
