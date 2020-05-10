import React, { Component } from 'react';
import logo from '../assets/new-logo.png'
import './navbar.css'
class navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar">
                <img src={logo} />
                Login
            </div>
        );
    }
}

export default navbar;