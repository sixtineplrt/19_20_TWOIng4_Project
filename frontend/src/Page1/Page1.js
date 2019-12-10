import React from 'react';
import { Component} from 'react';
import { Row } from 'reactstrap'
import './Page1.css';
import "bootstrap/dist/css/bootstrap.css";
import Graphique from '../Component/Graphique';
import Graphique1 from '../Component/Graphique1';
import W2 from '../Component/W2';
import W1 from '../Component/W1';
import W3 from '../Component/W3';
import W4 from '../Component/W4';


class Page1 extends Component {

    render() {
        return (
            <div className='page'>
                <Row>
                    <div class="col-sm-12">
                        <Row>
                            <div class="col-sm-8">
                                <W1 />
                            </div>
                            <div class="col-sm-4">
                                <W2 />
                            </div>
                        </Row>
                        <Row>
                            <div class="col-sm-4">
                                <W3 />
                            </div>
                            <div class="col-sm-8">
                                <Graphique />
                            </div>
                            <div class="col-sm-8">
                               <Graphique1 /> 
                            </div>
                            <div class="col-sm-4">
                                <W4/>
                            </div>
                        </Row>
                    </div>

                </Row>
            </div>
        );
    }

}

export default Page1;
