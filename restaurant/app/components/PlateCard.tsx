import { PlateCardProps } from "../types/Props";

export default function PlateCard({ plate }: PlateCardProps) {
  return (
    <li className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="mb-2"></div>

      <h2 className="text-xl font-bold mb-2">{plate.name}</h2>

      <p className="text-sm text-gray-600">{plate.description}</p>
    </li>
  );
}
