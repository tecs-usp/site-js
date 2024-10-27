import { BoxIcon } from "lucide-react"

export const NavBar = () => {
    const sections = [
        {
            label: 'Sobre nós',
            href: '#about'
        },
        {
            label: 'Contato',
            href: '#contact'
        },
        {
            label: 'Projetos',
            href: "#projects"
        }
    ]

    return (
        <div>
            <BoxIcon />
            <nav>
                {sections.map(section => (
                    <a key={section.href} href={section.href} className="">{section.label}</a>
                ))}
            </nav>
        </div>
    )
}