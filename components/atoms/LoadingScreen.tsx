"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + 5;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-space-blue"
                >
                    <div className="absolute inset-0 bg-space-gradient" />

                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute w-64 h-64 bg-neon-magenta rounded-full blur-[100px]"
                    />

                    <div className="relative z-10 flex flex-col items-center space-y-6">
                        <h1
                            className="text-2xl font-exo font-bold text-neon-magenta"
                            style={{
                                textShadow: "0 0 15px rgba(217, 70, 239, 0.7)",
                            }}
                        >
                            Cargando...
                        </h1>

                        <div className="w-56 h-2 bg-dark-glass rounded-full overflow-hidden border border-neon/30">
                            <div
                                className="h-full bg-gradient-to-r from-neon-magenta to-neon-cyan transition-all duration-100"
                                style={{
                                    width: `${progress}%`,
                                    boxShadow: "0 0 8px rgba(217, 70, 239, 0.6)",
                                }}
                            />
                        </div>

                        <p className="text-neon-magenta font-medium">{progress}%</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}