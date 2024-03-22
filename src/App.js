import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', status: 'todo' },
    { id: 2, title: 'Preparar la cena', status: 'in-progress' },
    { id: 3, title: 'Llamar al médico', status: 'done' }
  ]);

  const addTask = (title) => {
    const newTask = {
      id: Math.random(),
      title: title,
      status: 'todo'
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        if (task.status === 'todo') {
          return { ...task, status: 'in-progress' };
        } else if (task.status === 'in-progress') {
          return { ...task, status: 'done' };
        } else {
          return { ...task, status: 'todo' };
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]); // Elimina todas las tareas estableciendo el estado de las tareas como un array vacío
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Lista de Tareas</h1>
      <AddTaskForm onAdd={addTask} />
      <hr />
      {/* Agrega un botón para eliminar todas las tareas */}
      <button className="btn btn-danger mb-3" onClick={deleteAllTasks}>Eliminar todas las tareas</button>
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default App;
