import Image from 'next/image';
import LOGO_IMAGE from '@/assets/soom_todo_logo.png';

export default function Footer() {
	return (
		<footer>
			<div className='flex flex-col items-center justify-center p-5 mx-auto md:flex-row bg-gray-500/10 rounded-t-2xl max-w-7xl'>
				<div className='fixed left-0 bottom-0 w-full h-96 bg-gradient-to-br to-pink-400 from-[#0071B3] rounded-md filter blur-3xl opacity-50 -z-50' />

				<Image
					src={LOGO_IMAGE}
					alt='soom todo logo'
					width={300}
					height={100}
					priority
					className='object-contain w-20 md:w-24 md:pb-0'
				/>
			</div>
		</footer>
	);
}
