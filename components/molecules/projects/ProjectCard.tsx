import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    codeLink: string;
    demoLink?: string;
}

export default function ProjectCard({ title, description, imageUrl, tags, codeLink, demoLink }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-dark-glass backdrop-blur-lg rounded-xl overflow-hidden border border-neon/20 transform hover:-translate-y-2"
            whileHover={{
                boxShadow: "0 0 20px rgba(217, 70, 239, 0.4), 0 0 40px rgba(217, 70, 239, 0.2)"
            }}
            transition={{ duration: 0.3 }}
            style={{
                boxShadow: "0 0 10px rgba(217, 70, 239, 0.2)"
            }}
        >
            <img alt={`Imagen del proyecto ${title}`} className="w-full h-48 object-cover" src={imageUrl} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-exo text-cosmic-white">{title}</h3>
                <p className="mt-2 text-lavender-gray text-sm flex-grow">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full font-semibold border border-neon/30 text-neon"
                            style={{
                                backgroundColor: 'rgba(217, 70, 239, 0.1)'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-6 flex space-x-4">
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-neon text-neon rounded-xl hover:bg-neon hover:text-black transition-all duration-300 font-semibold text-sm"
                        style={{
                            boxShadow: '0 0 10px rgba(217, 70, 239, 0.3)'
                        }}
                    >
                        Ver Código
                    </a>
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 border border-lavender-gray text-lavender-gray rounded-xl hover:bg-lavender-gray hover:text-black transition-all duration-300 font-semibold text-sm"
                        >
                            Ver Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}