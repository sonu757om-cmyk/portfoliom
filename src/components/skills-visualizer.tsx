"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getSkillsVisualization } from '@/app/actions';
import { Loader2, Sparkles } from 'lucide-react';
import type { VisualizeSkillsOutput } from '@/ai/flows/skills-visualization';

export default function SkillsVisualizer() {
  const [skills, setSkills] = useState('NextJS, Firebase, Genkit, TailwindCSS, React, TypeScript');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VisualizeSkillsOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skills.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some skills.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    setResult(null);

    const response = await getSkillsVisualization({ skills });
    
    if ('error' in response) {
      toast({
        title: 'AI Error',
        description: response.error,
        variant: 'destructive',
      });
    } else {
      setResult(response);
    }
    setLoading(false);
  };

  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">AI-Powered Skills Visualizer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enter a comma-separated list of your skills and let our AI categorize and create a unique visual representation for you.
            </p>
          </div>
        </div>
        <Card className="max-w-3xl mx-auto mt-12">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="font-headline">Visualize Your Skills</CardTitle>
              <CardDescription>Enter your skills below, separated by commas.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., NextJS, Firebase, Genkit, TailwindCSS..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={4}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Visualizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Visualization
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {loading && !result && (
           <div className="flex flex-col items-center justify-center mt-8 space-y-4">
             <Loader2 className="h-10 w-10 animate-spin text-primary" />
             <p className="text-muted-foreground">AI is thinking...</p>
           </div>
        )}

        {result && (
          <Card className="max-w-3xl mx-auto mt-8 overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline">Your Skills Visualization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">AI-Generated Categories:</h3>
                <div className="flex flex-wrap gap-2">
                  {result.categories.map((category) => (
                    <Badge key={category} variant="default" className="bg-accent text-accent-foreground text-sm">{category}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Graphic Representation:</h3>
                <div className="relative aspect-video w-full rounded-lg border bg-white p-2 shadow-inner">
                    <Image
                      src={result.visualization}
                      alt="Skills Visualization"
                      fill
                      style={{objectFit: 'contain'}}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
