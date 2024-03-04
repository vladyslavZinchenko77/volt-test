import './ToDoList.scss';

const ToDoList = () => {
  return (
    <>
      <h1 className="todolist__title-main">To Do List</h1>
      <input
        className="todolist__input"
        type="text"
        placeholder="Enter your task"
      />
      <button className="todolist__btn">Add task</button>
      <h2 className="todolist__title-secondary">My tasks:</h2>
      <ul className="todolist__list">
        <li className="todolist__list-item">Task 1</li>
        <li className="todolist__list-item">Task 2</li>
        <li className="todolist__list-item">Task 3</li>
        <li className="todolist__list-item">Task 4</li>
        <li className="todolist__list-item">Task 5</li>
        <li className="todolist__list-item">Task 6</li>
      </ul>
    </>
  );
};

export default ToDoList;
