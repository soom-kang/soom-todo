'use client';
import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

export default function Board() {
	const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore((state) => [
		state.board,
		state.getBoard,
		state.setBoardState,
		state.updateTodoInDB,
	]);

	useEffect(() => {
		getBoard();
	}, [getBoard]);

	const handleOnDragEnd = (result: DropResult) => {
		const { destination, source, type } = result;

		// check  if user dragged card outside of board
		if (!destination) return;

		// handle column drag
		if (type === 'column') {
			const entries = Array.from(board.columns.entries());
			const [removed] = entries.splice(source.index, 1);
			entries.splice(destination.index, 0, removed);
			const rearrangedColumns = new Map(entries);

			setBoardState({
				...board,
				columns: rearrangedColumns,
			});
		}

		// 인덱스 체크 부분. 보드 이동은 인스턴스하게 가능하지만 저장 X
		// 보드안 태스크 이동은 DB에 저장
		// 인덱스는  DND 라이브러리 ID 를 사용하지 않고 숫자로 이용 (0,1,2)
		const columns = Array.from(board.columns);

		if (source.droppableId === 'board') return;

		const startColIndex = columns[Number(source.droppableId)];
		const finishColIndex = columns[Number(destination.droppableId)];

		// console.log('board check', columns, source);

		const startCol: Column = {
			id: startColIndex[0],
			todos: startColIndex[1].todos,
		};

		const finishCol: Column = {
			id: finishColIndex[0],
			todos: finishColIndex[1].todos,
		};

		if (!startCol || !finishCol) return;

		if (source.index === destination.index && startCol === finishCol) return;

		const newTodos = startCol.todos;
		const [todoMoved] = newTodos.splice(source.index, 1);

		if (startCol.id === finishCol.id) {
			// Same Column task drag
			newTodos.splice(destination.index, 0, todoMoved);
			const newCol = {
				id: startCol.id,
				todos: newTodos,
			};
			const newColumns = new Map(board.columns);
			newColumns.set(startCol.id, newCol);

			updateTodoInDB(todoMoved, finishCol.id);
			setBoardState({ ...board, columns: newColumns });
		} else {
			// dragging to another column
			const finishTodos = Array.from(finishCol.todos);
			finishTodos.splice(destination.index, 0, todoMoved);

			const newColumns = new Map(board.columns);
			const newCol = {
				id: startCol.id,
				todos: newTodos,
			};

			newColumns.set(startCol.id, newCol);
			newColumns.set(finishCol.id, {
				id: finishCol.id,
				todos: finishTodos,
			});

			updateTodoInDB(todoMoved, finishCol.id);

			// Update in DB
			setBoardState({ ...board, columns: newColumns });
		}
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='board' direction='horizontal' type='column'>
				{(provided) => (
					<div
						className='grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{Array.from(board.columns.entries()).map(([id, column], index) => (
							<Column key={id} id={id} todos={column.todos} index={index} />
						))}

						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}
