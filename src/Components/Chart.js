import React, {Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
      super(props);
      this.state = {
        chartData:props.chartData, //from app.js <chart />

      }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        displayPosition:'bottom',
        location: 'state'
    }
    






    render(){
        return(
            <div className="chart">
            <Bar
                data={this.state.chartData}
                width={490}
                height={90}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'The First Bigger Bank In The '+ this.props.location,
                        fontSize:25,
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.displayPosition
                    }
                }}
            />

            </div>
            
        );
    }
}

export default Chart;