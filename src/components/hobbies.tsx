import { Music, BookOpen, Paintbrush, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import TypingEffect from './typing-effect';

const hobbies = [
  {
    name: 'Music',
    icon: <Music className="h-10 w-10 text-white" />,
    description: 'Listening to a wide variety of genres, from classical to contemporary.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtdXNpY3xlbnwwfHx8fDE3NTY4MTMxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'listening music'
  },
  {
    name: 'Reading',
    icon: <BookOpen className="h-10 w-10 text-white" />,
    description: 'Exploring different worlds and ideas through books of all kinds.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3N8ZW58MHx8fHwxNzU2ODIzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'library books'
  },
  {
    name: 'Drawing',
    icon: <Paintbrush className="h-10 w-10 text-white" />,
    description: 'Sketching and bringing ideas to life on paper.',
    image: 'https://images.unsplash.com/photo-1588864721457-5e937dda27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nfGVufDB8fHx8MTc1NjgyMzI3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'sketching pencil'
  },
  {
    name: 'Painting',
    icon: <Palette className="h-10 w-10 text-white" />,
    description: 'Expressing creativity with colors and canvases.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYWludGluZ3xlbnwwfHx8fDE3NTY4MjMyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'artist painting'
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <TypingEffect
              texts={["My Hobbies"]}
              className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary"
              loop={false}
            />
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding or designing, these are the activities that I enjoy.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => (
             <Card key={hobby.name} className="group relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
               <Image
                 src={hobby.image}
                 alt={hobby.name}
                 data-ai-hint={hobby.aiHint}
                 fill
                 className="object-cover transition-transform duration-300 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/60" />
               <div className="relative flex h-full flex-col items-center justify-center p-6 text-center text-white">
                 <div className="mb-4 rounded-full bg-primary/20 p-4 backdrop-blur-sm">
                   {hobby.icon}
                 </div>
                 <h3 className="text-2xl font-bold font-headline mb-2">{hobby.name}</h3>
                 <p className="text-sm opacity-90">{hobby.description}</p>
               </div>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
