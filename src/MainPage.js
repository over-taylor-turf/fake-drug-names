import React, { useState, useEffect } from 'react';
import {prefixdata, middledata, suffixdata} from './dataset';
import sideeffects from './sideeffects';

function MainPage() {


      // Random Number Variables
      const randomNumber100 = Math.floor(Math.random() * 99) + 1
      const randomNumberPrefix = Math.floor(Math.random() * 19) + 1
      const randomNumberMiddle = Math.floor(Math.random() * 19) + 1
      const randomNumberSuffix = Math.floor(Math.random() * 19) + 1
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
    
      // Use Effect
        // useEffect(() => {
        //   makeAPICall();
        //   }, [])
      


    return (
      <>
        <h3>Here are the Main Page Components! ⬇️</h3>
        <img src="https://media.istockphoto.com/vectors/pill-bottle-vector-id1220328285?k=20&m=1220328285&s=612x612&w=0&h=8D6QBNOvTHQ5ulVq34YgDDGfEPzbvFIYGYWdgAdIcqo=" alt='pill bottle' style={{height: "100px"}}/>

        <p>Introducing...</p>
        <p className="random-drug-name">
            {drugName ? drugName : '...'}
        </p>
        <button className="most-important-button" onClick={() => {handleRandomDrugNames()}} >Generate Random Drug Name 💊</button>

        <p>Drug Details:</p>
        <p className="random-drug-facts">{drugEffects ? `${drugName} is a ${drugEffects.toLowerCase('')} with side effects including ${sideeffects[randomNumberSideEffect1]}, ${sideeffects[randomNumberSideEffect2]}, ${sideeffects[randomNumberSideEffect3]}, and ${sideeffects[randomNumberSideEffect4]}.` : '...'}</p>
        <a href=''>Route to Disclaimer Page</a>
      </>
    );
  }
  
  export default MainPage;