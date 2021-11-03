import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';


// Component Imports
import Title from './Title';
import About from './About';
import MainPage from './MainPage';
import Comparison from './Comparison';
import Creator from './Creator';

function App() {
  return (
    <div>

      <Switch>

        <Route path='/' exact component={Title}/>

        <Route path='/about' exact component={About} />

        <Route path='/names' exact component={MainPage} />

        <Route path='/compare' exact component={Comparison} />

        <Route path='/creator' exact component={Creator} /> 
      
        <Redirect to='/' />

      </Switch>     


    </div>
  );
}

export default App;
