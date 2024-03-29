// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../store/actions';
import '../styles/tasklist.css'; 
const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center container1 ${task.completed ? 'completed' : ''}`}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <div>
            <button className="btn btn-danger m-2" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`} onClick={() => handleToggleTask(task.id)}>
              {task.completed ? 'Undo' : 'Done'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
