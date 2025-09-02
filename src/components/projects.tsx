import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import TypingEffect from './typing-effect';

const projects = [
  {
    title: 'Project One',
    description: 'A web application for managing tasks and boosting productivity. Built with Next.js, TypeScript, and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8Ym9va3xlbnwwfHx8fDE3NTY4MTI5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'AI'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'task management'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a modern design and seamless user experience. Features product listings, a shopping cart, and a checkout process.',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxib29rc3xlbnwwfHx8fDE3NTY4MTMwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Firebase', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'ecommerce website'
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard that presents complex data in an intuitive and interactive way. Powered by D3.js and React.',
    image: 'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxib29rfGVufDB8fHx8MTc1NjgxMjkzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'D3.js', 'Data Viz'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'data dashboard'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <TypingEffect
              texts={["Featured Projects"]}
              className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary"
            />
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each one demonstrates my skills in creating modern and functional web applications.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group relative flex flex-col overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <CardHeader className="p-0 z-10">
                <Image
                  src={project.image}
                  width={600}
                  height={400}
                  alt={project.title}
                  data-ai-hint={project.aiHint}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-105"
                />
              </CardHeader>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col p-6 space-y-4 bg-card transition-transform duration-300 ease-in-out group-hover:-translate-y-16">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="text-muted-foreground flex-grow opacity-0 h-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:h-auto">{project.description}</p>
                 <CardFooter className="p-0 pt-4">
                    <div className="flex w-full justify-between">
                      <Button asChild variant="outline">
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild variant="default">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
