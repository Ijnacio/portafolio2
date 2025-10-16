import SkillCard from "../molecules/skills/SkillCard";

const frontendSkills = [
    { name: "HTML", iconUrl: "/assets/icons/html.svg" },
    { name: "CSS", iconUrl: "/assets/icons/css.svg" },
    { name: "JavaScript", iconUrl: "/assets/icons/javascript.svg" },
    { name: "React", iconUrl: "/assets/icons/react.svg" },
    { name: "TypeScript", iconUrl: "/assets/icons/typescript.svg" },
    { name: "Bootstrap", iconUrl: "/assets/icons/bootstrap.svg" },
    { name: "TailwindCSS", iconUrl: "/assets/icons/tailwindcss.svg" },
];
const backendSkills = [
    { name: "Java", iconUrl: "/assets/icons/java.svg" },
    { name: "Spring", iconUrl: "/assets/icons/spring.svg" },
    { name: "Python", iconUrl: "/assets/icons/python.svg" },
    { name: "Node.js", iconUrl: "/assets/icons/nodejs.svg" },
    { name: "C++", iconUrl: "/assets/icons/cplusplus.svg" },
];
const mobileSkills = [{ name: "Kotlin", iconUrl: "/assets/icons/kotlin.svg" }];
const databases = [
    { name: "SQL", iconUrl: "/assets/icons/sql.svg" },
    { name: "MySQL", iconUrl: "/assets/icons/mysql.svg" },
];
const tools = [
    { name: "Git", iconUrl: "/assets/icons/git.svg" },
    { name: "GitHub", iconUrl: "/assets/icons/github.svg" },
    { name: "Postman", iconUrl: "/assets/icons/postman.svg" },
    { name: "Maven", iconUrl: "/assets/icons/maven.svg" },
];
const learning = [{ name: "DevOps", iconUrl: "/assets/icons/devops.svg" }];

export default function Skills() {
    return (
        <section className="py-20 relative" id="skills">
            {/* Resplandor de fondo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-neon-cyan opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <h2
                className="text-4xl font-exo font-bold text-center mb-16 text-neon relative z-10"
                style={{
                    textShadow: '0 0 15px rgba(217, 70, 239, 0.7), 0 0 30px rgba(217, 70, 239, 0.4)'
                }}
            >
                Mi Stack Tecnológico
            </h2>
            <div className="container mx-auto px-6 space-y-16 relative z-10">
                <Category title="Frontend" skills={frontendSkills} />
                <Category title="Backend" skills={backendSkills} />
                <Category title="Mobile" skills={mobileSkills} />
                <Category title="Bases de Datos" skills={databases} />
                <Category title="Herramientas y Control de Versiones" skills={tools} />
                <Category title="Actualmente Aprendiendo" skills={learning} />
            </div>
        </section>
    );
}

const Category = ({ title, skills }: { title: string; skills: { name: string; iconUrl: string }[] }) => (
    <div>
        <h3
            className="text-2xl font-exo font-bold mb-8 text-center text-neon"
            style={{
                textShadow: '0 0 10px rgba(217, 70, 239, 0.6), 0 0 20px rgba(217, 70, 239, 0.3)'
            }}
        >
            {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} iconUrl={skill.iconUrl} />
            ))}
        </div>
    </div>
);