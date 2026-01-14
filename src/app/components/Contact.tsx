import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Github, Send, SendHorizonal } from "lucide-react";

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const contactInfo = [
        {
            icon: Phone,
            label: "Телефон",
            value: "+375 29 875-03-75",
            link: "tel:+375298750375",
            color: "from-green-500 to-cyan-500",
        },
        {
            icon: Mail,
            label: "Email",
            value: "assistantacc666@gmail.com",
            link: "mailto:assistantacc666@gmail.com",
            color: "from-cyan-500 to-blue-500",
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            link: "https://github.com/JustDoItMakeYourDreamsComeTrue",
            color: "from-slate-500 to-slate-700",
        },
        {
            icon: SendHorizonal,
            label: "Telegram",
            link: "https://t.me/Myoriginalnickname",
            color: "from-blue-400 to-cyan-500",
        },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Свяжитесь со мной
                    </h2>
                    <p className="text-xl text-gray-300">
                        Готов обсудить ваш проект или возможности сотрудничества
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Контактная информация
                        </h3>

                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.label}
                                href={info.link}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 group"
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        {info.label}
                                    </p>
                                    <p className="text-white font-medium">
                                        {info.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-white mb-4">
                                Социальные сети
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                                    >
                                        <social.icon className="w-6 h-6 text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-400/20"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Напишите мне
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-cyan-400/20 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                                    placeholder="Ваше имя"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-cyan-400/20 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Сообщение
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-cyan-400/20 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Расскажите о вашем проекте..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                Отправить сообщение
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-cyan-400/10 text-center text-gray-400"
                >
                    <p>© 2026 Денис Солодкий. Все права НЕ защищены.)</p>
                </motion.div>
            </div>
        </section>
    );
}
