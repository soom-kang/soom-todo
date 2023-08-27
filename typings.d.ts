declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_APPWRITE_PROJECT_ID: string;
		NEXT_PUBLIC_DATABASE_ID: string;
		NEXT_PUBLIC_TODOS_COLLECTION_ID: string;
		NEXT_PUBLIC_IMAGES_BUCKET_ID: string;
		OPENAI_API_KEY: string;
	}
}

interface Board {
	columns: Map<TypedColumn, Column>;
}

type TypedColumn = 'todo' | 'inprogress' | 'done';

interface Column {
	id: TypedColumn;
	todos: Todo[];
}

interface Todo {
	$id: string;
	$createdAt: string;
	title: string;
	status: TypedColumn;
	image?: Image;
}

interface Image {
	bucketId: string;
	fileId: string;
}
