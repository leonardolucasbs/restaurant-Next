import { mockPlates } from "../service/plateData";

export default function Menu() {
  return (
    <article className="w-full min-h-screen p-4">
      <ul className="grid grid-cols-4 gap-4">
        {mockPlates.map((item) => (
          <li key={item.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
