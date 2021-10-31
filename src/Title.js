import React from 'react'; 
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="pink-image">
        <h1 id="title">medpramin</h1>
        <p id="tagline">A Painless <br/>Prescription <br/>Drug Name <br/>Generator</p>
        <Link id="learn-more" to='/about'>Learn More</Link>
      </div>
    );
  }
  
  export default About;