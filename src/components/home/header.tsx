import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"


export const Header = () => {
    const estilo_nav_item = "min-w-[312px] hover:bg-tecs-alternative hover:text-white my-2 font-bold py-2";
    const estilo_nav_item_desk = "hover:bg-tecs-alternative font-bold px-6 m-2 py-2 text-[1rem] rounded-[20px] transition-all";

    const bc_sections = [
        { label: 'Início', href: '#home' },
        { label: 'Conteúdo', href: '#presentation' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Apoiadores', href: '#participation' },
        { label: 'Contato', href: '#bcfaq' }
    ];

    return (
        <div className="flex flex-row min-h-[120px] items-center justify-between w-screen min-w-[320px] w-screen lg:w-screen px-6 bg-gradient-to-r from-tecs-secondary to-tecs-primary">

            <Image alt="Logo do Tecs" src="/logos/logo_tecs_extenso.svg" width={100} height={100} className="flex h-[80px] w-auto" />

            <div className="lg:hidden flex flex-col">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenuIcon size={32} color="#FFFFFF" /> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex mt-[2.5rem] justify-center items-center text-center min-w-[312px] border-[4px] border-white">
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
