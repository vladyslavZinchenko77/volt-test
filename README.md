ToDo List Application

The ToDo List application is a simple task management tool built with React, Redux, and Ant Design. It allows users to add, complete, and filter tasks, as well as view the counts of active and completed tasks.

Features

- Add new tasks with a maximum length of 20 characters
- Toggle task completion status by clicking on the task text
- Filter tasks by status (All, Completed, Active)
- View the count of active and completed tasks
- Error and success notifications using Ant Design's Alert component

Installation

To install and run the application locally, follow these steps:

Clone the repository:

git clone https://github.com/vladyslavZinchenko77/volt-test
Navigate to the project directory:

cd todo-list-app
Install the dependencies:

npm install
Start the development server:

npm start
The application should now be running at http://localhost:5173/.

Usage

Adding a new task: Enter the task text in the input field and click the "Add task" button. If the task text is empty or longer than 20 characters, an error alert will be displayed.
Completing a task: Click on the task text to toggle its completion status. Completed tasks will have a line-through style.
Filtering tasks: Use the "All", "Completed Only", and "Not Completed Only" buttons to filter the tasks by their completion status.
Viewing task counts: The counts of active and completed tasks are displayed above the task list.

Project Structure
The project structure is organized as follows:

components/ToDoList.tsx: The main component that renders the ToDo List application.
redux/store.ts: The Redux store configuration.
redux/todosSlice.ts: The Redux slice for managing the todo list state.
App.tsx: The root component that provides the Redux store context.
index.tsx: The entry point of the application.

Dependencies
The application uses the following dependencies:

-React
-Redux
-React-Redux
-Ant Design
-@ant-design/icons
