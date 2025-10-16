export default function NavLinks() {
    return (
        <nav aria-label="Main navigation" role="navigation" className="hidden md:flex items-center space-x-8">
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-neon-magenta rounded"
                href="#about"
            >
                Sobre Mí
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-neon-magenta rounded"
                href="#skills"
            >
                Habilidades
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-neon-magenta rounded"
                href="#projects"
            >
                Proyectos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                className="text-lavender-gray hover:text-neon-magenta transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-neon-magenta rounded"
                href="#contact"
            >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
            </a>
        </nav>
    );
}