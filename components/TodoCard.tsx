'use client';

import {
	DraggableProvidedDragHandleProps,
	DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';
import { XCircleIcon } from '@heroicons/react/24/solid';

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
	return (
		<div
			className='space-y-2 bg-white rounded-md drop-shadow-md'
			{...draggableProps}
			{...dragHandleProps}
			ref={innerRef}
		>
			<div className='flex items-center justify-between p-5'>
				<p>{todo.title}</p>
				<button className='text-red-500 hover:text-red-600'>
					<XCircleIcon className='w-8 h-8 ml-5' />
				</button>
			</div>

			{/* add image here... */}

			{/* {imageUrl &&} */}
		</div>
	);
}
