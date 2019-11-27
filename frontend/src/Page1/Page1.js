import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'reactstrap'



class Page1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

           
                
                <Container>
                <Row>
                    <Col>.col1</Col>
                    <Col>.col2</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    </Row>
                </Container>

                
        );
    }

}

export default Page1;
