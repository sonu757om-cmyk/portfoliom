import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, Tech Corp',
    quote: 'Working with this developer was a fantastic experience. Their attention to detail and commitment to quality is unparalleled. I highly recommend them for any web development project.',
    avatar: 'https://picsum.photos/100/100',
    aiHint: 'woman smiling',
  },
  {
    name: 'John Smith',
    title: 'Project Manager, Innovate LLC',
    quote: 'The final product exceeded our expectations. The website is not only beautiful but also incredibly fast and user-friendly. The team was responsive and a pleasure to work with.',
    avatar: 'https://picsum.photos/100/100',
    aiHint: 'man portrait',
  },
  {
    name: 'Emily White',
    title: 'Marketing Director, Creative Solutions',
    quote: 'Their ability to translate our vision into a functional and elegant website was impressive. They are a true professional with a deep understanding of modern web technologies.',
    avatar: 'https://picsum.photos/100/100',
    aiHint: 'professional woman',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              What People Are Saying
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from clients who have experienced the quality and dedication I bring to every project.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <Image
                        src={testimonial.avatar}
                        width={80}
                        height={80}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.aiHint}
                        className="rounded-full mb-4"
                      />
                      <p className="text-muted-foreground italic mb-4 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
