import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import TypingEffect from './typing-effect';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4">
            <TypingEffect
              texts={["Hi, I'm Manoj", "I'm a Developer", "I'm a Designer"]}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-destructive"
            />
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I build beautiful, responsive, and user-friendly web applications. Explore my work and get in touch.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/resume.pdf" download="resume.pdf">
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/800/800"
            width={800}
            height={800}
            alt="Hero"
            data-ai-hint="abstract developer"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
