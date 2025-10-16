interface NavLinksProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export default function NavLinks({ isMenuOpen, setIsMenuOpen }: NavLinksProps) {
    const linkClasses = "text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-neon-magenta rounded";
    const underlineClasses = "absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300";

    const handleClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Menú de escritorio */}
            <nav aria-label="Main navigation" role="navigation" className="hidden md:flex items-center space-x-8">
                <a className={linkClasses} href="#about">
                    Sobre Mí
                    <span className={underlineClasses}></span>
                </a>
                <a className={linkClasses} href="#skills">
                    Habilidades
                    <span className={underlineClasses}></span>
                </a>
                <a className={linkClasses} href="#projects">
                    Proyectos
                    <span className={underlineClasses}></span>
                </a>
                <a className={linkClasses} href="#contact">
                    Contacto
                    <span className={underlineClasses}></span>
                </a>
            </nav>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(false);
                    }}
                />
            )}
            <nav 
                className={`md:hidden fixed top-[72px] left-0 right-0 bg-space-blue/95 backdrop-blur-lg transition-all duration-300 z-50 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                } py-4 border-b border-neon/30 shadow-glow-subtle shadow-neon`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col space-y-4 px-6">
                    <a 
                        className={`${linkClasses} py-2 text-center w-full hover:bg-neon-magenta/10 rounded-lg`} 
                        href="#about" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Sobre Mí
                    </a>
                    <a 
                        className={`${linkClasses} py-2 text-center w-full hover:bg-neon-magenta/10 rounded-lg`} 
                        href="#skills" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Habilidades
                    </a>
                    <a 
                        className={`${linkClasses} py-2 text-center w-full hover:bg-neon-magenta/10 rounded-lg`} 
                        href="#projects" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Proyectos
                    </a>
                    <a 
                        className={`${linkClasses} py-2 text-center w-full hover:bg-neon-magenta/10 rounded-lg`} 
                        href="#contact" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        Contacto
                    </a>
                </div>
            </nav>
        </>
    );
}