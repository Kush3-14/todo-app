import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './store/reducers';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskLists';
import './App.css';

const store = createStore(tasksReducer);

const App = () => {
  const [tasks, setTasks] = useState([]);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  useEffect(() => {
    const initialTasks = loadTasksFromLocalStorage();
    setTasks(initialTasks);
  }, []);

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="display-4 mb-4">Todo App</h1>
        <TaskInput tasks={tasks} setTasks={setTasks} saveTasksToLocalStorage={saveTasksToLocalStorage} />
        <TaskList tasks={tasks} setTasks={setTasks} saveTasksToLocalStorage={saveTasksToLocalStorage} />
      </div>
    </Provider>
  );
};

export default App;