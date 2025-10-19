"use client";
import { motion } from "framer-motion";
import CertificadoCard from "../molecules/certificados/CertificadosCard";

export default function Certificados() {
    const certificados = [
        {
            titulo: "DevOps Essentials",
            empresa: "Certiprof",
            fecha: "Octubre 2025",
            imagen: "/assets/img/cert-DevOps.png",
            urlPDF: "/assets/pdf/DevOps.pdf"
        },
        {
            titulo: "Python Essentials 1",
            empresa: "Cisco",
            fecha: "Julio 2024",
            imagen: "/assets/img/cert-Python.png",
            urlPDF: "/assets/pdf/Python.pdf"
        }
    ];

      return (
        <section id="certificados" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-exo font-bold text-center mb-12 text-neon"
                    style={{ textShadow: '0 0 15px rgba(217, 70, 239, 0.7)' }}
                >
                    Certificados
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certificados.map((cert) => (
                        <CertificadoCard key={cert.titulo} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}