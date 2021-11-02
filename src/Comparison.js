import React, { useState, useEffect } from 'react';
import {prefixdata, middledata, suffixdata} from './dataset2';
import './App.css';

function Comparison() {

  // Random Number Generators
    const aBigRandomNumber = Math.floor(Math.random() * 5160) + 1
    const randomNumberPrefix = Math.floor(Math.random() * 40) + 1
    const randomNumberMiddle = Math.floor(Math.random() * 32) + 1
    const randomNumberSuffix = Math.floor(Math.random() * 57) + 1
    const fiftyPercentChance = Math.floor(Math.random() * 2)

  // Use State
    const [realName, setRealName] = useState();
    const [fakeName, setFakeName] = useState();
    const [textColorCorrect, setTextColorCorrect] = useState();
    const [textColorWrong, setTextColorWrong] = useState();
    const [order, setOrder] = useState(); 
    const [optionalText, setOptionalText] = useState(); 

  // API Call
    const makeAPICall = () => (
      fetch("https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=BN")
      .then((response) => response.json())
      .then((results) => setRealName(results.minConceptGroup.minConcept[aBigRandomNumber].name)) )

  // Use Effect
    useEffect(() => {
      makeAPICall();
      handleComparison();
      randomOrder();
      }, [])

  // Handle Clicks
  const handleComparison = () => {
    setFakeName(prefixdata[randomNumberPrefix] + middledata[randomNumberMiddle] + suffixdata[randomNumberSuffix]);
    makeAPICall(realName);
    setTextColorCorrect('black');
    setTextColorWrong('black');
    setOrder(fiftyPercentChance);
    setOptionalText(' ');
  }

  const handleCorrectGuess = () => {
    setTextColorCorrect('#17a381');
    setOptionalText(`Correct! ${realName} is a real drug currently available on the market. ${fakeName} is a name generated by Medpramin.`);
  }

  const handleWrongGuess = () => {
    setTextColorWrong('#b81f34');
    setOptionalText(`Incorrect! ${fakeName} is a name generated by Medpramin. It is not currently available on the market... But it could be! Buy the rights to ${fakeName} today.`);
  }

  // Random Order Funtion
    const randomOrder = () => {

        if (order === 0) { 
            return (
        <div className="game">
        <p className="drug-names" style={{color:textColorCorrect}} onClick={() => {handleCorrectGuess()}}>{realName ? realName : 'Loading...'}</p> 
        <p className="versus">vs.</p>
        <p className="drug-names" style={{color:textColorWrong}} onClick={() => {handleWrongGuess()}}>{fakeName ? fakeName : 'Venpradone'}</p>
        </div>)    
        } 
        
        else {
            return (
        <div className="game">
        <p className="drug-names" style={{color:textColorWrong}} onClick={() => {handleWrongGuess()}}>{fakeName ? fakeName : 'Venpradone'}</p>
        <p className="versus">vs.</p>
        <p className="drug-names" style={{color:textColorCorrect}} onClick={() => {handleCorrectGuess()}}>{realName ? realName : 'Loading...'}</p> 
        </div>
            )

        }
    }




  return (
    <div className="comparison yellow-image">
        {/* Instructions */}
      <h3 className="comparison-title">Drug Name Comparison</h3>
      <p className="comparison-text">Let's see how <em>Medpramin's</em> randomly generated names compare to current prescription drug names on the market.<br/><br/>Below, one name is a <span className="real-product">real drug</span> and the other is a <span className="fake-product">name generated by Medpramin</span>. Try to identify the <span className="real-product">real product</span>.</p>

        {randomOrder()}

        <p className="optional-text">{optionalText}</p>

        <button className="comparison-button" onClick={() => {handleComparison()}}>Generate a New Comparison</button>
    </div>
  );
}

export default Comparison;
