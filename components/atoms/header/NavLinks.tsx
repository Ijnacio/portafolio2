export default function NavLinks() {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group"
                href="#projects"
            >
                Proyectos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group"
                href="#skills"
            >
                Habilidades
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group"
                href="#about"
            >
                Sobre Mí
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group"
                href="#contact"
            >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
        </nav>
    );
}