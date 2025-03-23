import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
