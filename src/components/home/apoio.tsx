export const Apoio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white pt-[100px]">
            <h3 className="text-[2rem] font-bold text-tecs-secondary">APOIOS</h3>
            <p>Conheça nossos apoiadores:</p>

            <div className="flex flex-col justify-center items-center sm:grid-cols-2 gap-[2.5rem] w-full px-6 py-6">
                <img src="apoiadores/logo_fapesp.png" alt="Logo da FAPESP" className="w-[8rem]" />
                <img src="apoiadores/logo_ime.png" alt="Logo do IME" className="w-[8rem]" />
                <img src="apoiadores/logo_usp.png" alt="Logo da USP" className="w-[8rem]" />
                <img src="apoiadores/logo_fundacao_casa.png" alt="Logo da Fundação CASA" className="w-[8rem]" />
                <img src="apoiadores/logo_tech_shift.png" alt="Logo da Tech Shift" className="w-[8rem]" />
                <img src="apoiadores/logo_jornal_usp.png" alt="Logo do Jornal da USP" className="w-[8rem]" />
            </div>
        </div>
    );
};