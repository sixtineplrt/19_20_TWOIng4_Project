import React from 'react';
import { Component } from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';
import './Homepage.css';




class Homepage extends Component {

    render() {
        return (
            <div className="">
               <div className="d-none d-sm-block">
                <aside>
                    <a href='./Page1'><FaHome /></a>
                    <br /><br />
                    <a href='./Page2'><FaPlus /></a>
                </aside> </div>
                
            </div>

        );
    }

}

export default Homepage;
