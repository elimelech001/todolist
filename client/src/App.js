import React from "react";
import { BrowserRouter  , Route, Routes } from "react-router-dom";
import HomePage from "./components/common/HomePage";
import TodoList from "./components/todo/TodoList";
import LoginForm from "./components/auth/Auth";
import Auth from "./components/auth/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from "./components/common/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} >
        <Route path="/" element={<TodoList/>} />
        <Route path="/auth" element={<Auth/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
