import React, { Component } from 'react';
import { Route,Redirect,Switch } from 'react-router-dom'
import Login from './Login'
import Admin from './Admin'
import Artist from './Artist'
import Customer from './Customer'
import './App.css';


class App extends Component{


  render() {

    return (
      <div className="App">
        <p>Header</p>
        <Switch>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Admin" exact component={Admin}/>
        <Route path="/Artist" exact component={Artist}/>
        <Route path="/Customer" exact component={Customer} />
        <Redirect from="/" to="/Login"/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
