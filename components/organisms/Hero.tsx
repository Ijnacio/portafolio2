"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="container mx-auto px-6 text-center min-h-screen flex flex-col justify-center items-center relative"
        >
            {/* Efecto de resplandor de fondo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[400px] bg-neon-magenta opacity-20 blur-[120px] rounded-full"></div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-exo font-black uppercase text-neon-magenta relative z-10"
                style={{
                    textShadow: '0 0 20px rgba(217, 70, 239, 0.8), 0 0 40px rgba(217, 70, 239, 0.6), 0 0 60px rgba(217, 70, 239, 0.4)'
                }}
            >
                IGNACIO SOBARZO
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-neon-magenta font-semibold mt-4 relative z-10"
                style={{
                    textShadow: '0 0 10px rgba(217, 70, 239, 0.6), 0 0 20px rgba(217, 70, 239, 0.4)'
                }}
            >
                SOFTWARE DEVELOPER | AI & DATA SCIENCE ENTHUSIAST
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="mt-8 max-w-3xl text-lavender-gray text-lg leading-relaxed relative z-10"
            >
                Construyendo soluciones eficientes hoy, con la mira en los desafíos de datos e inteligencia artificial del mañana.
                Busco unirme a un equipo innovador para crecer y aportar en proyectos que definan el futuro.
            </motion.p>
        </section>
    );
}