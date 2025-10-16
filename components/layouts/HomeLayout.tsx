import Header from "../molecules/header/Header";
import Hero from "../organisms/Hero";
import Skills from "../organisms/Skills";
import Projects from "../organisms/Projects";
import SpaceBackground from "../atoms/SpaceBackground";

export default function HomeLayout() {
    return (
        <div className="relative text-cosmic-white font-inter">
            {/* Fondo espacial animado */}
            <SpaceBackground />

            {/* Contenido */}
            <Header />
            <main className="relative z-10">
                <Hero />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}