// components/organisms/Footer.tsx
"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const redesSociales = [
        { Icono: Github, href: "https://github.com/Ijnacio", label: "GitHub" },
        { Icono: Linkedin, href: "https://www.linkedin.com/in/ignacio-166190176/", label: "LinkedIn" },
        { Icono: Mail, href: "mailto:g.sobarzo@duocuc.cl", label: "Email" }
    ];

    return (
        <footer className="relative py-12 border-t border-neon/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex space-x-6">
                        {redesSociales.map(({ Icono, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-dark-glass border border-neon/20 hover:border-neon-magenta transition-all duration-300 group"
                                style={{ boxShadow: "0 0 10px rgba(217, 70, 239, 0.2)" }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 20px rgba(217, 70, 239, 0.5)"}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 10px rgba(217, 70, 239, 0.2)"}
                                aria-label={label}
                            >
                                <Icono className="w-5 h-5 text-lavender-gray group-hover:text-neon-magenta transition-colors" />
                            </a>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-lavender-gray text-sm">
                            © {new Date().getFullYear()} Ignacio Sobarzo. Todos los derechos reservados.
                        </p>
                        <p className="text-lavender-gray/60 text-xs mt-2">
                            Hecho con React, TypeScript y mucho ☕
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}