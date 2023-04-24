import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null); // State to track editing todo
    const [updatedTodoDescription, setUpdatedTodoDescription] = useState(""); // State to store updated todo description
    const [newTodoDescription, setNewTodoDescription] = useState(""); // State to store updated todo description

    useEffect(() => {
        // Fetch initial list of todos from API when component mounts
        axios.get('http://localhost:5000/todos') // Update the URL based on your API endpoint
            .then(response => {
                // Update state with fetched todos
                setTodos(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);
    // Function to create new todo
    const handleCreate = async () => {
        try {
            // Make POST request to create new todo
            const response = await axios.post('http://localhost:5000/todos', { description: newTodoDescription }); // Update the URL and data based on your API endpoint
            console.log('Todo created successfully');
            // Update state with new todo
            setTodos([...todos, response.data]);
            // Reset newTodoDescription state
            setNewTodoDescription("");
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    // Function to update todo
    const handleUpdate = async (todo) => {
        try {
            // Make PUT request to update todo
            await axios.put(`http://localhost:5000/todos/${todo.id}`, { description: updatedTodoDescription }); // Update the URL and data based on your API endpoint
            console.log('Todo updated successfully');
            // Update state with updated todo
            setTodos(todos.map(item => item.id === todo.id ? { ...item, description: updatedTodoDescription } : item));
            // Reset editingTodoId and updatedTodoDescription state
            setEditingTodoId(null);
            setUpdatedTodoDescription("");
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    // Function to handle double click event for editing todo
    const handleDoubleClick = (todo) => {
        setEditingTodoId(todo.id);
        setUpdatedTodoDescription(todo.description);
    };

    // Function to handle form submission for updating todo
    const handleSubmit = (event, todo) => {
        event.preventDefault();
        handleUpdate(todo);
    };

    // Function to handle delete todo
    const handleDelete = async (todo) => {
        try {
            // Make DELETE request to delete todo
            await axios.delete(`http://localhost:5000/todos/${todo.id}`); // Update the URL based on your API endpoint
            console.log('Todo deleted successfully');
            // Update state by removing deleted todo from todos list
            setTodos(todos.filter(item => item.id !== todo.id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Function to handle checkbox toggle for todo
    const handleToggle = async (todo) => {
        try {
            // Make PUT request to toggle todo status
            await axios.put(`http://localhost:5000/todos/${todo.id}`, { completed: !todo.completed }); // Update the URL and data based on your API endpoint
            console.log('Todo status toggled successfully');
            // Update state with toggled todo status
            setTodos(todos.map(item => item.id === todo.id ? { ...item, completed: !todo.completed } : item));
        } catch (error) {
            console.error('Error toggling todo status:', error);
        }
    };
    return (
        // Render TodoList component UI
        <div>
            <h1>Todos</h1>
            <form onSubmit={handleCreate}>
                <input
                    type="text"
                    value={newTodoDescription}
                    onChange={(event) => setNewTodoDescription(event.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo)}
                        />

                        {editingTodoId === todo.id ? (
                            // Render form for editing todo
                            <form onSubmit={(event) => handleSubmit(event, todo)}>
                                <input
                                    type="text"
                                    value={updatedTodoDescription}
                                    onChange={(event) => setUpdatedTodoDescription(event.target.value)}
                                />
                                <button type="submit">Update</button>
                                <button type="button" onClick={() => handleDelete(todo)}>Delete</button> {/* Delete Button */}
                            </form>
                        ) : (
                            // Render todo as text
                            <div>
                                <span onDoubleClick={() => handleDoubleClick(todo)}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                >
                                    {todo.description}
                                </span>

                                <span>Priority: {todo.priority}</span>
                                <button type="button" onClick={() => handleDelete(todo)}>Delete</button> {/* Delete Button */}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );


}
export default TodoList;