import ProjectCard from "../molecules/projects/ProjectCard";

const myProjects = [
    {
        title: "API REST para Gestión de Herramientas",
        description: "Participé en el desarrollo de una API RESTful para un sistema de gestión. Fui responsable del diseño del esquema de la base de datos SQL y la implementación de endpoints clave usando Java y Spring.",
        imageUrl: "assets/img/Herramientas1.png", // Se puede poner Herramientas2.png si se prefiere.
        tags: ["Java", "Spring", "SQL", "Maven", "Postman"],
        codeLink: "https://github.com/BastianEd/Inventario_Herramientas_Constructora",
        demoLink: "#",
    },
    
    {
        title: "Mi Portafolio Personal",
        description: "Diseño y desarrollo de mi portafolio personal utilizando React, TypeScript y TailwindCSS, enfocado en un diseño moderno, responsivo y con animaciones fluidas.",
        imageUrl: "assets/img/Portafolio.png",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
        codeLink: "https://github.com/tu-usuario/link-a-este-portafolio",
        demoLink: "#",
    },
    {
        title: "FletesExpres - App de Gestión y Seguimiento",
        description: "En desarrollo: app Android en Kotlin para gestionar y rastrear envíos en tiempo real. Uso SQL para la estructura de datos, Gradle y Android Studio para el build, e integración de GPS/Google Maps para el seguimiento. ",
        imageUrl: "assets/img/Fletes2.png",
        tags: ["Kotlin", "Android Studio", "Gradle", "SQL", "GPS", "Google Maps"],
        codeLink: "https://github.com/Ijnacio/RestApp",
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