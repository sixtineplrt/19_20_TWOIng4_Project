import React from 'react';
import { Component, PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {Row, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap'
import './Fiche.css';
import "bootstrap/dist/css/bootstrap.css";
import Image1 from './img.jpg';


class Fiche extends Component {

    render() {
        return (
            <Card className='card'>
                <CardImg className='cardes' top width="100%" src={Image1} alt="Image1" />
                <CardBody className='carde'>
                    <CardTitle>Imagine Dragons</CardTitle>
                    <CardSubtitle>Night Visions</CardSubtitle>
                    <CardText>Album numero 1 des ventes ! </CardText>
                    <Button>Acheter</Button>
                </CardBody>
                
            </Card>
        );
    }

}

export default Fiche;