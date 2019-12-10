import React from 'react';
import { Component } from 'react';
import { Row, CardImg } from 'reactstrap'
import './Page2.css';
import Image from './img.jpg';
import Formulaire from './Formulaire.js';

class Page2 extends Component {

    render() {
        return (


            <div className='page'>  
                    <Row>
                        <div class="col-sm-1">

                        </div>
                        <div class="col-sm-10">
                            <h1> Acheter album </h1>
                        </div>
                        <div class="col-sm-1">
                           
                        </div>
                    </Row>
                    <Row>
                        
                    <div class="col-sm-4">
                        
                            <CardImg top width="100%" src={Image} alt="Image" />
                          
                        </div>
                        <div class="col-sm-8">
                            <Formulaire/>                      
                        </div>
                    </Row>
                </div>
             


        );
    }

}

export default Page2;
