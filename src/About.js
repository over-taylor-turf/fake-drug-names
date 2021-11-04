/* eslint-disable react/jsx-no-target-blank */
import React from 'react'; 
import Menu from './Menu';

function About() {
    return (
      <div className="about-image">
        <br/><br/>
        <p className="about-text"><em>Medpramin</em> is a professional name generator for pharmaceutical corporations struggling with prescription drug marketing.</p><br/>
        {/* <Link className="generate-a-name" to='/names'>Generate a Name</Link> 
        <Link className="compare-names" to='/compare'>Compare Medpramin Names</Link> */}
        <p className="about-text2">Turn off your brain, generate a name.</p><br/>
        <p className="about-text3">Welcome to <em>Medpramin.</em></p>
          <div>
            <Menu />
          </div>
          <p className="about-footer"><strong>Designed & Coded with humor by Taylor Overturf</strong><br/>Seattle, Washington | November, 2021</p>
      </div>
    );
  }
  
  export default About;