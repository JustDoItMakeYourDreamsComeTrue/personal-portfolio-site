import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Опыт и образование
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Frontend-разработчик
                  </h3>
                  <p className="text-cyan-400 mb-4">
                    Опыт коммерческой разработки · 1 год 1 месяц
                  </p>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <span className="font-semibold text-white">Астон</span> (сентябрь 2025 — декабрь 2025)
                    </p>
                    <p>
                      <span className="font-semibold text-white">Ривьера</span> (октябрь 2024 — июнь 2025)
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-purple-400/10">
                    <p className="text-gray-300">
                      Разрабатывал комплексные веб-решения, включая корпоративные порталы и системы страхования. 
                      Работал с многоуровневой обработкой данных, создавал многофункциональные рабочие экосистемы 
                      для сотрудников компаний. Применял современные подходы к разработке и работал в команде.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Белорусский государственный технологический университет
                  </h3>
                  <p className="text-purple-400 mb-4">Минск · Выпуск 2025</p>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-semibold text-white">
                      Программное обеспечение и безопасность мобильных систем
                    </p>
                    <p>Инженер-программист · Высшее образование</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
