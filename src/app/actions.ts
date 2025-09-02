'use server';

import { visualizeSkills, VisualizeSkillsInput, VisualizeSkillsOutput } from '@/ai/flows/skills-visualization';
import { z } from 'zod';

export async function getSkillsVisualization(
  input: VisualizeSkillsInput
): Promise<VisualizeSkillsOutput | { error: string }> {
  try {
    const result = await visualizeSkills(input);
    return result;
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unexpected error occurred.' };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(
  input: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; message: string }> {
  try {
    // In a real application, you would add logic here to send an email,
    // save to a database, or notify a messaging service.
    // For this example, we'll just log it to the server console.
    console.log('New contact form submission:', input);
    
    // Simulate a successful submission
    return { success: true, message: "Thank you for reaching out. I'll get back to you soon." };
  } catch (e: any) {
    console.error('Error submitting contact form:', e);
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
