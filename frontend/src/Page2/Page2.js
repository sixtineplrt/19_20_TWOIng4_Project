import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'reactstrap'
import './Page2.css';
import Img from 'react-image'




class Page2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="App">

                <div className="header">
                    Acheter Album
                    <Img src="./img.jpg/171x180" rounded />
                </div>
                <div className="img">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                                <Img src="./img.jpg" rounded />
                        </Col>
                        <Col xs={6} md={4}>
                                <Img src="./img.jpg" roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                                <Img src="./img.jpg" thumbnail />
                        </Col>
                    </Row>
                    </Container>
                </div>

            </div>
        );
    }

}

export default Page2;
