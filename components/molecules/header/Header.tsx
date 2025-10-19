import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../../atoms/header/Logo";
import NavLinks from "../../atoms/header/NavLinks";
import HeaderActions from "../../atoms/header/HeaderActions";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark-glass/50 backdrop-blur-lg border-b border-neon/30 shadow-glow-subtle shadow-neon"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center relative">
                    <Logo />
                    <div className="hidden md:block">
                        <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </div>
                    <div className="flex items-center gap-4">
                        <HeaderActions />
                        
                        {/* Botón de menú móvil */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-neon-magenta/20 hover:border-neon-magenta/50 transition-colors duration-300 z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            aria-label="Toggle menu"
                        >
                            <span className={`w-5 h-0.5 bg-neon-magenta transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : 'translate-y-[-4px]'}`}></span>
                            <span className={`w-5 h-0.5 bg-neon-magenta transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-neon-magenta transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-[-5px]' : 'translate-y-[4px]'}`}></span>
                        </button>
                    </div>
                </div>
                <div className="md:hidden">
                    <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>
        </motion.header>
    );
}
