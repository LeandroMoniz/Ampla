import React from "react";
import "./styles.css"

import { Link } from "react-router-dom"

const Header = ( ) => {
    return (
        <nav>
           <Link To="/">Home</Link> 
        </nav>
        
    );
};

export default Header;