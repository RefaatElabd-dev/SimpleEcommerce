import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">Shopping cart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </li>
            </ul>
            </div>
            <span className="badge badge-primary">
                <i className="fas fa-shopping-cart" ></i>
                <span className="badge badge-danger m-1">{props.total}</span>
            </span>
        </nav> 
     );
}
 
export default NavBar;