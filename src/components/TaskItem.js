import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate(task.id, editedTitle, editedStatus);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };





return (
  <li className={`list-group-item ${task.status === 'done' ? 'list-group-item-success' : ''}`}>
    {isEditing ? ( // Si está en modo de edición, muestra los campos de entrada para editar
      <>
        <input type="text" className="form-control mb-2" value={editedTitle} onChange={handleTitleChange} />
        <select className="form-select mb-2" value={editedStatus} onChange={handleStatusChange}>
          <option value="todo">Por hacer</option>
          <option value="in-progress">En progreso</option>
          <option value="done">Finalizada</option>
        </select>
        <button className="btn btn-primary me-2" onClick={handleUpdate}>
          Guardar
        </button>
        <button className="btn btn-secondary" onClick={toggleEdit}>
          Cancelar
        </button>
      </>
    ) : ( // Si no está en modo de edición, muestra el título y el estado de la tarea
      <>
        <span>{task.title} - {task.status === 'todo' ? 'Por hacer' : task.status === 'in-progress' ? 'En progreso' : 'Finalizada'}</span>
        <div>
          <button className="btn btn-success me-2" onClick={toggleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn btn-danger me-2" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          {task.status === 'done' && <FontAwesomeIcon icon={faCheckCircle} />}
        </div>
      </>
    )}
  </li>
);
};

export default TaskItem;
