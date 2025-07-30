
'use server';
/**
 * @fileOverview A flow to generate blog post content.
 *
 * - getBlogPostContent - A function that returns content for a given blog post title.
 * - BlogPostContent - The return type for the getBlogPostContent function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const BlogPostContentInputSchema = z.string().describe('The title of the blog post.');

const BlogPostContentOutputSchema = z.object({
  content: z.string().describe('The full content of the blog post, consisting of 4 paragraphs.'),
});
export type BlogPostContent = z.infer<typeof BlogPostContentOutputSchema>;

export async function getBlogPostContent(title: string): Promise<BlogPostContent> {
  return blogPostFlow(title);
}

const prompt = ai.definePrompt({
  name: 'blogPostPrompt',
  input: { schema: BlogPostContentInputSchema },
  output: { schema: BlogPostContentOutputSchema },
  prompt: `You are an expert content writer for a construction company.
  
  Generate a 4-paragraph blog post in Indonesian about the following topic: {{{prompt}}}.
  
  The tone should be professional, informative, and engaging for an audience interested in construction, infrastructure, and public works.
  
  Ensure the content is well-structured and provides valuable insights related to the title.`,
});

const blogPostFlow = ai.defineFlow(
  {
    name: 'blogPostFlow',
    inputSchema: BlogPostContentInputSchema,
    outputSchema: BlogPostContentOutputSchema,
  },
  async (title) => {
    const { output } = await prompt(title);
    return output!;
  }
);
