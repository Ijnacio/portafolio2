// app/components/molecules/header/Header.tsx
import { motion } from "framer-motion";
import Logo from "../../atoms/header/Logo";
import NavLinks from "../../atoms/header/NavLinks";
import HeaderActions from "../../atoms/header/HeaderActions";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark-glass/50 backdrop-blur-lg border-b border-neon/30 shadow-glow-subtle shadow-neon"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <NavLinks />
                <HeaderActions />
            </div>
        </motion.header>
    );
}