import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'

const App = () => {
    return (
        <Router>
            <div>
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;