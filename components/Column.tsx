import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import TodoCard from './TodoCard';
import { useBoardStore } from '@/store/BoardStore';
import { useModalStore } from '@/store/ModalStore';

type Props = {
	id: TypedColumn;
	todos: Todo[];
	index: number;
};

const idToColumnText: {
	[key in TypedColumn]: string;
} = {
	todo: '해야할 일',
	inprogress: '하는 중',
	done: '완료',
};

export default function Column({ id, todos, index }: Props) {
	const [searchString, setNewTaskType] = useBoardStore((state) => [
		state.searchString,
		state.setNewTaskType,
	]);
	const [openModal] = useModalStore((state) => [state.openModal]);

	const handleAddTodo = () => {
		setNewTaskType(id);
		openModal();
	};
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					{/* render droppable in the column */}
					<Droppable droppableId={index.toString()} type='card'>
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={`p-2 rounded-2xl shadow-sm min-w-[200px] ${
									snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
								}`}
							>
								<h2 className='flex justify-between p-2 text-xl font-bold'>
									{idToColumnText[id]}

									<span className='px-2 py-1 text-sm font-normal text-gray-500 bg-gray-200 rounded-full'>
										{!searchString
											? todos.length
											: todos.filter((todo) =>
													todo.title.toLowerCase().includes(searchString.toLowerCase())
											  ).length}
									</span>
								</h2>

								<div className='space-y-2'>
									{todos.map((todo, index) => {
										if (
											searchString &&
											!todo.title.toLowerCase().includes(searchString.toLowerCase())
										)
											return null;

										return (
											<Draggable key={todo.$id} draggableId={todo.$id} index={index}>
												{(provided) => (
													<TodoCard
														todo={todo}
														index={index}
														id={id}
														innerRef={provided.innerRef}
														draggableProps={provided.draggableProps}
														dragHandleProps={provided.dragHandleProps}
													/>
												)}
											</Draggable>
										);
									})}

									{provided.placeholder}

									<div className='flex items-end justify-end p-2'>
										<button onClick={handleAddTodo} className='text-green-500 hover:text-green-600'>
											<PlusCircleIcon className='w-10 h-10' />
										</button>
									</div>
								</div>
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}
