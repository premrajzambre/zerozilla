import React from "react";
import {Link} from "react-router-dom";

const NavBar=()=>{
    return(
        <>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/agency">Agency</Link></li>
                <li><Link to="/addAgency">Add Agency</Link></li>
                <li><Link to="/updateAgency">Update</Link></li>
                <li><Link to="/">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </>
    );
}

export default NavBar;