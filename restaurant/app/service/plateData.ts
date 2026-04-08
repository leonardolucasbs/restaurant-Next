import type { Plate } from "../types/Plate";
import { definition } from "../types/enums/definition";

export const mockPlates: Plate[] = [
  {
    id: "1",
    name: "Bruschetta ao Tomate",
    description: "Pão tostado com tomate fresco, alho e azeite de oliva",
    definition: definition.entrance,
  },
  {
    id: "2",
    name: "Sopa de Cebola Francesa",
    description: "Sopa tradicional coberta com queijo derretido",
    definition: definition.entrance,
  },
  {
    id: "3",
    name: "Camarão ao Alho",
    description: "Camarões salteados em azeite com alho e limão",
    definition: definition.entrance,
  },
  {
    id: "4",
    name: "Risoto de Cogumelos",
    description: "Risoto cremoso com cogumelos frescos e parmesão",
    definition: definition.main,
  },
  {
    id: "5",
    name: "Bife à Milanesa",
    description: "Carne empanada servida com batata frita e contorno",
    definition: definition.main,
  },
  {
    id: "6",
    name: "Salmão Grelhado",
    description: "Filé de salmão grelhado com ervas finas e legumes",
    definition: definition.main,
  },
  {
    id: "7",
    name: "Frango à Parmegiana",
    description: "Peito de frango empanado com molho de tomate e queijo",
    definition: definition.main,
  },
  {
    id: "8",
    name: "Mousse de Chocolate",
    description: "Mousse aerada de chocolate belga com calda de framboesa",
    definition: definition.dessert,
  },
  {
    id: "9",
    name: "Tiramisú Clássico",
    description: "Doce italiano camadas de biscoito, mascarpone e cacau",
    definition: definition.dessert,
  },
  {
    id: "10",
    name: "Sorvete Artesanal",
    description: "Sorvete feito na casa em sabores diversos",
    definition: definition.dessert,
  },
];
