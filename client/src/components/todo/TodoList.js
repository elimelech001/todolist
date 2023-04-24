// TodoList.js

import React, { useEffect } from "react";
import useTodoList from "./useTodoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
    // Use the useTodoList custom hook to fetch todos and manage state

    const {
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleComplete,
        updatePriority,
        fetchTodos,
    } = useTodoList();

    useEffect(() => {
        fetchTodos(); // Fetch todos on component mount
    }, []);

    // Implement TodoList component UI here

    return (
        <>
        <h1>Todos</h1>
        <TodoForm addTodo={addTodo} />
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <Todo
                todo={todo}
                updatePriority={updatePriority}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </li>
          ))}
        </ul>
      </>
      
    )
};

export default TodoList;
