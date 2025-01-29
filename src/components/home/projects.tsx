import Button from "./button";

const ProjectCard = () => (
    <div className="max-w-[20rem] w-full min-h-[25rem] bg-white rounded-[1rem] mt-[2rem] flex flex-col justify-center items-start px-12">
        <img src="projetos/lgbtecs_logo.svg" alt="LGBTecs Logo" className="max-w-[10rem]" />
        <p className="pt-6 text-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia gravida mi, pulvinar suscipit sem interdum vitae. Cras pellentesque ut elit vel porta. Etiam ut rutrum felis.
        </p>
        <Button href="/sobre" className="mt-4 md:mt-8 text-white w-[8rem] bg-none bg-tecs-alternative hover:bg-tecs-alternative">SAIBA MAIS</Button>
    </div>
);

const ProjectHeader = () => (
    <div className="w-[8rem] flex flex-col items-center justify-center text-center text-white font-bold text-[1.5rem]">
        <h2><span className="text-[2.1rem]">PROJETOS</span> ATUAIS</h2>
    </div>
);

const ProjectFooter = () => (
    <div className="max-w-[20rem] w-full h-[4rem] bg-gradient-to-t from-white to-transparent rounded-b-[1rem] mt-[2rem] flex flex-col justify-center items-center transform rotate-180 opacity-60" />
);

export const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full pt-[80px] bg-gradient-to-r from-tecs-secondary to-tecs-primary overflow-hidden px-6">
            <ProjectHeader />
            <div className="transition-transform duration-300 hover:transform hover:rotate-z-4 hover:scale-105">
                <ProjectCard />
                <ProjectFooter />
            </div>
        </div>
    );
};