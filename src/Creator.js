import React from 'react'; 
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="orange-image">
        <p>Meet the Mind behind <em>Medpramin</em></p>
        <p>Taylor is a front-end web developer with a passion for responsive design and clear, clean code that fosters conversation, collaboration, and creativity. In a previous life, I was an ESL (English as a Second Language) teacher. I hold a Master’s Degree in Applied Linguistics from Columbia University, and I am deeply curious about language acquisition—whether it be a human or computer language!</p>
        <img src="tayloravatar.png" alt='a cartoon rendering of the author'/>

        <div className="links">

        <p id="link1"><a  href="https://over-taylor-turf.github.io/"      
            target="_blank">Website</a></p>

        <p id="link2"><a  href="https://www.linkedin.com/in/tayloroverturf/"      
            target="_blank">LinkedIn</a></p>

        <p id="link3"><a  href="https://github.com/over-taylor-turf"      
            target="_blank">GitHub</a></p>

        </div>
      </div>
    );
  }
  
  export default About;