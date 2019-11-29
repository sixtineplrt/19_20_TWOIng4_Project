import React from 'react';
import { Component, Carousel } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import './Page1.css';
import "bootstrap/dist/css/bootstrap.css";
import Graphique from '../Component/Graphique';
import Graphique1 from '../Component/Graphique1';
import Vente from '../Component/Vente';
import Argent from '../Component/Argent';
import Musique from '../Component/Musique';
import Fiche from '../Component/Fiche';
import Carou from '../Component/Carou';



class Page1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='page'>
                <Row>
                    <Col xs={4}>
                        <Fiche/>
                    </Col>
                    <Col xs={8}>
                        <Col xs={12}>

                            <Musique />
                        </Col>
                        <Row>
                        <Col xs={6}>
                            <Argent />
                        </Col>
                        <Col xs={6}>
                            <Vente />
                            </Col>
                            <Col xs={6}>
                                <Graphique1 />
                            </Col>
                            <Col xs={6}>
                                <Graphique />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        );
    }

}

export default Page1;
