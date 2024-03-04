import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, TodoFilter } from '../redux/todosSlice';
import { RootState } from '../redux/store';
import { Empty } from 'antd';
import { CheckOutlined, StopOutlined } from '@ant-design/icons';

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
      <h1 className="todolist__title">To Do List</h1>
      <input
        className="todolist__input"
        type="text"
        placeholder="Enter your task"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button className="todolist__btn primary" onClick={handleAddToDo}>
        Add task
      </button>
      <h2 className="todolist__title">My tasks:</h2>
      <div className="todolist__counter">
        <p className="todolist__counter-item">
          <StopOutlined style={{ fontSize: 24, color: 'red' }} /> Active:
          {activeTasksCount}
        </p>
        <p className="todolist__counter-item">
          <CheckOutlined style={{ fontSize: 24, color: 'green' }} /> Complete:
          {completeTasksCount}
        </p>
      </div>
      <div className="todolist__filters">
        <button
          className="todolist__btn secondary"
          onClick={() => handleFilterChange(TodoFilter.All)}
        >
          All
        </button>
        <button
          className="todolist__btn secondary"
          onClick={() => handleFilterChange(TodoFilter.Completed)}
        >
          Completed Only
        </button>
        <button
          className="todolist__btn secondary"
          onClick={() => handleFilterChange(TodoFilter.Active)}
        >
          Not Completed Only
        </button>
      </div>
      {filteredTodos.length === 0 ? (
        <Empty style={{ marginTop: 24 }} />
      ) : (
        <ul className="todolist__list">
          {filteredTodos.map((todo) => (
            <li
              className="todolist__list-item"
              key={todo.id}
              onClick={() => handleToogleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;
