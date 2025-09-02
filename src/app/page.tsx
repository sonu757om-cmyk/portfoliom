import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Hobbies from '@/components/hobbies';
import SkillsVisualizer from '@/components/skills-visualizer';
import Testimonials from '@/components/testimonials';
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
        <Hobbies />
        <SkillsVisualizer />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
