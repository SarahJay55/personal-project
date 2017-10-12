import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbars">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">LOGO</NavLink></li>
                    <li><NavLink activeClassName="active" to="/gallery">Gallery</NavLink></li>
                    <li><NavLink activeClassName="active" to="/prints">Prints</NavLink></li>
                    <li><NavLink activeClassName="active" to="/bio">Bio</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;