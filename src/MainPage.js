import React, { useState, useEffect } from 'react';
import {prefixdata, middledata, suffixdata} from './dataset';

function MainPage() {

      // Random Number Generators
      const randomNumber100 = Math.floor(Math.random() * 99) + 1
      const randomNumberPrefix = Math.floor(Math.random() * 19) + 1
      const randomNumberMiddle = Math.floor(Math.random() * 19) + 1
      const randomNumberSuffix = Math.floor(Math.random() * 19) + 1

      // Random Drug Name
      let randomDrugName = prefixdata[randomNumberPrefix] + middledata[randomNumberMiddle] + suffixdata[randomNumberSuffix]

      // Use State
        const [drugEffects, setDrugEffects] = useState();
      
      // API Call
        const makeAPICall = () => (
          fetch("https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json")
          .then((response) => response.json())
          .then((results) => setDrugEffects(results.data[randomNumber100].title)) )
    
      // Use Effect
        useEffect(() => {
          makeAPICall();
          }, [])



    return (
      <>
        <h3>Here are the Main Page Components! ⬇️</h3>
        <img src="https://media.istockphoto.com/vectors/pill-bottle-vector-id1220328285?k=20&m=1220328285&s=612x612&w=0&h=8D6QBNOvTHQ5ulVq34YgDDGfEPzbvFIYGYWdgAdIcqo=" alt='pill bottle' style={{height: "100px"}}/>

        <p>Introducing...</p>
        <p className="random-drug-name">
            {randomDrugName}
        </p>
        <button>Generate Random Drug Name 💊</button>

        <p>Drug Details:</p>
        <p className="random-drug-facts">RANDOM DRUG NAME is a {drugEffects ? drugEffects.toLowerCase('') : ''} and side effects may include vomiting, diarrhea, internal bleeding or death.</p>
        <button>Routes to Disclaimer Page</button>

        <p>Testing: </p>
      </>
    );
  }
  
  export default MainPage;