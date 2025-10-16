import { motion } from "framer-motion";

interface SkillCardProps {
    iconUrl: string;
    name: string;
}

export default function SkillCard({ iconUrl, name }: SkillCardProps) {
    return (
        <motion.div
            className="bg-dark-glass backdrop-blur-lg p-4 rounded-xl flex flex-col items-center justify-center space-y-3 shadow-glow-subtle shadow-neon aspect-square"
            whileHover={{
                y: -8,
                boxShadow: "0 0 15px var(--tw-shadow-color), 0 0 25px var(--tw-shadow-color)"
            }}
            transition={{ duration: 0.2 }}
        >
            <img alt={`${name} logo`} className="h-12 w-12" src={iconUrl} />
            <span className="font-semibold text-cosmic-white">{name}</span>
        </motion.div>
    );
}