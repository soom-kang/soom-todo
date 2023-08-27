import {
	DraggableProvidedDragHandleProps,
	DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useBoardStore } from '@/store/BoardStore';
import { useEffect, useState } from 'react';
import getUrl from '@/lib/getUrl';
import Image from 'next/image';

type Props = {
	todo: Todo;
	index: number;
	id: TypedColumn;
	innerRef: (element: HTMLElement | null) => void;
	draggableProps: DraggableProvidedDraggableProps;
	dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

export default function TodoCard({
	todo,
	index,
	id,
	innerRef,
	draggableProps,
	dragHandleProps,
}: Props) {
	const [deleteTask] = useBoardStore((state) => [state.deleteTask]);
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	useEffect(() => {
		if (todo.image) {
			const fetchImage = async () => {
				const url = await getUrl(todo.image!);

				if (url) {
					setImageUrl(url.toString());
				}
			};

			fetchImage();
		}
	}, [todo]);

	return (
		<div
			className='space-y-2 bg-white rounded-md drop-shadow-md'
			{...draggableProps}
			{...dragHandleProps}
			ref={innerRef}
		>
			<div className='flex items-center justify-between p-5'>
				<p>{todo.title}</p>
				<button
					onClick={() => deleteTask(index, todo, id)}
					className='text-red-500 hover:text-red-600'
				>
					<XCircleIcon className='w-8 h-8 ml-5' />
				</button>
			</div>

			{/* add image here... */}
			{imageUrl && (
				<div className='relative h-full w-full rounded-b-md'>
					<Image
						src={imageUrl}
						alt='Task Image'
						width={400}
						height={200}
						priority
						className='w-full object-contain rounded-b-md'
					/>
				</div>
			)}
		</div>
	);
}
