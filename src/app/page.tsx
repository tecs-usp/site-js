import { HeroSection } from "./hero-section";
import { NavBar } from "./nav-bar";
import { Header } from "@/components/home/header";
import { Presentation } from "@/components/home/presentation";
import { CarouselDemo } from "@/components/home/carousel/carousel";
// import Carousel from "@/components/home/carousel/card";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center h-[100vh]">
        <Header />
      <div className="flex flex-col justify-start items-center w-full">
        <Presentation />
        {/* <Carousel /> */}
        <CarouselDemo />
      </div>
    </main>
  );
}
