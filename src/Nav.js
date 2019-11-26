import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
    componentWillUnmount() {
        console.log("unmounted");
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>first thing</li>
                    <li>second thing</li>
                    <li>third thing</li>
                </ul>
            </nav>
        )
    }
}
export default Nav;