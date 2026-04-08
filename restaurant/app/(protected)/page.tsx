import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex justify-center items-start pt-4">
        <h1 className="px-4 py-2 font-bold">Menu</h1>
        <Menu />
      </main>
    </div>
  );
}
