import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const skills = [
  'Video Editor',
  'Photo Editor',
  'B.A',
  'M.A',
  'B.Ed',
  'Drawing',
  'Developer',
  'Photography',
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/__media__/src/components/1721245803934.png"
              width={600}
              height={600}
              alt="About Me"
              data-ai-hint="professional headshot"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-primary"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">About Me</h2>
              <p className="text-muted-foreground md:text-lg">
                Hi, my name is Manoj Das. I live in Lalbazar, Bankura. I completed my B.A. in Philosophy in 2023 and my M.A. in 2024 from Burdwan University. I am pursuing my B.Ed. from Onda College, expecting to complete it in 2026. In my free time, I enjoy listening to music, reading books, and occasionally, I like to draw and paint.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-headline text-primary">My Skills</h3>
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
