import React from 'react';
import { Component} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import './Graphique.css';
import "bootstrap/dist/css/bootstrap.css";


const data = [
    {
        name: 'Entrance', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'LivingR', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'BathR', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'BedR', uv: 2780, pv: 3908, amt: 2000,
    },

];


class Graphique extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';
    render() {
        return (
            <div className='graph'>
            <AreaChart
                width={380}
                height={280}
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        );
    }

}

export default Graphique;