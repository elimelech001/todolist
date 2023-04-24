// TodoForm.js

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

const TodoForm = ({ addTodo }) => {
    const [newTodoDescription, setNewTodoDescription] = useState(""); // State to store updated todo description
    const [updatePriority, setUpdatedPriority] = useState("medium");
    const handleSubmit = (e, newTodoDescription, updatePriority) => {
        addTodo(e, newTodoDescription, updatePriority)
        setNewTodoDescription("")
        setUpdatedPriority("medium")
    }
    return (
        <>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        placeholder="enter task"
                        id="outlined-basic"
                        variant="outlined"
                        name="description"
                        type="text"
                        value={newTodoDescription}
                        onChange={event => setNewTodoDescription(event.target.value)}
                        required
                    />
                    <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={updatePriority}
                        onChange={event => setUpdatedPriority(event.target.value)}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                </Box>
                <Button
                    onClick={e => handleSubmit(e, newTodoDescription, updatePriority)}
                    variant="contained"
                    endIcon={<SendIcon />}>
                    Send
                </Button>
            </FormControl>

        </>
    )
};

export default TodoForm;
