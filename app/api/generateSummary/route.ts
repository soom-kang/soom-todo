import openai from '@/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { todos } = await request.json();

	// communicate with open AI
	const response = await openai.chat.completions
		.create({
			model: 'gpt-3.5-turbo',
			temperature: 0.8,
			n: 1,
			stream: false,
			messages: [
				{
					role: 'system',
					content: `When responding, welcome the user always as Mr.Soom and say welcome to the SOOM-TODO App! Limit the response to 200 characters`,
				},
				{
					role: 'user',
					content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, In Progress and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
						todos
					)}`,
				},
			],
		})
		.withResponse();

	const { data } = response;

	return NextResponse.json(data.choices[0].message);
}
