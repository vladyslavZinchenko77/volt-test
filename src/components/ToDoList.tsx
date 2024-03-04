import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, TodoFilter } from '../redux/todosSlice';
import { RootState } from '../redux/store';

import './ToDoList.scss';

const ToDoList = () => {
  const [newToDo, setNewToDo] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const handleAddToDo = () => {
    if (newToDo.trim().length < 20) {
      dispatch(addTodo(newToDo.trim()));
      setNewToDo('');
    }
  };

  const handleToogleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleFilterChange = (filter: TodoFilter) => {
    dispatch({ type: 'todos/setFilter', payload: filter });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === TodoFilter.All) {
      return true;
    } else if (filter === TodoFilter.Completed) {
      return todo.completed;
    } else {
      return !todo.completed;
    }
  });

  const completeTasksCount = todos.filter((todo) => todo.completed).length;

  const activeTasksCount = todos.length - completeTasksCount;

  return (
    <>
      <h1 className="todolist__title-main">To Do List</h1>
      <input
        className="todolist__input"
        type="text"
        placeholder="Enter your task"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button className="todolist__btn" onClick={handleAddToDo}>
        Add task
      </button>
      <h2 className="todolist__title-secondary">My tasks:</h2>
      <div>
        <p>Active tasks: {activeTasksCount}</p>
        <p>Complete tasks: {completeTasksCount}</p>
      </div>
      <div>
        <button onClick={() => handleFilterChange(TodoFilter.All)}>All</button>
        <button onClick={() => handleFilterChange(TodoFilter.Completed)}>
          Completed Only
        </button>
        <button onClick={() => handleFilterChange(TodoFilter.Active)}>
          Not Completed Only
        </button>
      </div>
      <ul className="todolist__list">
        {filteredTodos.map((todo) => (
          <li
            className="todolist__list-item"
            key={todo.id}
            onClick={() => handleToogleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
