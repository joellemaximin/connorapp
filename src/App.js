import React, { Component } from 'react';
import Header from './Components/Header/Header';
import MobileH from './Components/MobileH/MobileH';
import Footer from './Components/Footer/Footer';

import Chart from './Components/Chart';
import PieChart from './Components/PieChart';
import ModuleOne from './Components/ModuleOne';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import Routes from './routes';


import './styles/foundation.min.css';
import 'purecss/build/pure.css';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      piechartData:{}
    }
  }

  //here is gonna run with willmount (life cycle)
  componentWillMount(){
    this.getChartData();
    this.getPieChartData();

  }

  getChartData(){ //function
    //Ajax calls here
    this.setState({
      chartData:{
        labels:['ICBC', 'China Construction Bank', 'ABC', 'Bank Of China', 'Mitsubishi UFJ Financial Group',
        'JP Morgan Chase & Co.'],
        datasets:[
          {
            label:'Banque',
            data:[
              3.47,
              3.02,
              2.82,
              2.6,
              2.59,
              2.49
            ],
            backgroundColor:[
              'rgba(225, 99, 139, 0.6)',
              'rgba(54, 154, 235, 0.6)',
              'rgba(225, 205, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(225, 99, 132, 0.6)'
            ]
          }
        ]

      }

      

    })

  }
  getPieChartData(){ //function
    //Ajax calls here
    this.setState({
      piechartData:{
        labels:['Barclays', 'Halifax', 'HSBC', 'Llyods Bank', 'Natwest',
        'RBS'],
        datasets:[
          {
            label:'Banque',
            data:[
              4.8,
              4.2,
              3.6,
              2.6,
              2.19,
              1.9
            ],
            backgroundColor:[
              'rgba(225, 99, 139, 0.6)',
              'rgba(54, 154, 235, 0.6)',
              'rgba(225, 205, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(225, 99, 132, 0.6)'
            ]
          }
        ]

      }
    })
  }




  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          
          <div className="off-canvas-content" data-off-canvas-content>

            <div className="body-App">
              <Jumbotron  title="Keep and Grow Your Money Safe" subtitle="Here to put our stuff"/>
              
              <Header />

              <MobileH />
            <div className="ChartPart-App" >
              <Chart chartData={this.state.chartData} location="World" />
              
              <ModuleOne title="Market Flash" subtitle="Take a look on our Success " />

              <Slider />

              <PieChart piechartData={this.state.piechartData} location="London" displayPosition="right"/>
              <Routes />
              </div>
              
            <Footer footerName="Joelle Maximin" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
