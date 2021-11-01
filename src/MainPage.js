import React, { useState } from 'react';
import {prefixdata, middledata, suffixdata} from './dataset';
import sideeffects from './sideeffects';

function MainPage() {


      // Random Number Variables
      const randomNumber100 = Math.floor(Math.random() * 99) + 1
      const randomNumberPrefix = Math.floor(Math.random() * 33) + 1
      const randomNumberMiddle = Math.floor(Math.random() * 32) + 1
      const randomNumberSuffix = Math.floor(Math.random() * 35) + 1
      const randomNumberSideEffect1 = Math.floor(Math.random() * 70) + 1
      const randomNumberSideEffect2 = Math.floor(Math.random() * 70) + 1
      const randomNumberSideEffect3 = Math.floor(Math.random() * 70) + 1
      const randomNumberSideEffect4 = Math.floor(Math.random() * 70) + 1


      // Use State
      const [drugEffects, setDrugEffects] = useState();
      const [drugName, setDrugName] = useState();
      

      // Random Drug Name
      const handleRandomDrugNames = () => {
        setDrugName(prefixdata[randomNumberPrefix] + middledata[randomNumberMiddle] + suffixdata[randomNumberSuffix]);
        makeAPICall(drugName);
      }
      
      // API Call
        const makeAPICall = () => (
          fetch("https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json")
          .then((response) => response.json())
          .then((results) => setDrugEffects(results.data[randomNumber100].title)) )
    
    

    return (
      <div className="blue-image">
        <p id="introducing"><em>Introducing...</em></p>
        <p className="random-drug-name">
            {drugName ? drugName : 'Medpramin'}
        </p>
        <div className="button-container"><button className="most-important-button" onClick={() => {handleRandomDrugNames()}} >Generate Name</button></div>

        <div className="drug-details">
        <h3>Example Drug Details:</h3>
        <p className="random-drug-facts">{drugEffects ? `${drugName} is a ${drugEffects.toLowerCase('')} with side effects including ${sideeffects[randomNumberSideEffect1]}, ${sideeffects[randomNumberSideEffect2]}, ${sideeffects[randomNumberSideEffect3]}, and ${sideeffects[randomNumberSideEffect4]}.` : 'Welcome to Medpramin. We take the thinking out of the prescription drug naming process. Medpramin is a painless name generator for the newest prescription drugs hitting the market. Click the Generate button to find your next, big pharmaceutical hit!'}</p></div>
      </div>
    );
  }
  
  export default MainPage;