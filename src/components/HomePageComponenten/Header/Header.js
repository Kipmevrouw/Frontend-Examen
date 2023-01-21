import "./Header.css";
import React from "react";

const Header = (props) => {
    return(
        <header class="header" id="header">
            <h1 class="header__h1">{props.bigTitle || "Default big Title"}</h1>
        </header>
    );
}

export default Header;