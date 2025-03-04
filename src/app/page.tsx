import { Header } from "@/components/home/header";
import { Presentation } from "@/components/home/presentation";
import { CarouselDemo } from "@/components/home/carousel/carousel";
import { Projects } from "@/components/home/projects";
import { Apoio } from "@/components/home/apoio";
import { Contato } from "@/components/home/contact";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center h-[100vh]">
        <Header />
      <div className="flex flex-col justify-start items-center w-full">
        <Presentation />
        <CarouselDemo />
        <Projects />
        <Apoio />
        <Contato />
        <Footer />
      </div>
    </main>
  );
}
