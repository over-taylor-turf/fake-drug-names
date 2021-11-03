import React from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu';

function Title() {

    return (
      <div className="pink-image">

        <h1 id="title">medpramin</h1>

        <p id="tagline">A Painless Prescription Drug Name Generator</p>

        <Link id="learn-more" to='/about'>Learn More</Link>

        <Menu />

      </div>
    );
  }
  
  export default Title;

