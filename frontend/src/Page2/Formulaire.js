import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Formulaire.css';



class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Nom: '',
            Prenom: '',
            Pays:'',
            Age: 0, 
            Quantite: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='Form'>
                <form>
                <label>
                    Nom :
                    <input
                        name="Nom"
                        type="char"
                        checked={this.state.Nom}
                        onChange={this.handleInputChange} />
                </label>
                    <br /><br />
                <label>
                    Prenom :
                    <input
                        name="Prenom"
                        type="char"
                        checked={this.state.Prenom}
                        onChange={this.handleInputChange} />
                </label>
                    <br /><br />
                <label>
                    Pays : 
                    <input
                        name="Pays"
                        type="char"
                        checked={this.state.Pays}
                        onChange={this.handleInputChange} />
                </label>
                    <br /><br />
                <label>
                    Age : 
                    <input
                        name="Age"
                        type="number"
                        value={this.state.Age}
                        onChange={this.handleInputChange} />
                </label>
                    <br /><br />
                <label>
                    Quantite :
                     <select value={this.state.value} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                    <br /><br />
                <input type="submit" value="Acheter" />
                </form>
            </div>
        );
    }
}

export default Form;
