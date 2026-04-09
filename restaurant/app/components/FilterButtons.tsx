import { FILTER_BUTTONS } from "../constants/filterButtons";
import { FilterButtonsProps } from "../types/Props";

export default function FilterButtons({
  selectedCategory,
  onCategoryChange,
}: FilterButtonsProps) {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
          selectedCategory === null
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Mostrar Todos
      </button>

      {FILTER_BUTTONS.map((btn) => (
        <button
          key={btn.value}
          onClick={() => onCategoryChange(btn.value)}
          className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
            selectedCategory === btn.value
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
