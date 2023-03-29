import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return(
        <nav>
            <img src={airbnbLogo} alt="airbnbLogo" className="airbnb_logo"/>
        </nav>
    )
}