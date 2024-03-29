import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import '../styles/taskinput.css';

const TaskInput = ({ tasks, setTasks, saveTasksToLocalStorage }) => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { id: Date.now(), text: taskInput.trim(), completed: false };
      dispatch(addTask(newTask));
      setTasks([...tasks, newTask]);
      saveTasksToLocalStorage([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn-modern" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;