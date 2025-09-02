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
    image: 'https://picsum.photos/600/400',
    tags: ['Next.js', 'TypeScript', 'AI'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'task management'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a modern design and seamless user experience. Features product listings, a shopping cart, and a checkout process.',
    image: 'https://picsum.photos/600/400',
    tags: ['React', 'Firebase', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'ecommerce website'
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard that presents complex data in an intuitive and interactive way. Powered by D3.js and React.',
    image: 'https://picsum.photos/600/400',
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
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  width={600}
                  height={400}
                  alt={project.title}
                  data-ai-hint={project.aiHint}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
