interface ButtonProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    target?: string;
}

const Button: React.FC<ButtonProps> = ({ href, className, children, target = "_blank" }) => (
    <a href={href} target={target} rel="noopener noreferrer" className={`flex items-center justify-center bg-gradient-to-r from-tecs-secondary to-tecs-primary font-bold px-2 h-[2.1rem] text-[0.9rem] w-[12rem] rounded-full hover:bg-none hover:bg-tecs-primary hover:border-4 border-tecs-primary cursor-pointer z-20 ${className}`}>
        {children}
    </a>
);


export default Button;