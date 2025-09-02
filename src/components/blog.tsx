import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Art of Modern Web Design',
    description: 'Exploring the latest trends in UI/UX and how to create visually stunning and user-friendly websites.',
    image: 'https://picsum.photos/600/400',
    tags: ['UI/UX', 'Design', 'Web Dev'],
    href: '#',
    aiHint: 'web design'
  },
  {
    title: 'Getting Started with AI in Next.js',
    description: 'A beginner\'s guide to integrating generative AI features into your Next.js applications using modern tools.',
    image: 'https://picsum.photos/600/400',
    tags: ['Next.js', 'AI', 'Genkit'],
    href: '#',
    aiHint: 'artificial intelligence code'
  },
  {
    title: 'Mastering State Management in React',
    description: 'Dive deep into different state management libraries and patterns to build scalable and maintainable React apps.',
    image: 'https://picsum.photos/600/400',
    tags: ['React', 'State Management', 'TypeScript'],
    href: '#',
    aiHint: 'react code'
  },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From the Blog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sharing my thoughts on technology, design, and development.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="group flex flex-col overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <CardHeader className="p-0">
                <Link href={post.href} className="block overflow-hidden">
                  <Image
                    src={post.image}
                    width={600}
                    height={400}
                    alt={post.title}
                    data-ai-hint={post.aiHint}
                    className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardTitle className="font-headline text-xl mb-2">
                  <Link href={post.href} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground mb-4 flex-grow text-sm">{post.description}</p>
                <Link href={post.href} className="font-semibold text-primary inline-flex items-center text-sm mt-auto">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
