import React from 'react';
import { Component} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './Graphique1.css';
import "bootstrap/dist/css/bootstrap.css";


const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
        name: 'Sensor1', uv: 4000, female: 2400, male: 2400,
    },
    {
        name: 'Sensor2', uv: 3000, female: 1398, male: 2210,
    },
    {
        name: 'Sensor3', uv: 2000, female: 9800, male: 2290,
    },
    {
        name: 'Sensor4', uv: 2780, female: 3908, male: 2000,
    },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};




class Graphique1 extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';
    render() {
        return (
            <div className='graph1 '>

                <BarChart
                    width={380}
                    height={280}
                    data={data}
                    margin={{
                        top: 20, right: 20, left: 20, bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))
                        }
                    </Bar>
                </BarChart>

            </div>
        );
    }

}

export default Graphique1;