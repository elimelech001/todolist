// Todo.js

import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";

const Todo = ({ deleteTodo, toggleComplete, editTodo, todo, updatePriority }) => {

  const [editingTodoId, setEditingTodoId] = useState(null); // State to track editing todo
  const [updatedDescription, setUpdatedDescription] = useState(""); // State to store updated todo description

  const handleBlur = (event, id, updatedDescription) => {
    setEditingTodoId(null);
    editTodo(event, id, updatedDescription)
  }


  const handleDoubleClick = (todo) => {
    setEditingTodoId(todo.id);
    setUpdatedDescription(todo.description);
  };

  return (
    <>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onChange={() => toggleComplete(todo)}//event.name:!todo.completed
            inputProps={{ 'aria-labelledby': todo.id }}
          />
        </ListItemIcon>
        {editingTodoId === todo.id ? (
          <input
            type="text"
            value={updatedDescription}
            onChange={event => setUpdatedDescription(event.target.value)}
            onBlur={event => handleBlur(event, todo.id, updatedDescription)}
            autoFocus
          />
        ) : (
          <ListItemText
            className={`description ${todo.completed ? "text-muted text-decoration-line-through" : ""
              }`}
            id={todo.id}
            primary={todo.description}
            onDoubleClick={e=>handleDoubleClick(todo)}
          />
        )}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">PRIORITY</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={todo.priority}
            onChange={event => updatePriority(todo.id, event.target.value)}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        {/* <Stack direction="row" spacing={1}> */}
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={() => deleteTodo(todo.id)}
          />
        </IconButton>
        {/* </Stack> */}
      </ListItemButton>


    </>
  );


};

export default Todo;
