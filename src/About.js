import React from 'react'; 
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="about-image">
        <p className="about-text">Welcome to <em>Medpramin</em>. We take the thinking out of the prescription drug naming process. <br/><br/><em>Medpramin</em> is a painless name generator for the newest pharmaceutical solutions hitting the market.</p>
        <Link className="generate-a-name" to='/names'>Generate a Name</Link>
      </div>
    );
  }
  
  export default About;