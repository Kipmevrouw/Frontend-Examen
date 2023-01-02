import HomePage from "./pages/Homepage"
import Collectiepage from "./components/Collectiepage/Collectiepage";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Login" element={<LoginForm />}></Route>
            <Route path="/Collectiepage" element={<Collectiepage />}></Route>
        </Routes>
    );
}

export default App;