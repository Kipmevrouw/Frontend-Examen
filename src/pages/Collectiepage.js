import React, { Component } from "react";
import Dashboard from "../components/CollectiePageComponenten/Collectie/Dashboard/Dashboard";
import NavigationCollectiePage from "../components/CollectiePageComponenten/NavigationCollectiePage/NavigationCollectiePage";

const Collectiepage = () => {
    return(
        <>
            <NavigationCollectiePage 
                nav1="Collectie"
                nav2="Backlog"
                nav3="Contact"
                nav4="Uitloggen"
                image="logo.webp"
                buttonText="Delen"
            />
            <Dashboard
            />
            
                
        </>
    );
}

export default Collectiepage;