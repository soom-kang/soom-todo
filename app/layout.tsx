import Modal from '@/components/Modal';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'SOOM TODO',
	description: 'Based on ChatGPT, Trello DND',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		userScalable: false,
	},
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko'>
			<body className='bg-[#FSF8F8]'>
				{children}
				<Modal />
			</body>
		</html>
	);
}
