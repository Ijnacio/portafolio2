"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-neon-magenta opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-exo font-bold text-center mb-16 text-neon"
                    style={{ textShadow: '0 0 15px rgba(217, 70, 239, 0.7), 0 0 30px rgba(217, 70, 239, 0.4)' }}
                >
                    Sobre Mí
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-neon-magenta/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <img 
                                src="/assets/img/unnamed.png" 
                                alt="Ignacio Sobarzo" 
                                className="relative rounded-2xl w-80 h-80 object-cover border-2 border-neon/30 shadow-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-exo font-bold text-cosmic-white">
                            Analista Programador y Desarrollador Web Apasionado
                        </h3>
                        
                        <p className="text-lavender-gray leading-relaxed">
                            ¡Hola! Soy Ignacio. Desde que descubrí el mundo de la programación, he estado fascinado con cómo la lógica y la creatividad pueden unirse para construir cosas increíbles. Mi viaje comenzó con las bases sólidas en Java y Python, pero rápidamente encontré mi pasión en el desarrollo web.
                        </p>
                        
                        <p className="text-lavender-gray leading-relaxed">
                            Me especializo en la creación de experiencias de usuario dinámicas y fluidas utilizando <span className="text-neon-magenta font-semibold">React y TypeScript</span>. Disfruto enfrentando desafíos complejos y convirtiendo ideas en aplicaciones web funcionales, robustas y visualmente atractivas.
                        </p>
                        
                        <p className="text-lavender-gray leading-relaxed">
                            Actualmente estoy buscando oportunidades para colaborar en proyectos innovadores, seguir aprendiendo y aportar mi energía y habilidades a un equipo de desarrollo.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}