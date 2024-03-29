import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './store/reducers';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskLists';
import './App.css'
const store = createStore(tasksReducer);

const App = () => {
  // Load tasks from local storage on app initialization
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      store.dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(storedTasks) });
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  store.subscribe(() => {
    const tasks = store.getState().tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="display-4 mb-4">Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
