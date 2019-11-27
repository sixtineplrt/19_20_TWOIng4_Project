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

            <div class="row">
                <div class="col-lg-2">
                    <aside>
                        <Button href='./Page1'><FaHome /></Button>
                        <br/><br/>
                        <Button href='./Page2'><FaPlus /></Button>
                    </aside>
                </div>
            </div>

        );
    }

}

export default Homepage;
