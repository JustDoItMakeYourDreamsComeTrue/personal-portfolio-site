import { CustomCursor } from '@/app/components/CustomCursor';
import { AnimatedBackground } from '@/app/components/AnimatedBackground';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Experience } from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Hobbies } from '@/app/components/Hobbies';
import { Contact } from '@/app/components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}
