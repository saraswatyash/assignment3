import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Covid from './components/covid19';
import Weather from './components/weather';
import Home from './components/home';
import Cases from './components/cases';

import {BrowserRouter,Route, Switch} from 'react-router-dom'; 

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/covid19" component={Covid}></Route>
      <Route path="/weather" component={Weather}></Route>
      <Route path="/:Country" component={Cases}></Route>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
