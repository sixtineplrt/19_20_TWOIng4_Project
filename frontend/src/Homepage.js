import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {
    Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import './Homepage.css';



class Homepage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="App">

                <Navbar>
                    <Link to='/user1'>
                        <Button>
                            Page1
                          </Button>
                    </Link>
                    <Link to='/user2'>
                        <Button>
                            Page2
                        </Button>
                    </Link>
                </Navbar>

            </div>

        );
    }

}

export default Homepage;
