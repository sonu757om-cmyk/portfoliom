import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Firebase', 'GenAI', 'Tailwind CSS', 'UI/UX Design', 'Figma'
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="https://picsum.photos/600/600"
              width={600}
              height={600}
              alt="About Me"
              data-ai-hint="professional headshot"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
              <p className="text-muted-foreground md:text-lg">
                I am a passionate and creative developer with a knack for building beautiful and functional web experiences. My journey in tech started with a deep curiosity for how things work, which led me to dive into web development. I thrive on solving complex problems and continuously learning new technologies.
              </p>
              <p className="text-muted-foreground md:text-lg">
                When I'm not coding, you can find me exploring the outdoors, reading a good book, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-headline">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <div key={skill} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <Button asChild size="lg">
              <a href="/resume.pdf" download="resume.pdf">
                Download My Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
