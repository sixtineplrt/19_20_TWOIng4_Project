import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button, Container, Col, Row, Card, CardImg } from 'reactstrap'
import './Page2.css';
import Image from './img.jpg';
import Formulaire from './Formulaire.js';
import Img from 'react-image'




class Page2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


            <div className='page'>  
                    <Row>
                        <Col xs={1}>

                        </Col>
                        <Col xs={10}>
                            <h1> Acheter album </h1>
                        </Col>
                        <Col xs={1}>
                           
                        </Col>
                    </Row>
                    <Row>
                        
                    <Col xs={4}>
                        
                            <CardImg top width="100%" src={Image} alt="Image" />
                          
                        </Col>
                        <Col xs={8}>
                            <Formulaire/>                      
                        </Col>
                    </Row>
                </div>
             


        );
    }

}

export default Page2;
