import React from 'react';

const ContactIcon = ({ src, alt, label }: { src: string, alt: string, label: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[6rem] h-[5rem] text-[0.7rem] text-white font-bold gap-1 transform transition-transform duration-200 hover:scale-125 hover:rounded-lg hover:cursor-pointer">
            <div className="flex justify-center items-center bg-white w-[3rem] h-[3rem] rounded-full p-[0.5rem]">
                <img src={src} alt={alt} />
            </div>
            <p>{label}</p>
        </div>
    );
};

export const Contato = () => {
    return (
        <div id='contato' className="h-[50vh] w-full justify-center items-center flex flex-col gap-4 bg-gradient-to-r from-tecs-primary to-tecs-secondary text-white">
            <h3 className='text-[1.5rem] font-bold'>CONTATO</h3>
            <div className='flex justify-center items-center md:gap-4'>
                <ContactIcon src="logos/logo-instagram.png" alt="Ícone do Instagram" label="INSTAGRAM" />
                <ContactIcon src="logos/icone-email.png" alt="Ícone do Email" label="EMAIL" />
                <ContactIcon src="logos/logo-linkedin.png" alt="Ícone do LinkedIn" label="LINKEDIN" />
            </div>
        </div>
    );
};