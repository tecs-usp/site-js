import * as React from "react";
import Button from "@/components/home/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Componente separado para o conteúdo do card
const CarouselCard = ({
  title,
  title2,
  description,
  imageUrl,
}: {
  title: string;
  title2: string;
  description: string;
  imageUrl: string;
}) => (
  <Card>
    <CardContent
      className="flex flex-col h-screen items-center justify-center bg-tecs-primary border-0 p-0 m-0 transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <div className="bg-[#090c36] bg-opacity-50 h-screen w-screen flex flex-col items-center justify-center border-none pt-[6rem] p-0 m-0 text-left">
      <div className="flex flex-col items-start ml-[2rem] mr-[1.2rem] text-[1.5rem] font-thin md:max-w-[580px]">
        <h2 className="font-bold text-white text-[1.5rem]">{title}</h2>
        <h2 className="text-[2rem] mt-[-0.5rem] mb-4 text-white font-bold">{title2}</h2>
        <p className="text-white text-left text-[1rem]">{description}</p>
        <Button href="/sobre" className="my-8 text-tecs-textprimary bg-none bg-white hover:text-white w-[10rem]">
        SAIBA MAIS
        </Button>
      </div>
      </div>
    </CardContent>
  </Card>
);

export const CarouselDemo = () => {
  // Dados para os cards
  const cards = [
    {
      title: "UM GRUPO COM",
      title2: "RELEVÂNCIA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia gravida mi, pulvinar suscipit sem interdum vitae.",
      imageUrl: "/fotos/foto_1.png",
    },
    {
      title: "PORTAL",
      title2: "INDÍGENA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia gravida mi, pulvinar suscipit sem interdum vitae.",
      imageUrl: "/fotos/foto_2.png",
    },
    {
      title: "PROJETO",
      title2: "FUND. CASA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia gravida mi, pulvinar suscipit sem interdum vitae.",
      imageUrl: "/fotos/foto_3.png",
    },
    {
      title: "PROJETO",
      title2: "VESTIBULANDAS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia gravida mi, pulvinar suscipit sem interdum vitae.",
      imageUrl: "fotos/foto_5.png",
    },
  ];

  return (
    <div id="carrossel" className="flex flex-col min-h-screen w-full items-center justify-center overflow-x-hidden m-0 p-0">
      <Carousel className="bg-tecs-secondary h-screen w-screen border-0 p-0 m-0 overflow-hidden">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-0 m-0">
                <CarouselCard {...card} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
