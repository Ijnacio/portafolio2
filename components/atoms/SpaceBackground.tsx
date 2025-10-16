"use client";
import { useEffect, useRef } from 'react';

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configurar tamaño del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight; // Cambio aquí
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Crear estrellas
        const stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }[] = [];
        const numStars = 200;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.01,
            });
        }

        // Animación
        let animationFrame: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar estrellas
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // Efecto de parpadeo
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                ctx.fillStyle = `rgba(224, 225, 240, ${star.opacity})`;
                ctx.fill();

                // Brillo neón ocasional
                if (Math.random() > 0.995) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#d946ef';
                    ctx.fillStyle = '#d946ef';
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            {/* Gradiente de fondo */}
            <div className="fixed inset-0 bg-space-gradient -z-20 pointer-events-none" />

            {/* Canvas para estrellas */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full -z-10 opacity-80 pointer-events-none"
            />

            {/* Efectos de luz neón */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse" />
            </div>
        </>
    );
}