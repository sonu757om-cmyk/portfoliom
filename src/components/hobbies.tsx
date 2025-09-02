import { Music, BookOpen, Paintbrush, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const hobbies = [
  {
    name: 'Music',
    icon: <Music className="h-10 w-10 text-primary" />,
    description: 'Listening to a wide variety of genres, from classical to contemporary.',
  },
  {
    name: 'Reading',
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    description: 'Exploring different worlds and ideas through books of all kinds.',
  },
  {
    name: 'Drawing',
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    description: 'Sketching and bringing ideas to life on paper.',
  },
  {
    name: 'Painting',
    icon: <Palette className="h-10 w-10 text-primary" />,
    description: 'Expressing creativity with colors and canvases.',
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">My Hobbies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding or designing, these are the activities that I enjoy.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => (
            <Card key={hobby.name} className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                {hobby.icon}
                <CardTitle className="font-headline text-xl mt-4">{hobby.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
