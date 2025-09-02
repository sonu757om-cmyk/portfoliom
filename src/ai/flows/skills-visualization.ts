'use server';
/**
 * @fileOverview A skills visualization AI agent.
 *
 * - visualizeSkills - A function that handles the skills visualization process.
 * - VisualizeSkillsInput - The input type for the visualizeSkills function.
 * - VisualizeSkillsOutput - The return type for the visualizeSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeSkillsInputSchema = z.object({
  skills: z
    .string()
    .describe(
      'A comma separated list of skills to be visualized, for example: NextJS, Firebase, Genkit'
    ),
});
export type VisualizeSkillsInput = z.infer<typeof VisualizeSkillsInputSchema>;

const VisualizeSkillsOutputSchema = z.object({
  categories: z.array(z.string()).describe('The categories of skills.'),
  visualization: z
    .string()
    .describe(
      'A graphic representation of the skills and their categories as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // prettier-ignore
    ),
});
export type VisualizeSkillsOutput = z.infer<typeof VisualizeSkillsOutputSchema>;

export async function visualizeSkills(input: VisualizeSkillsInput): Promise<VisualizeSkillsOutput> {
  return visualizeSkillsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeSkillsPrompt',
  input: {schema: VisualizeSkillsInputSchema},
  output: {schema: VisualizeSkillsOutputSchema},
  prompt: `You are an AI tool that analyzes skills, categorizes them, and creates a graphic representation to showcase expertise.

  Analyze the following skills and categorize them, respond with the categories in a JSON array format:
  Skills: {{{skills}}}

  Then create a graphic representation of the skills and their categories and respond with a data URI.
  Ensure that the graphic representation is visually appealing and easy to understand.
  You MUST respond with a JSON object formatted like this:
  \n{
    categories: [string, string, string...], // Categories of skills
    visualization: string // A data URI of the graphic representation
  }
  \nExample categories can be: ['Frontend Development', 'Backend Development', 'AI']`,
});

const visualizeSkillsFlow = ai.defineFlow(
  {
    name: 'visualizeSkillsFlow',
    inputSchema: VisualizeSkillsInputSchema,
    outputSchema: VisualizeSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
