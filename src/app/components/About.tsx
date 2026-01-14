import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const features = [
        {
            icon: Code2,
            title: "Чистый код",
            description: "Пишу понятный, масштабируемый и поддерживаемый код",
        },
        {
            icon: Rocket,
            title: "Современные технологии",
            description:
                "Использую актуальный стек технологий и лучшие практики",
        },
        {
            icon: Users,
            title: "Командная работа",
            description: "Опыт работы в agile-командах и коммерческих проектах",
        },
        {
            icon: Award,
            title: "Качество",
            description: "Внимание к деталям и стремление к совершенству",
        },
    ];

    return (
        <section id="about" className="min-h-screen py-20 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Обо мне
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Привет! Я — frontend-разработчик, увлечённый созданием
                        комплексных веб-приложений и красивых, удобных
                        интерфейсов. Мне нравится не просто писать код, а
                        строить цифровые продукты, которые делают жизнь
                        пользователей проще и интереснее. Я всегда стремлюсь к
                        тому, чтобы каждая деталь работала идеально, а
                        взаимодействие с сайтом приносило удовольствие.
                        <br />
                        <br />В своей работе я использую современные технологии
                        — React, TypeScript, Tailwind CSS и многое другое. Люблю
                        разбираться в новых инструментах, экспериментировать с
                        подходами и делиться опытом с командой. Для меня важно
                        не только качество кода, но и атмосфера сотрудничества,
                        обмена знаниями и постоянного развития.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-purple-400/20"
                >
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Мой путь в разработке
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Закончил Белорусский государственный технологический
                        университет по специальности "Программное обеспечение и
                        безопасность мобильных систем" в 2025 году. За время
                        учёбы я не только освоил основы программирования, но и
                        научился мыслить как инженер — искать нестандартные
                        решения, быстро адаптироваться к новым задачам и
                        работать в команде.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Мой путь в IT начался с простых pet-проектов, которые со
                        временем переросли в серьёзные коммерческие задачи. Я
                        участвовал в создании корпоративных порталов, систем
                        страхования, аналитических панелей и других сложных
                        решений. Каждый проект — это новый вызов, возможность
                        научиться чему-то новому и сделать продукт ещё лучше.
                    </p>
                    <p className="text-gray-300">
                        Я убеждён, что развитие — это постоянный процесс.
                        Поэтому я всегда открыт для новых знаний, слежу за
                        трендами в индустрии и стараюсь применять лучшие
                        практики в своей работе. Моя цель — создавать не просто
                        сайты, а полноценные цифровые продукты, которыми можно
                        гордиться.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
