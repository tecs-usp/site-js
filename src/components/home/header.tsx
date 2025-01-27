import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"


export const Header = () => {
    const estilo_nav_item = "min-w-[312px] text-tecs-secondary hover:bg-gradient-to-r from-tecs-secondary to-tecs-primary hover:text-white my-2 font-bold py-2 text-[0.9rem] rounded-full ";
    const estilo_nav_item_desk = "hover:bg-tecs-alternative font-bold px-6 m-2 py-2 text-[1rem] rounded-[20px] transition-all";

    const bc_sections = [
        { label: 'INÍCIO', href: '#home' },
        { label: 'CONTEÚDO', href: '#presentation' },
        { label: 'PROJETOS', href: '#projetos' },
        { label: 'APOIADORES', href: '#participation' },
        { label: 'CONTATO', href: '#bcfaq' }
    ];

    return (
        <div className="fixed flex flex-row min-h-[120px] items-center justify-between w-screen min-w-[320px] w-screen lg:w-screen px-6 bg-gradient-to-r from-tecs-secondary to-tecs-primary z-10">

            <img className="h-[90px]" src="/logos/logo_tecs_extenso.svg" alt="Logo do Tecs" />

            <div className="lg:hidden flex flex-col">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenuIcon size={32} color="#FFFFFF" /> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex mt-[2.5rem] justify-center items-center text-center min-w-[312px] border-[4px] border-white shadow-2xl rounded-lg">
                        <ul>
                            {bc_sections.map((section, index) => (
                                <li key={index} className={estilo_nav_item}>
                                    <a href={section.href}>{section.label}</a>
                                </li>
                            ))}
                        </ul>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ul className="hidden lg:flex text-white flex-row items-center justify-center">
                {bc_sections.map((section, index) => (
                    <li key={index} className={estilo_nav_item_desk}>
                        <a href={section.href}>{section.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
