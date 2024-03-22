import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica si el título está vacío
    if (!title.trim()) {
      alert('Por favor, ingresa una tarea válida.');
      return;
    }
    // Si el título no está vacío, llama a la función onAdd para agregar la tarea
    onAdd(title);
    // Restablece el estado del título a un valor vacío después de agregar la tarea
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe una nueva tarea"
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
