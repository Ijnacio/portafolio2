import { motion } from "framer-motion";

interface PropsCertificado {
    titulo: string;
    empresa: string;
    fecha: string;
    imagen: string;
    urlPDF: string;
}

export default function CertificadoCard({ titulo, empresa, fecha, imagen, urlPDF }: PropsCertificado) {
    return (
        <motion.div
            className="bg-dark-glass backdrop-blur-lg rounded-xl overflow-hidden border border-neon/20 hover:-translate-y-2 flex flex-col h-full"
            whileHover={{ boxShadow: "0 0 20px rgba(217, 70, 239, 0.4)" }}
            transition={{ duration: 0.3 }}
            style={{ boxShadow: "0 0 10px rgba(217, 70, 239, 0.2)" }}
        >
            {/* Clic en la imagen abre el PDF en nueva pestaña */}
            <a href={urlPDF} target="_blank" rel="noopener noreferrer">
                <img 
                    src={imagen} 
                    alt={titulo}
                    className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                />
            </a>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-exo text-cosmic-white mb-2">
                    {titulo}
                </h3>
                
                <p className="text-lavender-gray text-sm mb-2">
                    {empresa}
                </p>

                <p className="text-neon-magenta text-sm font-semibold mb-4">
                    {fecha}
                </p>

                <div className="mt-auto flex gap-2">
                    {/* Botón Ver - Abre en nueva pestaña */}
                    <a
                        href={urlPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-neon text-neon rounded-xl hover:bg-neon hover:text-black transition-all duration-300 font-semibold text-sm"
                    >
                        Ver
                    </a>

                    {/* Botón Descargar - Descarga directamente */}
                    <a
                        href={urlPDF}
                        download
                        className="flex-1 text-center px-4 py-2 border border-neon-cyan text-neon-cyan rounded-xl hover:bg-neon-cyan hover:text-black transition-all duration-300 font-semibold text-sm"
                    >
                        Descargar
                    </a>
                </div>
            </div>
        </motion.div>
    );
}