import React from "react";
import { BrowserRouter  , Route, Routes } from "react-router-dom";
import HomePage from "./components/common/HomePage";
import TodoList from "./components/todo/TodoList";
import LoginForm from "./components/auth/LoginPage";
import RegistrationForm from "./components/auth/RegistrationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/todos" element={<TodoList/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/registration" element={<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
