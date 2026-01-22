import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Добавлен новый проект-новинка (без адаптива, цвет по скриншоту #0A0D23)
    const projects = [
        {
            title: "Online Games Site (Новинка)",
            description:
                "Современный сайт с коллекцией онлайн-игр: Flappy, Match-3, Poker, Pong, Quiz, Snake, Tetris и другие. Реализованы лидерборды, мультиязычность, плавные анимации и управление состоянием. Важно: адаптивный дизайн отсутствует. Цветовая схема — тёмно-синий, как на оригинальном сайте.",
            technologies: ["React", "TypeScript", "Vite", "Zustand", "i18next", "Framer Motion"],
            gradient: "from-[#0A0D23] to-[#181B34]", // тёмно-синий градиент
            link: "https://justdoitmakeyourdreamscometrue.github.io/online-games-site/",
            isNew: true,
        },
        {
            title: "E-commerce Table Games",
            description:
                "Современный сайт для продажи настольных игр: каталог, корзина, фильтры, оформление заказа и адаптивный дизайн. Проект реализован с нуля для реального бизнеса, с акцентом на удобство пользователя и визуальную привлекательность.",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            gradient: "from-yellow-400 to-orange-500",
            link: "https://justdoitmakeyourdreamscometrue.github.io/e-commerce-table-games-site/",
            isNew: false,
        },
    ];

    return (
        <section id="projects" className="py-20 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                        Проекты
                    </h2>
                    <p className="text-xl text-gray-300">
                        Здесь представлены некоторые из моих проектов, в которых
                        я принимал участие как разработчик. Каждый из них — это
                        результат работы, множества экспериментов и стремления
                        сделать что-то по-настоящему полезное для людей. <br />
                        <br />Я всегда открыт для новых интересных задач и
                        сотрудничества!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 h-full flex flex-col">
                                <div
                                    className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}
                                />

                                <div className="flex items-center mb-3 gap-2">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    {project.isNew && (
                                        <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-yellow-400 text-slate-900 rounded-full animate-pulse">
                                            New!
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.link ? (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 relative overflow-hidden group hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <ExternalLink className="w-4 h-4" />
                                                Подробнее
                                            </span>
                                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-400 to-orange-500 transition-opacity duration-300 rounded-lg" />
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 relative overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <ExternalLink className="w-4 h-4" />
                                                Подробнее
                                            </span>
                                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity duration-300 rounded-lg" />
                                        </motion.button>
                                    )}
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
