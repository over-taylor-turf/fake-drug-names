/* eslint-disable react/jsx-no-target-blank */
import React from 'react'; 
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="about-image">
        <p className="about-text"><em>Medpramin</em> is a solutions-based name generator for medical corporations facing challenges with prescription drug marketing.<br/><br/>When it comes to names, everyone wants to be the next <a href="https://www.kevzara.com/starting-kevzara/kevzaraconnect-copay-card?&utm_source=google&utm_medium=cpc&utm_campaign=Google_Kevzara+DTC_Brand_Geo-targeting_Exact&utm_term=kevzara&gclid=CjwKCAjwoP6LBhBlEiwAvCcthA17mDbyd6tkhAa5xhcHeXRnvX4-blFYXQJtoVdb8Wbb6qjeXW2TGxoCL-sQAvD_BwE&gclsrc=aw.ds" target="_blank"><strong>Kevzara</strong></a>, and now you can be!<br/><br/>Turn off your brain, generate a name. Welcome to <em>Medpramin.</em></p>
        <Link className="generate-a-name" to='/names'>Generate a Name</Link> 
        <Link className="compare-names" to='/compare'>Compare Medpramin Names</Link>
      </div>
    );
  }
  
  export default About;