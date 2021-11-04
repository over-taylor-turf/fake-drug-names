# Project Overview 👏

## Project Links

- GitHub Repo: [Fake Drug Names](https://git.generalassemb.ly/tayloroverturf/fake-drug-names)
- Deployed Link: [Medpramin](over-taylor-turf.github.io/fake-drug-names/)

## Project Description

For this project, I present to you a ✨ *fake prescription drug name generator*. ✨
- Do you ever think, 'how did they come up with this truly terrible drug name?' when you're watching commercials in between your favorite episode of The Bachelorette?
- Do you ever ask, 'is this an SNL sketch or is this cable TV?' when you hear promotions for *Tridesivir*, *Hydrofam*, or *Butonial*? 

Well, my site will now take the, albeit very little, thinking out of big pharma's naming processes...

**Enter the *Medpramin*. A website that will randomize a drug name for you based on my own unique data set alongside a medical API with randomized drug facts.** How did I come up with the name *Medpramin*? I generated it from my site! 


## API

I will be using two medical API's: *DailyMed* and *RxNav*. 

### DailyMed

The first API is called [DailyMed](https://dailymed.nlm.nih.gov/dailymed/app-support-web-services.cfm) and it returns specific drug fact data, for example: "PAROXETINE TABLET, FILM COATED, EXTENDED RELEASE [MODAVAR PHARMACEUTICALS LLC]". I use this data in order to create some real-looking stats for my fake prescription drugs. 

DailyMed offers different details on prescription drugs, but the specific data I want is within this [object](https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json), when I make API calls, this is the information I am getting back. I am only using the data within the "title" keys and I have set up a method to randomize which "title" data I get back. 

Below is a small sample of the data, please use the link above to see the full data set. 

```js
{data: {
	{
spl_version: 1,
published_date: "Oct 28, 2021",
title: "ESCITALOPRAM (ESCITSLOPRAM) TABLET [A-S MEDICATION SOLUTIONS]",
setid: "25d450c1-932f-4f5e-b5f7-d3824d3c4efd"
},
{
spl_version: 1,
published_date: "Oct 28, 2021",
title: "RUGBY REGULAR STRENGTH ACETAMINOPHEN (ACETAMINOPHEN) TABLET [REMEDYREPACK INC.]",
setid: "3078e664-4682-41af-bb47-2064f3a8bfc8"
},
{
spl_version: 1,
published_date: "Oct 28, 2021",
title: "DOXORUBICIN HYDROCHLORIDE INJECTION, SUSPENSION, LIPOSOMAL [PADAGIS US LLC]",
setid: "54e2a32f-7f41-4ed7-926d-f6c9b0b225c6"
},
} }
```


Here is my code demonstrating how I have made the API call to return the data I want to use: 
```js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // Random Number Generator
    const randomNumber = Math.floor(Math.random() * 99) + 1

  // Use State
    const [drugEffects, setDrugEffects] = useState();
  
  // API Call
    const makeAPICall = () => (
      fetch("https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json")
      .then((response) => response.json())
      .then((results) => setDrugEffects(results.data[randomNumber].title)) )

  // Use Effect
    useEffect(() => {
      makeAPICall();
      }, [])

  return (
    <div className="App">
      <h3>Here is some random drug info:</h3>
        <p>{drugEffects}</p>
    </div>
  );
}

export default App;
```


### RxNav

My second API returns real, drug brand names. This will be used in my "comparison game," where a user can guess between a randomly-generated *Medpramin* name and a real drug name.

This API comes from the National Library of Medicine at the Lister Hill Center for Biomedical Communications, known as [RxNav](https://lhncbc.nlm.nih.gov/RxNav/). RxNav returns much more data than DailyMed. In fact, I am randomly choosing a drug brand name out of over 5,000 data objects. 

Here is my code demonstrating how I have made the API call to RxNav: 
```js
  // API Call
    const makeAPICall = () => (
      fetch("https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=BN")
      .then((response) => response.json())
      .then((results) => setRealName(results.minConceptGroup.minConcept[aBigRandomNumber].name)) )
```

This API Call returns alphabetically-organized data that looks like: 
```js
{
rxcui: "895761",
name: "Actemra",
tty: "BN"
},
{
rxcui: "1040019",
name: "Acthar",
tty: "BN"
},
{
rxcui: "637866",
name: "ActHIB",
tty: "BN"
},
```
Again, I am only using the "name" key to access the brand names randomly. 


## Wireframes

#### React Architecture
- [React Architecture](https://res.cloudinary.com/overturf/image/upload/v1635527154/IMG_5029_srpb6c.heic)
- [Wireframe, Home Page](https://res.cloudinary.com/overturf/image/upload/v1635527182/IMG_5030_yjkcah.heic)
- [Wireframe, Main Page](https://res.cloudinary.com/overturf/image/upload/v1635527215/IMG_5031_bmb1e9.heic)
- [Wireframe, Disclaimer / Footer](https://res.cloudinary.com/overturf/image/upload/v1635527241/IMG_5032_io5ptz.heic)


#### MVP Items
- Find external API's, make API call to collect desired data. ✅
- Randomly generate specific data from DailyMed API. ✅
- Randomly generate specific data from RxNav API. ✅
- Create internal data set for name generator. ✅
- Create internal data set for side effects. ✅
- Create random logic for creating full drug names. ✅
- Display Name and Drug Facts with button functionality. ✅
- Comparison Name Game with a real drug name and a randomly-generated name. ✅
- Make routes between Homepage, Main Page and Disclaimer Page. ✅
- Insert external links. ✅
- CSS Mobile-First Basic Styling. ✅

#### PostMVP Items
- CSS Styling to mimic a cheesy prescription drug brand. ❌ 
    *Update: I just can't do cheesy. it's against my soul.* 
- Generate an interactive pill bottle image for the Main page. ❌
    *Update: seems unimportant now.* 
- Create content for About and Disclaimer components other than lorem ipsum. ✅
    *Note: content was important to provide context to site idea, it's done but could be clearer, will continue to refine, especially the directions on the Comparison Game page.*
- Use Unsplash for medical stock photos of pills, doctors, etc. ✅
   *Note: used Unsplash images for all background images.*


## Components

| Component | Description | 
| --- | --- |  
| About | Location: Homepage, the About component will render the 'about' explanation and homepage title. | 
| Image | Location: Main Page, the Image component will render an image, hopefully interactive, of a pill bottle. | 
| Random Name | Location: Main Page, the Random Name component will render a random drug name based on a data set I create. It will use an internal dataset on another .js file. | 
| Random Drug Facts | Location: Main Page, the Random Drug Facts component will render random drug facts, based on an API call to DailyMed. | 
| Medical Disclaimer | Location: Disclaimer Page, the Medical Disclaimer component will render one of those long, blanket, medical disclaimer statements: 'may cause internal bleeding, night sweats, tears coming out your nose...' | 
| Footer | Location: Disclaimer Page, the Footer component will render some blatant self promotion and external links to my LinkedIn, GitHub and Portfolio Site. | 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| About | Medium | 3 hrs| 4 hrs | 
| Images | Low | 3 hrs| 2 hrs |
| Random Name | High | 10 hrs| 5 hrs |
| Random Drug Facts | High | 3 hrs| 8 hrs | 
| Medical Disclaimer (Side Effects) | Low | 2 hrs| 3 hrs | 
| Footer | Low | 2 hrs| 2 hrs | 
| Second API Call | Medium | 2 hrs| 6 hrs | 
| Nav Bar | Low | 2 hrs| 6 hrs | 


## Additional Libraries 
- **Unsplash**: used for all the background images.
- **Font Awesome**: pill bottle icon used for the hamburger nav bar. 


## Code Snippet 

I am proud of the way I created my own randomized drug names because... they sound real! Sometimes even I am tricked by them. My vision with the prefix, middle, and suffix data worked out exactly as I intended. The random number generators max number refers to how many options I have for each, and the word is put together by simple concatenation! 

```js

const randomNumberPrefix = Math.floor(Math.random() * 33) + 1
const randomNumberMiddle = Math.floor(Math.random() * 32) + 1
const randomNumberSuffix = Math.floor(Math.random() * 35) + 1

const [drugName, setDrugName] = useState();

setDrugName(prefixdata[randomNumberPrefix] + middledata[randomNumberMiddle] + suffixdata[randomNumberSuffix]);

```


## Citations

Here is an online resources that helped me be successful in my project. For my homepage, I wanted the font styling of my "medpramin" title to be very specific. I researched online as to how to stretch the text a little more than the original Google Font, known as MuseoModerno. This [StackOverflow Article](https://stackoverflow.com/questions/6351013/can-i-stretch-text-using-css) was helpful and I was able to edit it for my own text. I also did a small border line (`text-stroke`) around the letters.

```css

/* Title: "Medpramin" */
      #title {
        text-align: center;
        font-size: 4.15em;
        margin-top: 0;
        padding-top: 10px;
        color: #388A80;
        font-family: 'MuseoModerno', cursive;
        padding-bottom: 0px;
        margin-bottom: 0px; 
        -webkit-transform:scale(1,1.35); /* Safari and Chrome */
          -moz-transform:scale(1,1.35); /* Firefox */
          -ms-transform:scale(1,1.35); /* IE 9 */
          -o-transform:scale(1,1.35); /* Opera */
          transform:scale(1,1.35); /* W3C */
        -webkit-text-stroke: 0.3px #165141;
        -webkit-text-fill-color: #388A80;
      }

```

##### Please visit [Medpramin](over-taylor-turf.github.io/fake-drug-names/)! 