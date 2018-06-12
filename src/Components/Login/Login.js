import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:'',
      redirect: false
    }
//function1 and 2
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //function 1 / 2
  login(){
    
    if(this.state.username && this.state.password){
      PostData('login', this.state).then ((result) =>{
      let responseJSON = result;
      if(responseJSON.userData){
        sessionStorage.setItem('userData', responseJSON);
        this.setState({redirect: true});
      } else {
        console.log("login error");
      }
      
    });

    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/home'}/>)
    }


    return (
      <div>
        <legend>Welcome back</legend>

        <label>Username</label>
        <input id="username" type="username" placeholder="username" onChange={this.onChange} />
        <span className="pure-form-message">This is a required field.</span>

        <label >Password</label>
        <input id="password" type="password" placeholder="Password" onChange={this.onChange} />

        <label  className="pure-checkbox">
          <input id="remember" type="checkbox"/> Remember me
        </label>

        <input type="submit" value="login" className="pure-button pure-button-primary" onClick={this.login} />
      </div>
    );
  }
}

export default Login;
