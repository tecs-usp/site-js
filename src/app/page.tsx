import { HeroSection } from "./hero-section";
import { NavBar } from "./nav-bar";
import { Header } from "@/components/home/header";
import { Presentation } from "@/components/home/presentation";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center h-[100vh]">
        <Header />
      <div className="flex flex-col justify-start items-center">
        <Presentation />
      </div>
    </main>
  );
}
