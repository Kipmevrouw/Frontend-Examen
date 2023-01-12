import HomePage from "./pages/Homepage"
import Collectiepage from "./pages/Collectiepage";
import InlogCollectiePage from "./pages/InlogCollectiePage"
import BacklogChooserPage from "./pages/BacklogChooserPage"
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Login" element={<InlogCollectiePage />}></Route>
                <Route path="/Collectiepage" element={<Collectiepage />}></Route>
                <Route path="/BacklogChooserPage" element={<BacklogChooserPage />}></Route>
            </Routes>
        </>
    );
}

export default App;