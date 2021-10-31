import React from 'react';
import { Route, Redirect, Link, Switch } from "react-router-dom";
import './App.css';

// Component Imports
import Title from './Title';
import About from './About';
import MainPage from './MainPage';

function App() {
  return (
    <div>

      <Switch>

        <Route path='/' exact component={Title}/>

        <Route path='/about' exact component={About} />

        <Route path='/names' exact component={MainPage} />
      
        <Redirect to='/' />

      </Switch>     


    </div>
  );
}

export default App;
