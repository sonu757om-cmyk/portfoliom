import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import SkillsVisualizer from '@/components/skills-visualizer';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <SkillsVisualizer />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
