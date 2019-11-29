import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap'
import Homepage from './Homepage.js';
import Page1 from './Page1/Page1.js';
import Page2 from './Page2/Page2.js';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <Row>
                    <Col xs={2}>
                        <Homepage /> 
                    </Col>

                    <Col xs={10}>
                        <BrowserRouter>
                            <Route exact path='/Page1' component={Page1} />
                            <Route exact path='/Page2' component={Page2} />  
                        </BrowserRouter>
                    </Col>   
                </Row>
            </div>
        );
    }

}

export default App;
