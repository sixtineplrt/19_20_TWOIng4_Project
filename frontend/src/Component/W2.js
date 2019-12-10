import React from 'react';
import { Component} from 'react';
import './W2.css';
import "bootstrap/dist/css/bootstrap.css";
const axios = require('axios');


class W2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberSensors: 0
        }
    }
    
    
    componentDidMount() {        
        axios.get('http://localhost:3000/sensors/numberSensors')
            .then(response => {
                const test = response.data;
                this.setState({
                    numberSensors: test
                });
            })
            .catch(e => {
                console.error(e)
            });
    }

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

    render() {
        
        return (

            <div className='widget'>

                <p>Affiche le nombre de sensors de l'user</p>
                <p className="text"><strong>Votre logement contient</strong></p>
                <p>{this.state.numberSensors}</p>
                <p className="Text"> <strong>Capteurs !</strong></p>               
           

            </div>
        );
    }

}

export default W2;