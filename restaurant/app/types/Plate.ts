import { definition } from "./enums/definition";

export interface Plate {
  id: string;
  name: string;
  description: string;
  definition: definition;
}
