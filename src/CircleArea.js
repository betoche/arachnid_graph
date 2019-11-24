import React, {Component} from 'react';
import ChartSection from './ChartSection.js';

class CircleArea extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            sections : 6,
            centerX : 0,
            centerY : 0
        }
    }

    componentDidMount() {
        const canvas = this.refs.spider_chart;
        const ctx = canvas.getContext('2d');
        ctx.arc( 150, 150, 100, 0, 2*Math.PI, true );
        ctx.stroke();
    }
    render() {
        return (
            <React.Fragment>
                <canvas ref="spider_chart" width="300" height="300">
                    <ChartSection />
                </canvas>
            </React.Fragment>
        );
    }
}

export default CircleArea;