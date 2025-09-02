import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import TypingEffect from './typing-effect';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 bg-card border-b-4 border-primary">
       <Image
        src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhYnN0cmFjdCUyMHBhdHRlcm58ZW58MHx8fHwxNzU2OTg4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Abstract background"
        fill
        data-ai-hint="abstract pattern"
        className="object-cover opacity-10"
      />
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4">
            <TypingEffect
              texts={["Hi, I'm Manoj", "I'm a Designer"]}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary"
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
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8cGVyc29uJTIwfGVufDB8fHx8MTc1NjgxODYwNXww&ixlib=rb-4.1.0&q=80&w=1080"
            width={600}
            height={600}
            alt="Hero"
            data-ai-hint="professional headshot"
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-primary"
          />
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zmxvd2Vyc3xlbnwwfHx8fDE3NTY4MTg4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Flower bouquet"
        width={1920}
        height={400}
        data-ai-hint="flower bouquet"
        className="absolute bottom-0 left-0 w-full h-auto object-cover opacity-20"
      />
    </section>
  );
}
