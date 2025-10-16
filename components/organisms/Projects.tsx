import ProjectCard from "../molecules/projects/ProjectCard";

const myProjects = [
    {
        title: "API REST para Gestión de Herramientas",
        description: "Participé en el desarrollo de una API RESTful para un sistema de gestión. Fui responsable del diseño del esquema de la base de datos SQL y la implementación de endpoints clave usando Java y Spring.",
        imageUrl: "/assets/images/project-constructora.png",
        tags: ["Java", "Spring", "SQL", "Maven", "Postman"],
        codeLink: "https://github.com/tu-usuario/link-a-tu-proyecto-1",
        demoLink: "#",
    },
    {
        title: "Mi Portafolio Personal",
        description: "Diseño y desarrollo de mi portafolio personal utilizando React, TypeScript y TailwindCSS, enfocado en un diseño moderno, responsivo y con animaciones fluidas.",
        imageUrl: "/assets/images/project-portafolio.png",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
        codeLink: "https://github.com/tu-usuario/link-a-este-portafolio",
        demoLink: "#",
    },
    {
        title: "Próximo Proyecto: IA & Automatización",
        description: "Actualmente explorando conceptos de Machine Learning y automatización de procesos. ¡Pronto habrá más detalles sobre esta nueva aventura tecnológica!",
        imageUrl: "/assets/images/project-coming-soon.png",
        tags: ["AI", "Machine Learning", "Python"],
        codeLink: "#",
        demoLink: "#",
    },
];

export default function Projects() {
    return (
        <section className="py-20 relative" id="projects">
            {/* Resplandor de fondo sutil */}
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon-magenta opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <h2
                className="text-4xl font-exo font-bold text-center mb-12 text-neon relative z-10"
                style={{
                    textShadow: '0 0 15px rgba(217, 70, 239, 0.7), 0 0 30px rgba(217, 70, 239, 0.4)'
                }}
            >
                Proyectos
            </h2>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {myProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        tags={project.tags}
                        codeLink={project.codeLink}
                        demoLink={project.demoLink}
                    />
                ))}
            </div>
        </section>
    );
}