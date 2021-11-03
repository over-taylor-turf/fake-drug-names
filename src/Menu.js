import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

const Menu = ( ) => {

  const [hamburger, setHamburger] = useState(false); 

  const handleClick = () => {

    setHamburger(!hamburger); 

  }

    //  Use Effect
     useEffect(() => {
       handleHamburger();
       }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleHamburger = () => {

      if (hamburger === true) {

        return (

            <div id="myLinks">
            
            <Link to='/about'><p>What is Medpramin?</p></Link>
          
            <Link to='/names'><p>Generate a Name</p></Link>
          
            <Link to='/compare'><p>Compare Names</p></Link>
          
            <Link to='/creator'><p>Meet the Mind</p></Link>
        
           </div>)

      } else {

      return (
        <>
        </>
      )
        
      }
  }


    return (
        <div className="hamburger-menu">

                  <span id="icon" onClick={() => {handleClick()}}>
                      <i className="fas fa-prescription-bottle"></i>
                  </span>

                  {handleHamburger()}

        </div>

    );
  }


  export default Menu;
  