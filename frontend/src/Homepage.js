import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {
    Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { FaHome, FaPlus } from 'react-icons/fa';
import './Homepage.css';




class Homepage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <aside>
                <a href='./Page1'><FaHome /></a>
                <br /><br />
                <a href='./Page2'><FaPlus /></a>
            </aside>

        );
    }

}

export default Homepage;
