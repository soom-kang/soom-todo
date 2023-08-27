import Modal from '@/components/Modal';
import './globals.css';
import type { Metadata } from 'next';

import { Poor_Story } from 'next/font/google';

const sans = Poor_Story({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'SOOM TODO',
	description: 'Based on ChatGPT, Trello DND',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko' className={sans.className}>
			<body className='bg-[#FSF8F8]'>
				{children}
				<Modal />
			</body>
		</html>
	);
}
