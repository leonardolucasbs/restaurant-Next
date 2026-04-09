import { definition } from "../types/enums/definition";

import { FilterButton } from "../types/FilterButton";

export const FILTER_BUTTONS: FilterButton[] = [
  { label: "Entradas", value: definition.ENTRADA },

  { label: "Pratos Principais", value: definition.PRINCIPAL },

  { label: "Sobremesas", value: definition.SOBREMESA },
];
