import Image from "next/image";
import { Navigation } from "./components/Navigation";

const navItems = ["Creator", "Features", "Pricing", "Resources"];

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Navigation navItems={navItems} />
    </main>
  );
}
