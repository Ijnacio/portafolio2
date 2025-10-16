import SkillCard from "../molecules/skills/SkillCard";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", iconUrl: "/assets/icons/html.svg" },
            { name: "CSS", iconUrl: "/assets/icons/css.svg" },
            { name: "JavaScript", iconUrl: "/assets/icons/javascript.svg" },
            { name: "React", iconUrl: "/assets/icons/react.svg" },
            { name: "TypeScript", iconUrl: "/assets/icons/typescript.svg" },
            { name: "Bootstrap", iconUrl: "/assets/icons/bootstrap.svg" },
            { name: "TailwindCSS", iconUrl: "/assets/icons/tailwindcss.svg" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", iconUrl: "/assets/icons/java.svg" },
            { name: "Spring", iconUrl: "/assets/icons/spring.svg" },
            { name: "Python", iconUrl: "/assets/icons/python.svg" },
            { name: "Node.js", iconUrl: "/assets/icons/nodejs.svg" },
            { name: "C++", iconUrl: "/assets/icons/cplusplus.svg" },
            { name: "SQL", iconUrl: "/assets/icons/sql.svg" },
            { name: "MySQL", iconUrl: "/assets/icons/mysql.svg" },
        ]
    },
    {
        title: "Mobile & Tools",
        skills: [
            { name: "Kotlin", iconUrl: "/assets/icons/kotlin.svg" },
            { name: "Android Studio", iconUrl: "/assets/icons/android.svg" },
            { name: "Git", iconUrl: "/assets/icons/git.svg" },
            { name: "GitHub", iconUrl: "/assets/icons/github.svg" },
            { name: "Postman", iconUrl: "/assets/icons/postman.svg" },
            { name: "Maven", iconUrl: "/assets/icons/maven.svg" },
            { name: "Gradle", iconUrl: "/assets/icons/gradle.svg" },
        ]
    }
];

export default function Skills() {
    return (
        <section className="py-20 relative" id="skills">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-neon-cyan opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <h2
                className="text-4xl font-exo font-bold text-center mb-16 text-neon relative z-10"
                style={{
                    textShadow: '0 0 15px rgba(217, 70, 239, 0.7), 0 0 30px rgba(217, 70, 239, 0.4)'
                }}
            >
                Mi Stack Tecnológico
            </h2>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category) => (
                        <div 
                            key={category.title}
                            className="bg-dark-glass backdrop-blur-lg rounded-xl p-6 border border-neon/20"
                            style={{
                                boxShadow: "0 0 10px rgba(217, 70, 239, 0.2)"
                            }}
                        >
                            <h3
                                className="text-xl font-exo font-bold mb-6 text-center text-neon"
                                style={{
                                    textShadow: '0 0 10px rgba(217, 70, 239, 0.6)'
                                }}
                            >
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill) => (
                                    <SkillCard key={skill.name} name={skill.name} iconUrl={skill.iconUrl} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}