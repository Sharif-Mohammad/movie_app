import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Movies/HomePage';
import AuthPage from './components/AuthPage/AuthPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
        </Routes>
    );
}

export default App;
