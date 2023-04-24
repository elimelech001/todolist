// TodoForm.js

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [newTodoDescription, setNewTodoDescription] = useState(""); // State to store updated todo description
    const [updatePriority, setUpdatedPriority] = useState("medium");

    return (
        <form onSubmit={(e) => addTodo(e, newTodoDescription, updatePriority)}  >
            <input
                name="description"
                type="text"
                value={newTodoDescription}
                onChange={(event) => setNewTodoDescription(event.target.value)}
                required
            />
            <select
                name="priority"
                value={updatePriority}
                onChange={(event) => setUpdatedPriority(event.target.value)}
                required
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Todo</button>
        </form>
    )
};

export default TodoForm;
