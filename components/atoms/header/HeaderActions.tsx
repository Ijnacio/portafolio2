export default function HeaderActions() {
    return (
        <div className="flex items-center space-x-4">
            <a
                className="px-5 py-2 border border-neon-cyan text-neon-cyan rounded-xl shadow-glow-cyan-subtle hover:shadow-glow-cyan-intense hover:bg-neon-cyan hover:text-black transition-all duration-300 font-semibold text-sm"
                href="" // ¡IMPORTANTE: Reemplaza con la ruta a tu CV!
                download
            >
                Descargar CV
            </a>
            {/* Aquí pondremos los íconos de GitHub y LinkedIn más adelante */}
        </div>
    );
}