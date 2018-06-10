import React, {Component} from 'react';

class ModuleOne extends Component{
    render(){
        return(

        <div className="pure-div pure-g market-part">
            <div className="pure-u-1-4">
              <a href="" type="button" className="pure-button pure-input-1 pure-button-primary ">Flash News</a>           
            </div>
            <div className="pure-u-3-4 market-text">
                <h3>{this.props.title}</h3>
                <p>{this.props.subtitle}</p>    
            </div>
        </div>
    

        );
    }


}

export default ModuleOne;