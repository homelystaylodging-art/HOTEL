'use server';
/**
 * @fileOverview An AI chat assistant that provides instant answers to common guest questions about the hotel.
 *
 * - aiChatAssistant - A function that handles guest queries using an AI assistant.
 * - AIChatAssistantInput - The input type for the aiChatAssistant function.
 * - AIChatAssistantOutput - The return type for the aiChatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatAssistantInputSchema = z
  .string()
  .describe(
    "The user's question about the hotel, its amenities, booking process, hygiene, or local area."
  );
export type AIChatAssistantInput = z.infer<typeof AIChatAssistantInputSchema>;

const AIChatAssistantOutputSchema = z
  .string()
  .describe("The AI assistant's answer to the user's question.");
export type AIChatAssistantOutput = z.infer<typeof AIChatAssistantOutputSchema>;

export async function aiChatAssistant(input: AIChatAssistantInput): Promise<AIChatAssistantOutput> {
  return aiChatAssistantFlow(input);
}

const hotelInfo = {
  name: 'Homely, stay lodging and boarding (HomelyStay Suites)',
  location: 'Near CEAT Road, Plot No 135 & 136, Ranjangaon Waluj MIDC, Chhatrapati Sambhaji Nagar.',
  targetAudience: 'corporate and budget travelers',
  vibe: 'affordable, convenient, and hygiene-focused',
  amenities: '24/7 Hot Water, Free Wi-Fi, and Secure Parking.',
  bookingInfo: 'Guests can book via WhatsApp for inquiries and bookings.',
  hygieneProtocol: 'We emphasize strict hygiene protocols to ensure a clean and safe environment for all guests.',
  localArea: 'Located in the industrial hub of Chhatrapati Sambhaji Nagar, near Waluj MIDC, offering convenient access to local businesses and attractions.',
};

const aiChatAssistantPrompt = ai.definePrompt({
  name: 'aiChatAssistantPrompt',
  input: {schema: AIChatAssistantInputSchema},
  output: {schema: AIChatAssistantOutputSchema},
  prompt: `You are an AI-powered chat assistant for '{{hotelInfo.name}}', a lodging and boarding hotel targeting {{hotelInfo.targetAudience}} in Chhatrapati Sambhaji Nagar.
Your goal is to answer guest questions about the hotel's amenities, hygiene protocols, booking process, and local area information, providing immediate and helpful responses.

The hotel's key information is as follows:
- Name: {{hotelInfo.name}}
- Location: {{hotelInfo.location}}
- Vibe: {{hotelInfo.vibe}}
- Key Amenities: {{hotelInfo.amenities}}
- Booking: {{hotelInfo.bookingInfo}}
- Hygiene: {{hotelInfo.hygieneProtocol}}
- Local Area: {{hotelInfo.localArea}}

Answer the following guest question based on the provided hotel information, ensuring your response is professional, clean, and conversion-oriented:
Question: {{{this}}}`,
});

const aiChatAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatAssistantFlow',
    inputSchema: AIChatAssistantInputSchema,
    outputSchema: AIChatAssistantOutputSchema,
  },
  async input => {
    const {output} = await aiChatAssistantPrompt(input);
    return output!;
  }
);
