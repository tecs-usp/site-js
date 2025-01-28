export const Projects = () => {
    return (
        <div className="flex flex-col  lg:flex-row items-center justify-center min-h-screen w-screen md:max-w-[680px] lg:max-w-[1120px] pt-[80px] bg-gradient-to-r from-tecs-secondary to-tecs-primary px-8">
            <div className="w-[8rem] flex flex-col items-center justify-center text-center text-white font-bold text-[1.5rem]">
                <h2><span className="text-[2.1rem]">PROJETOS</span> ATUAIS</h2>
            </div>
            <div className="max-w-[20rem] w-full h-[20rem] bg-white rounded-[1rem] mt-[2rem] flex flex-col justify-center items-center">
                {/* Conteúdo da primeira div */}
            </div>
            <div className="max-w-[20rem] w-full h-[4rem] bg-gradient-to-t from-white to-transparent rounded-b-[1rem] mt-[2rem] flex flex-col justify-center items-center transform rotate-180 opacity-60">
                {/* Reflexo da primeira div */}
            </div>
        </div>
    )
}