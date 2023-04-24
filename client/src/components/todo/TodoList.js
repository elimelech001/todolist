// TodoList.js

import React, { useEffect } from "react";
import useTodoList from "./useTodoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Box, Container, CssBaseline, List, } from "@mui/material";
import Typography from '@mui/material/Typography';


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
  const sortedTodos = todos.sort((a, b) => {
    const priorityOrder = { "high": 0, "medium": 1, "low": 2 }; // Define priority order
    return priorityOrder[b.priority] - priorityOrder[a.priority]; // Sort in descending order
  });
  // Implement TodoList component UI here

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h2" gutterBottom>
          Todo list
        </Typography>
        <TodoForm addTodo={addTodo} />
        <List sx={{ width: '100%', maxWidth: '50%', bgcolor: 'background.paper' }}>
          {sortedTodos.map((todo) => {
            return (
              <Todo
                todo={todo}
                updatePriority={updatePriority}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            );
          })}
        </List>
      </Container>

    </>
  )
};

export default TodoList;
