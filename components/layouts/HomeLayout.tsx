import Header from "../molecules/header/Header";
import Hero from "../organisms/Hero";
import Skills from "../organisms/Skills";
import Projects from "../organisms/Projects";
import About from "../organisms/About";
import Contact from "../organisms/Contact";
import Footer from "../organisms/Footer";
import SpaceBackground from "../atoms/SpaceBackground";

export default function HomeLayout() {
    return (
        <div className="relative text-cosmic-white font-inter">
            <SpaceBackground />
            <Header />
            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}