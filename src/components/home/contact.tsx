import React from 'react';

const ContactIcon = ({ src, alt, label }: { src: string, alt: string, label: string }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[6rem] h-[5rem] text-[0.7rem] text-white font-bold gap-1">
            <div className="flex justify-center items-center bg-white w-[3rem] h-[3rem] rounded-full">
                <img src={src} alt={alt} />
            </div>
            <p>{label}</p>
        </div>
    );
};

export const Contato = () => {
    return (
        <div className="h-[20rem] w-full justify-center items-center flex flex-col gap-4 bg-gradient-to-r from-tecs-primary to-tecs-secondary text-white">
            <h3 className='text-[1.5rem] font-bold'>CONTATO</h3>
            <div className='flex justify-center items-center'>
                <ContactIcon src="icones/insta.svg" alt="Ícone do Instagram" label="INSTAGRAM" />
                <ContactIcon src="icones/email.svg" alt="Ícone do Email" label="EMAIL" />
                <ContactIcon src="icones/linkedin.svg" alt="Ícone do LinkedIn" label="LINKEDIN" />
            </div>
        </div>
    );
};