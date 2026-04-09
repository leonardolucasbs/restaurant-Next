import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-4">
        <Menu />
      </main>
    </div>
  );
}
