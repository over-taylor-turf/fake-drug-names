/* eslint-disable react/jsx-no-target-blank */
import React from 'react'; 
import Menu from './Menu';

function About() {
    return (
      <div className="about-image">
        <p className="about-text"><em>Medpramin</em> is a professional name generator for pharmaceutical corporations struggling with prescription drug marketing.<br/><br/>Turn off your brain, generate a name. Welcome to <em>Medpramin.</em></p>
        {/* <Link className="generate-a-name" to='/names'>Generate a Name</Link> 
        <Link className="compare-names" to='/compare'>Compare Medpramin Names</Link> */}
          <div>
            <Menu />
          </div>
      </div>
    );
  }
  
  export default About;