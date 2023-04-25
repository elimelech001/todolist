import { useState } from "react";
import axios from "axios";

const useTodoList = () => {
    const [todos, setTodos] = useState([]);
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: token,  
    }

    // get todos
    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/todos");
            const fetchedTodos = response.data;
            setTodos(fetchedTodos);
        } catch (error) {
            alert(`Error: Error toggling todo status - ${error.response.data.error}`);
        }
    };

    // post todos
    const addTodo = async (e, description, priority) => {
        e.preventDefault()
        try {
            const newTodo = {
                description,
                completed: false,
                priority,
            };
            const response = await axios.post("http://localhost:5000/todos", newTodo, {
                headers
            });
            const addedTodo = response.data;
            setTodos([...todos, addedTodo]);
        } catch (error) {
            console.log(error.response.data.error);
            alert(`Error: Error toggling todo status - ${error.response.data.error||error.response.data.message}`);
        }
    };

    // delete todos
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`, {
                headers
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            alert(`Error: Error toggling todo status - ${error.response.data.error||error.response.data.message}`);
        }
    };

    // edit todos
    const editTodo = async (event, id, description) => {
        try {
            const updatedTodo = {
                description: description,
            };
            await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo, { headers });
            setTodos(
                todos.map((todo) => (todo.id === id ? { ...todo, description: description } : todo))
            );
        } catch (error) {
            alert(`Error: Error toggling todo status - ${error.response.data.error||error.response.data.message}`);
        }
    };

    // toggles the checkbox complete
    const toggleComplete = async (todo) => {
        try {
            await axios.put(`http://localhost:5000/todos/${todo.id}`, { completed: !todo.completed }, { headers });
            console.log('Todo status toggled successfully');
            setTodos(todos.map(item => item.id === todo.id ? { ...item, completed: !todo.completed } : item));
        } catch (error) {
            console.log(error);
            alert(`Error: Error toggling todo status - ${error.response.data.error||error.response.data.message}`);
        }
    };

    // updates a current todo
    const updatePriority = async (id, priority) => {
        try {
            const updatedTodo = {
                priority,
            };
            await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo, { headers });
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, priority } : todo
                )
            );
        } catch (error) {
            console.log(error);
            alert(`Error: Error toggling todo status - ${error.response.data.error}`);        }
    };

    return {
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleComplete,
        updatePriority,
        fetchTodos,
    };
};

export default useTodoList;
