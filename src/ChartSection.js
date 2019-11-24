import React, {Component} from 'react';

class ChartSection extends Component {

    componentDidMount() {
        const canvas = this.refs.spider_chart;
        const ctx = canvas.getContext('2d');
        ctx.fillRect( 10, 10, 100, 100);
        ctx.stroke();
    }
    
    render() {
        return( 
            <React.Fragment>
                "ChartSection"
            </React.Fragment>
        );
    }
}

export default ChartSection;