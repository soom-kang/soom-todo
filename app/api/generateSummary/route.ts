import openai from '@/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { todos } = await request.json();

	// communicate with open AI
	const response = await openai.chat.completions
		.create({
			model: 'gpt-3.5-turbo',
			// temperature: 0.8,
			// n: 1,
			// stream: false,
			messages: [
				{
					role: 'system',
					content: `When responding, Always answer in Korean.`,
				},
				{
					role: 'user',
					content: `Tell me today’s quote`,
				},
				// Hi there, provide a summary of the following todos. Count how many todos are in each category such as todo(해야할 일), inprogress(하는 중) and done(완료), then tell the user to have a great day! Here's the data: ${JSON.stringify(
				// 	todos
				// )}.
				// say welcome to the "SOOM TODO" App!
				// Limit the response to 300 characters.
			],
		})
		.withResponse();

	const { data } = response;

	const resData = `SOOM-TODO 앱에 방문해주셔서 감사합니다. 해야할 일은 ${todos.todo}개, 하는 중은 ${todos.inprogress}개, 완료된 일은 ${todos.done}개 입니다. \n${data.choices[0].message.content}`;

	return NextResponse.json(resData);
}
