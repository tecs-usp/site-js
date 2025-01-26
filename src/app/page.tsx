import { HeroSection } from "./hero-section";
import { NavBar } from "./nav-bar";
import { Header } from "@/components/home/header";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      {/* <NavBar /> */}
      <HeroSection />
    </div>
  );
}
