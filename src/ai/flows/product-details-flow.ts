
'use server';
/**
 * @fileOverview A flow to generate product details.
 *
 * - getProductDetails - A function that returns details for a given product name.
 * - ProductDetails - The return type for the getProductDetails function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ProductDetailsInputSchema = z.string().describe('The name of the construction product.');

const ProductDetailsOutputSchema = z.object({
  benefits: z.string().describe('The benefits and uses of the product.'),
  ingredients: z.string().describe('The material composition of the product.'),
  usage: z.string().describe('Instructions on how to use the product.'),
});
export type ProductDetails = z.infer<typeof ProductDetailsOutputSchema>;

export async function getProductDetails(productName: string): Promise<ProductDetails> {
  return productDetailsFlow(productName);
}

const prompt = ai.definePrompt({
  name: 'productDetailsPrompt',
  input: { schema: ProductDetailsInputSchema },
  output: { schema: ProductDetailsOutputSchema },
  prompt: `You are an expert in construction materials.
  
  Generate a detailed description for the following product: {{{prompt}}}.
  
  Provide the information in Indonesian.
  
  Describe the following aspects:
  - Manfaat & kegunaan (Benefits and uses)
  - Kandungan bahan produk (Product ingredients/composition)
  - Cara pemakaian produk (How to use the product)
  
  Ensure the descriptions are clear, concise, and suitable for a product catalog.`,
});

const productDetailsFlow = ai.defineFlow(
  {
    name: 'productDetailsFlow',
    inputSchema: ProductDetailsInputSchema,
    outputSchema: ProductDetailsOutputSchema,
  },
  async (productName) => {
    const { output } = await prompt(productName);
    return output!;
  }
);
