import HomePage from "./pages/Homepage"
import "./App.css";
import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

const App = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;