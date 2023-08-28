'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';
import { useEffect, useState } from 'react';
import fetchSuggestion from '@/lib/fetchSuggestion';
import LOGO_IMAGE from '@/assets/soom_todo_logo.png';

export default function Header() {
	const [board, searchString, setSearchString] = useBoardStore((state) => [
		state.board,
		state.searchString,
		state.setSearchString,
	]);

	const [loading, setLoading] = useState<boolean>(false);
	const [suggestion, setSuggestion] = useState<string>('');

	useEffect(() => {
		if (board.columns.size === 0) return;
		setLoading(true);

		const fetchSuggestionFunc = async () => {
			const suggestion = await fetchSuggestion(board);
			setSuggestion(suggestion);
			setLoading(false);
		};

		fetchSuggestionFunc();
	}, [board]);

	return (
		<header>
			<div className='flex flex-col items-center p-5 mx-auto md:flex-row bg-gray-500/10 rounded-b-2xl max-w-7xl'>
				{/* bg gradient div */}
				<div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0071B3] rounded-md filter blur-3xl opacity-50 -z-50' />

				<Image
					src={LOGO_IMAGE}
					alt='soom todo logo'
					width={300}
					height={100}
					priority
					className='object-contain w-44 md:w-56 md:pb-0'
				/>

				<div className='flex items-center justify-end flex-1 w-full space-x-5'>
					{/* Search Box */}
					<form className='flex items-center flex-1 p-2 space-x-5 bg-white rounded-md shadow-md md:flex-initial'>
						<MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
						<input
							type='text'
							placeholder='검색'
							value={searchString}
							onChange={(e) => setSearchString(e.target.value)}
							className='flex-1 p-2 outline-none'
						/>
						<button type='submit' hidden>
							검색
						</button>
					</form>

					{/* Avartar */}
					{/* <Avatar name='Soomyung Kang' round color='#0071B3' size='50' /> */}
				</div>
			</div>

			<div className='flex items-center justify-center px-5 py-2 md:py-5'>
				<p className='flex items-center text-md font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0071B3] p-5 max-sm:flex-col'>
					<UserCircleIcon
						className={`inline-block w-10 h-10 text-[#0071B3] mr-1 ${loading && 'animate-spin'}`}
					/>
					<span>
						{suggestion && !loading ? suggestion : 'GPT 가 생성된 일정을 요약하는 중입니다 ...'}
					</span>
				</p>
			</div>
		</header>
	);
}
