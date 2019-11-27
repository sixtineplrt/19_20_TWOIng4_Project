import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Homepage.js';
import Page1 from './Page1/Page1.js';
import Page2 from './Page2/Page2.js';
import Formulaire from './Page2/Formulaire.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="App">
                <BrowserRouter>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/Page1' component={Homepage} />
                    <Route exact path='/Page2' component={Homepage} />
                    <Route exact path='/Page1' component={Page1} />
                    <Route exact path='/Page2' component={Page2} />
                    <Route exact path='/Formulaire' component={Formulaire} />
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
