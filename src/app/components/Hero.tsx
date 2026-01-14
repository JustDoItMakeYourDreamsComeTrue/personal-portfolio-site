import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

export function Hero() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Денис Солодкий
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-2xl md:text-4xl text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Frontend-разработчик
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Создаю современные веб-приложения с использованием React, TypeScript и других передовых технологий
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Перейти к разделу контактов"
          >
            <span className="relative z-10">Связаться со мной</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 border-2 border-cyan-400/50 rounded-full text-cyan-400 font-semibold backdrop-blur-sm hover:bg-cyan-400/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Перейти к проектам"
          >
            Мои работы
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        role="button"
        aria-label="Прокрутить вниз"
        onClick={() => scrollToSection('about')}
        style={{ cursor: 'pointer' }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
