import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbars">
                <ul>
                    <div className="logo"><Link exact className="active" to="/">BRAYDON B PHOTOGRAPHY</Link></div>
                    <Link className="active" to="/contact">CONTACT</Link>
                    <Link className="active" to="/bio">BIO</Link>
                    <Link className="active" to="/prints">PRINTS</Link>
                    <Link className="active" to="/gallery">GALLERY</Link>
                </ul>
            </div>
        )
    }
}

export default NavBar;