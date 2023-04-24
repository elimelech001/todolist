// HomePage.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Login from "../auth/LoginPage";
import TodoList from "../todo/TodoList";
import RegisterForm from "../auth/RegistrationPage";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" render={() => <div>Home Page Content</div>} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/registration"  element={<RegisterForm/>}  />
        <Route path="/login"  element={<Login/>}  />
      </Routes>
    </div>
  );
};

export default HomePage;
