import React from "react";
import NavigationCollectiePage from "../components/CollectiePageComponenten/NavigationCollectiePage/NavigationCollectiePage";

const Collectiepage = () => {
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
                
        </>
    );
}

export default Collectiepage;