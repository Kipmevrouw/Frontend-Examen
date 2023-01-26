import React, { Component } from "react";
import DashboardVrienden from "../components/CollectiePageComponenten/Collectie/Friends/DashboardVrienden/DashboardVrienden";
import NavigationCollectiePage from "../components/CollectiePageComponenten/NavigationCollectiePage/NavigationCollectiePage";

const CollectiepageFriends = () => {
    return(
        <>
            <NavigationCollectiePage 
                nav1="Collectie"
                nav2="Backlog"
                nav3="Contact"
                nav4="Uitloggen"
                image="logo.png"
                buttonText="Delen"
            />
            <DashboardVrienden
            />
            
                
        </>
    );
}

export default CollectiepageFriends;