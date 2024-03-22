import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <ul className="list-group">
      {/* Mapea cada tarea y renderiza un componente TaskItem por cada una */}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
};

export default TaskList;