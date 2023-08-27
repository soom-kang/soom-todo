import Board from '@/components/Board';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
	return (
		<main className='grid grid-cols-[1fr] grid-rows-[auto_1fr_auto] min-h-screen gap-5'>
			{/* Header */}
			<Header />

			{/* Board */}
			<Board />

			{/* footer */}
			<Footer />
		</main>
	);
}
