// Importa o enum definition que contém as categorias de pratos
import { definition } from "../types/enums/definition";

export const getCategoryLabel = (category: definition): string => {
  switch (category) {
    case definition.ENTRADA:
      return "Entrada";

    case definition.PRINCIPAL:
      return "Prato Principal";

    case definition.SOBREMESA:
      return "Sobremesa";

    default:
      return "";
  }
};
