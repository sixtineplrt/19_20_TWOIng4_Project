import React from 'react';
import { Component, PureComponent, Carousel, Item } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import './Fiche.css';
import "bootstrap/dist/css/bootstrap.css";
import Image from './img.jpg';
import Image1 from './img1.jpg';
import Image3 from './img3.jpg';
import ItemsCarousel from 'react-items-carousel';

class Carou extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img"
                            src="img.jpg"
                            alt="Image"
                        />
                        <Carousel.Caption>
                            <h3>Coucou</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img1"
                            src="img1.jpg"
                            alt="Image1"
                        />
                        <Carousel.Caption>
                            <h3>Coucou1</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img3"
                            src="img3.jpg"
                            alt="Image3"
                        />
                        <Carousel.Caption>
                            <h3>Coucou3</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Carou;