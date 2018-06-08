import React, {Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

class PieChart extends Component{
    constructor(props){
      super(props);
      this.state = {
        piechartData:props.piechartData, //from app.js <Piechart />

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
            <div className="Piechart">

            <Pie
            data={this.state.piechartData}
            width={490}
            height={90}
            options={{
                title:{
                    display:this.props.displayTitle,
                    text:'The Best Bank in '+ this.props.location,
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

export default PieChart;