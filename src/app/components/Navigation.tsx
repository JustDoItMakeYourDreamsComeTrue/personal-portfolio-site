import { motion } from "motion/react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = useMemo(
        () => [
            { label: "Главная", href: "#hero" },
            { label: "Обо мне", href: "#about" },
            { label: "Навыки", href: "#skills" },
            { label: "Опыт", href: "#experience" },
            { label: "Проекты", href: "#projects" },
            { label: "Хобби", href: "#hobbies" },
            { label: "Контакты", href: "#contact" },
        ],
        []
    );

    const scrollToSection = useCallback((href: string) => {
        const id = href.replace("#", "");
        if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled
                        ? "bg-slate-900/80 backdrop-blur-lg border-b border-cyan-400/10 shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => scrollToSection("#hero")}
                        >
                            ДС
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-cyan-400"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            whileTap={{ scale: 0.95 }}
                            aria-label={
                                isMobileMenuOpen
                                    ? "Закрыть меню"
                                    : "Открыть меню"
                            }
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-[73px] right-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur-lg border-l border-cyan-400/20 z-40 md:hidden"
                >
                    <div className="flex flex-col gap-4 p-6">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-300 hover:text-cyan-400 transition-colors text-left py-2 px-4 rounded-lg hover:bg-slate-800/50"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}
