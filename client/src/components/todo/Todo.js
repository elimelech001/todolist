// Todo.js

import React, { useState } from "react";


const Todo = ({ deleteTodo, toggleComplete, editTodo, todo, updatePriority }) => {

  const [editingTodoId, setEditingTodoId] = useState(null); // State to track editing todo
  const [updatedDescription, setUpdatedDescription] = useState(""); // State to store updated todo description


  const handleDoubleClick = (todo) => {
    setEditingTodoId(todo.id);
    setUpdatedDescription(todo.description);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo)}
      />

      {
        editingTodoId === todo.id ? (
          // Render form for editing todo
          <form onSubmit={(event) => editTodo(event,todo.id,updatedDescription)}>
            <input
              type="text"
              value={updatedDescription}
              onChange={(event) => setUpdatedDescription(event.target.value)}
              required
            />
            <button type="submit">Update</button>
            {/* <button type="button" onClick={() => deleteTodo(todo)}>Delete</button> Delete Button */}
          </form>
        ) : (
          // Render todo as text
          <div>
            <span onDoubleClick={() => handleDoubleClick(todo)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              description:  {todo.description}
            </span>

          </div>

        )

      }
      <>
        <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>

        <select
          value={todo.priority}
          onChange={(event) => updatePriority(todo.id, event.target.value)}
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </>
    </>)

};

export default Todo;
