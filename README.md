<div align='center'> 
  <h1> Soom Todo </h1>

`OpenAI`, `Beautiful DND` 을 이용해 `Next.js 13 App Router` 로 구현한 TODO 앱

  <p>
    A comprehensive to-do board application built with modern web technologies.
  </p>
</div>

<h4 align="center">
  <a href="https://todo.soom.today">View Demo</a>
</h4>

### About The Project

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next%2Ejs&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/Zustand-4D2B1A?style=flat-square&logo=Ameba&logoColor=white"/>
  <img src="https://img.shields.io/badge/Appwrite-F02E65?style=flat-square&logo=appwrite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Beautiful DND-0052CC?style=flat-square&logo=trello&logoColor=white"/>
  <img src="https://img.shields.io/badge/Headless UI-66E3FF?style=flat-square&logo=headlessui&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Yarn Berry-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/>
</p>

---

#### 1. API Endpoints:

- `generateSummary/route.ts`: Handles the route for generating summaries.

#### 2. Styling:

- `globals.css`: Contains global styles for the application.

#### 3. Layout & Pages:

- `layout.tsx`: Defines the main layout structure of the application.
- `page.tsx`: Represents the main page component.

#### 4. Components:

- `Board.tsx`: Represents the main board where tasks are displayed.
- `Column.tsx`: Represents individual columns on the board.
- `Footer.tsx`: Component for the footer section.
- `Header.tsx`: Component for the header section.
- `Modal.tsx`: A generic modal component.
- `TaskTypeRadioGroup.tsx`: A radio group component to select task types.
- `TodoCard.tsx`: Represents individual to-do cards on the board.

#### 5. Utility Libraries:

- `fetchSuggestion.ts`: Fetches suggestions.
- `formatTodosForAI.ts`: Formats to-do items for AI processing.
- `getTodosGroupedByColumn.ts`: Groups to-do items by their respective columns.
- `getUrl.ts`: Utility to get URLs.
- `uploadImage.ts`: Handles image uploads.

#### 6. State Management:

- `BoardStore.ts`: Manages the state of the board.
- `ModalStore.ts`: Manages the state of modals.

This project provides a structured way to manage and visualize tasks on a board, with various components and utilities to enhance the user experience. The application is modular, with clear separation of concerns, making it scalable and maintainable.

---

### Project Tree

```
📦 soom-todo-board
├─ app
│  ├─ api
│  │  └─ generateSummary
│  │     └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ appwrite.ts
├─ assets
│  └─ soom_todo_logo.png
├─ components
│  ├─ Board.tsx
│  ├─ Column.tsx
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  ├─ Modal.tsx
│  ├─ TaskTypeRadioGroup.tsx
│  └─ TodoCard.tsx
├─ lib
│  ├─ fetchSuggestion.ts
│  ├─ formatTodosForAI.ts
│  ├─ getTodosGroupedByColumn.ts
│  ├─ getUrl.ts
│  └─ uploadImage.ts
├─ openai.ts
├─ store
│  ├─ BoardStore.ts
│  └─ ModalStore.ts
└─ typings.d.ts
```

---

<h4 align="center">
  Developed by SOOM
</h4>
