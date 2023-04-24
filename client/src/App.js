import React from "react";
import { BrowserRouter  , Route, Routes } from "react-router-dom";
import HomePage from "./components/common/HomePage";
import TodoList from "./components/todo/TodoList";
import LoginForm from "./components/auth/LoginPage";
import RegistrationForm from "./components/auth/RegistrationPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/common/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarComponent/>} />
        <Route path="/todos" element={<TodoList/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/registration" element={<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
