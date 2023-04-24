// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TodoList from "../todo/TodoList";


const NavbarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Button color="inherit">register</Button>
          <Button color="inherit">Login</Button>
          <Typography variant="h6" component={TodoList} sx={{ flexGrow: 1 }}>
            todolist
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

  );
};

export default NavbarComponent;
