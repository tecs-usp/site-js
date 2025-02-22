export const Apoio = () => {
    return (
        <div id="apoio" className="flex flex-col items-center justify-center w-full min-h-screen bg-white ">
            <h3 className="text-[2rem] font-bold text-tecs-secondary">APOIO</h3>
            <p>Conheça nossos apoiadores:</p>

            <div className="flex flex-wrap justify-center items-center gap-[2.5rem] md:gap-[4rem] max-w-[35rem] px-6 py-6 md:py-[4rem]">
                <a target="_blank" href="https://revistapesquisa.fapesp.br/">
                    <img src="apoiadores/logo_fapesp.png" alt="Logo da FAPESP" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
                <a target="_blank" href="https://www.ime.usp.br/">
                    <img src="apoiadores/logo_ime.png" alt="Logo do IME" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
                <a target="_blank" href="https://www5.usp.br/">
                    <img src="apoiadores/logo_usp.png" alt="Logo da USP" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
                <a target="_blank" href="https://fundacaocasa.sp.gov.br/">
                    <img src="apoiadores/logo_fundacao_casa.png" alt="Logo da Fundação CASA" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
                <a target="_blank" href="https://www.techshift.org/">
                    <img src="apoiadores/logo_tech_shift.png" alt="Logo da Tech Shift" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
                <a target="_blank" href="https://jornal.usp.br/">
                    <img src="apoiadores/logo_jornal_usp.png" alt="Logo do Jornal da USP" className="w-[8rem] md:w-[12rem] transform transition-transform duration-300 hover:scale-125" />
                </a>
            </div>
        </div>
    );
};