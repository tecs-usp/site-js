import * as React from "react";
import Button from "@/components/home/button"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { title } from "process";



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
}) => {
    return (
        <Card>
            <CardContent
                className="flex flex-col h-screen  items-center justify-center bg-tecs-primary border-0 p-0 m-0"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-[#090c36] bg-opacity-50 h-screen w-screen flex flex-col items-center justify-center border-none pt-[2rem] p-0 m-0 text-left">
                    <div className="flex flex-col items-start ml-[3rem] mr-[1.2rem] text-[1.5rem] font-thin">
                        <h2 className="font-bold text-white text-[2rem]">
                            {title}
                        </h2>
                        <h2 className="text-[2.5rem] mt-[-0.5rem] mb-4 text-white font-bold">
                            {title2}
                        </h2>
                        <p className="text-white text-left text-[1.2rem]">{description}</p>
                        <Button href="/sobre" className="my-8 text-tecs-textprimary bg-none bg-white hover:text-white w-[10rem]">SAIBA MAIS</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

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
      title: "Segundo Slide",
      title2: "Segundo Slide",
      description: "Algo ainda mais interessante no segundo slide.",
      imageUrl: "https://via.placeholder.com/300x300?text=Slide+2",
    },
    {
      title: "Terceiro Slide",
        title2: "Terceiro Slide",
      description: "Você vai amar o que temos no terceiro slide.",
      imageUrl: "https://via.placeholder.com/300x300?text=Slide+3",
    },
    {
      title: "Quarto Slide",
        title2: "Quarto Slide",
      description: "Uma surpresa no quarto slide.",
      imageUrl: "https://via.placeholder.com/300x300?text=Slide+4",
    },
    {
      title: "Quinto Slide",
        title2: "Quinto Slide",
      description: "O melhor para o final, no quinto slide!",
      imageUrl: "https://via.placeholder.com/300x300?text=Slide+5",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-[100%] bg-pink-200 items-center justify-center overflow-x-hidden m-0 p-0">
      <Carousel className="bg-tecs-secondary h-screen w-screen border-0 p-0 m-0">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-0 m-0">
                <CarouselCard
                  title={card.title}
                  title2={card.title2}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
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
