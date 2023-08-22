'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

export default function Header() {
	const LOGO_IMAGE =
		'https://private-user-images.githubusercontent.com/4216651/262282213-643bfbba-d6e8-46e5-bffd-89dd64d75b5b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTI2OTI0OTIsIm5iZiI6MTY5MjY5MjE5MiwicGF0aCI6Ii80MjE2NjUxLzI2MjI4MjIxMy02NDNiZmJiYS1kNmU4LTQ2ZTUtYmZmZC04OWRkNjRkNzViNWIucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDgyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA4MjJUMDgxNjMyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDQxMDNhNjg5NjU2NzA0OTZkMTk1ZWIyMjg2NDdkNzc3MTU0Njk0MzU2NTk1Y2MzNTBhMzI3ZTI0YWQwOThjNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.1ol04fhWwPUSeLD1-98rI1v355aQGII8taFYUeJeZR0';

	return (
		<header>
			<div className='flex flex-col items-center p-5 md:flex-row bg-gray-500/10 rounded-2xl'>
				{/* bg gradient div */}
				<div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0071B3] rounded-md filter blur-3xl opacity-50 -z-50' />

				<Image
					src={LOGO_IMAGE}
					alt='soom todo logo'
					width={300}
					height={100}
					className='object-contain w-44 md:w-56 md:pb-0'
				/>

				<div className='flex items-center justify-end flex-1 w-full space-x-5'>
					{/* Search Box */}
					<form className='flex items-center flex-1 p-2 space-x-5 bg-white rounded-md shadow-md md:flex-initial'>
						<MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
						<input type='text' placeholder='Search' className='flex-1 p-2 outline-none' />
						<button type='submit' hidden>
							Search
						</button>
					</form>

					{/* Avartar */}
					<Avatar name='Soomyung Kang' round color='#0071B3' size='50' />
				</div>
			</div>

			<div className='flex items-center justify-center px-5 py-2 md:py-5'>
				<p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0071B3] p-5'>
					<UserCircleIcon className='inline-block w-10 h-10 text-[#0071B3] mr-1' />
					GPT is summerizing your tasks for day
				</p>
			</div>
		</header>
	);
}
