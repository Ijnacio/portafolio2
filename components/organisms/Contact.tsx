// components/organisms/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const metodosContacto = [
        {
            Icono: Mail,
            titulo: "Email",
            valor: "ig.sobarzo@duocuc.cl",
            enlace: "mailto:ig.sobarzo@duocuc.cl",
            color: "neon-magenta"
        },
        {
            Icono: MessageCircle,
            titulo: "WhatsApp",
            valor: "+56 9 3898 2659",
            enlace: "https://wa.me/56938982659",
            color: "neon-cyan"
        },
        {
            Icono: Linkedin,
            titulo: "LinkedIn",
            valor: "Ignacio Sobarzo",
            enlace: "https://www.linkedin.com/in/ignacio-166190176/",
            color: "neon-magenta"
        },
        {
            Icono: Github,
            titulo: "GitHub",
            valor: "@Ijnacio",
            enlace: "https://github.com/Ijnacio",
            color: "neon-cyan"
        }
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-neon-cyan opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-exo font-bold text-center mb-6 text-neon"
                    style={{ textShadow: '0 0 15px rgba(217, 70, 239, 0.7), 0 0 30px rgba(217, 70, 239, 0.4)' }}
                >
                    Contacto
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-lavender-gray text-lg mb-12 max-w-2xl mx-auto"
                >
                    ¿Tienes un proyecto en mente o simplemente quieres conectar? ¡No dudes en contactarme!
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {metodosContacto.map((metodo, index) => {
                        const { Icono, titulo, valor, enlace, color } = metodo;
                        const esCyan = color === "neon-cyan";
                        const sombra = esCyan ? "0 0 10px rgba(0, 246, 255, 0.2)" : "0 0 10px rgba(217, 70, 239, 0.2)";
                        const sombraHover = esCyan 
                            ? "0 0 25px rgba(0, 246, 255, 0.5), 0 0 50px rgba(0, 246, 255, 0.3)"
                            : "0 0 25px rgba(217, 70, 239, 0.5), 0 0 50px rgba(217, 70, 239, 0.3)";
                        
                        return (
                            <motion.a
                                key={titulo}
                                href={enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: sombraHover }}
                                className="bg-dark-glass backdrop-blur-lg p-6 rounded-xl border border-neon/20 flex items-center gap-4 transition-all duration-300 group"
                                style={{ boxShadow: sombra }}
                            >
                                <div className={`p-3 rounded-lg ${esCyan ? "bg-neon-cyan/10" : "bg-neon-magenta/10"}`}>
                                    <Icono className={`w-6 h-6 ${esCyan ? "text-neon-cyan" : "text-neon-magenta"}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-exo font-bold text-cosmic-white mb-1">{titulo}</h3>
                                    <p className="text-lavender-gray text-sm">{valor}</p>
                                </div>
                                <div className={`opacity-0 group-hover:opacity-100 transition-opacity ${esCyan ? "text-neon-cyan" : "text-neon-magenta"}`}>
                                    →
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}