import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Wrench, BookOpen, Music, PenLine, GraduationCap } from "lucide-react";

export function Hobbies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const hobbies = [
        {
            icon: Wrench,
            title: "Моддинг игр",
            description:
                "Создаю и дорабатываю модификации для любимых игр — от визуальных улучшений до новых механик. Люблю разбирать чужие проекты и делать что-то уникальное.",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: BookOpen,
            title: "Чтение",
            description:
                "Погружаюсь в миры развлекательной литературы: фантастика, фэнтези, триллеры. Книги для меня — лучший способ отдохнуть и вдохновиться.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: PenLine,
            title: "Писательство",
            description:
                "Пишу рассказы и небольшие повести под псевдонимом. Экспериментирую с жанрами, люблю создавать необычных персонажей и миры.",
            color: "from-green-500 to-cyan-500",
        },
        {
            icon: Music,
            title: "Музыка",
            description:
                "Музыка сопровождает меня всегда: слушаю разные жанры, иногда пробую сочинять свои мелодии. Это мой способ настроиться на работу или расслабиться.",
            color: "from-pink-500 to-purple-500",
        },
        {
            icon: GraduationCap,
            title: "Обучение",
            description:
                "Постоянно учусь новому — прохожу онлайн-курсы, читаю статьи, смотрю лекции. Верю, что развитие — это путь к успеху.",
            color: "from-amber-500 to-orange-500",
        },
    ];

    return (
        <section id="hobbies" className="py-20 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        Интересы и хобби
                    </h2>
                    <p className="text-xl text-gray-300">
                        Вне работы я стараюсь развиваться разносторонне и
                        находить вдохновение в самых разных сферах. Хобби
                        помогают мне не только отдыхать, но и черпать новые идеи
                        для проектов, расширять кругозор и просто получать
                        удовольствие от жизни.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.title}
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            animate={
                                isInView ? { opacity: 1, scale: 1, y: 0 } : {}
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: [0, -1, 1, 0],
                                transition: { duration: 0.3 },
                            }}
                            className="relative group"
                        >
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 h-full">
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <hobby.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {hobby.title}
                                </h3>
                                <p className="text-gray-400">
                                    {hobby.description}
                                </p>
                            </div>

                            {/* Glow effect on hover */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
