import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ToDoList from './pages/ToDoList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
