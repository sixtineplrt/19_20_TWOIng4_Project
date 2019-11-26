import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button } from 'reactstrap'



class Page1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="App">
                <div>
                    page1
                </div>
            </div>
        );
    }

}

export default Page1;
