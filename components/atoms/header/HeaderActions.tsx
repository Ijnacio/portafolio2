import { Github, Linkedin, Download } from "lucide-react";

export default function HeaderActions() {
    return (
        <div className="flex items-center space-x-4">
            {/* Botón de CV */}
            <a
                className="px-5 py-2 border border-neon-cyan text-neon-cyan rounded-xl hover:bg-neon-cyan hover:text-black transition-all duration-300 font-semibold text-sm flex items-center gap-2"
                href="/cv-ignacio-sobarzo.pdf"
                download="CV-Ignacio-Sobarzo.pdf"
                style={{
                    boxShadow: '0 0 10px rgba(0, 246, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 246, 255, 0.6), 0 0 40px rgba(0, 246, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 246, 255, 0.3)';
                }}
            >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Descargar CV</span>
                <span className="sm:hidden">CV</span>
            </a>

            {/* Iconos sociales */}
            <div className="flex items-center space-x-2">
                <a
                    href="https://github.com/Ijnacio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neon/20 hover:border-neon-magenta transition-all duration-300 group"
                    style={{
                        boxShadow: "0 0 5px rgba(217, 70, 239, 0.2)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(217, 70, 239, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 5px rgba(217, 70, 239, 0.2)";
                    }}
                    aria-label="GitHub"
                >
                    <Github className="w-4 h-4 text-lavender-gray group-hover:text-neon-magenta transition-colors" />
                </a>

                <a
                    href="https://www.linkedin.com/in/ignacio-166190176/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neon/20 hover:border-neon-cyan transition-all duration-300 group"
                    style={{
                        boxShadow: "0 0 5px rgba(0, 246, 255, 0.2)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 246, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 5px rgba(0, 246, 255, 0.2)";
                    }}
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-4 h-4 text-lavender-gray group-hover:text-neon-cyan transition-colors" />
                </a>
            </div>
        </div>
    );
}