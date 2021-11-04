import React from 'react'; 
import Menu from './Menu';

function Creator() {
    return (
      <div className="orange-image">
          
        <div className="wrapper">
        <img id='taylor' src='./tayloravatar.png' alt='a cartoon rendering of the author'/></div>
          <br/>
        <p className="meet-the-mind">Meet the Mind behind <br/><span id="medpramin">medpramin</span></p>
          <br/>
        <p className="bio">Taylor is a front-end web developer who is a passionate about code that fosters conversation, collaboration, and creativity. In a previous life, she was an educator. She holds a Master’s Degree in Applied Linguistics from Columbia University, and is deeply curious about language acquisition—whether it be a human or computer language.<br/>
          <br/>
        <div className="links">

        <p id="link1"><a  href="https://over-taylor-turf.github.io/"      
            target="_blank" rel="noreferrer"><i className="fas fa-link"></i> Website</a></p>

        <p id="link2"><a  href="https://www.linkedin.com/in/tayloroverturf/"      
            target="_blank" rel="noreferrer"><i className="fas fa-link"></i> LinkedIn</a></p>

        <p id="link3"><a  href="https://github.com/over-taylor-turf"      
            target="_blank" rel="noreferrer"><i className="fas fa-link"></i> GitHub</a></p>

        </div>
        </p>

        <Menu />

        <p className="creator-footer"><strong>Designed & Coded with humor by Taylor Overturf</strong><br/>Seattle, Washington | November, 2021</p>


      </div>
    );
  }
  
  export default Creator;