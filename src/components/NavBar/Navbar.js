import React from "react";
import {Link, useNavigate} from "react-router-dom";

const NavBar=()=>{
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigate("/register");
    }
    return(
        <>
            { auth  ?
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/agency">Agency</Link></li>
                    <li><Link to="/addAgency">Add Agency</Link></li>
                    <li><Link to="/updateAgency">Update</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/login">Logout {JSON.parse(auth).username}</Link></li>
                </ul>
                : <ul className="navbar navbar-right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>
            }

        </>
    );
}

export default NavBar;