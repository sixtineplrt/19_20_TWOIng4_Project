import React from 'react';
import { Component, PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import './Musique.css';
import "bootstrap/dist/css/bootstrap.css";



class Musique extends Component {

    constructor(props) {
        super(props);
    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';
    render() {
        return (
            <div className='musique'>

                <p>Musique</p>

            </div>
        );
    }

}

export default Musique;