# Taylor's Project Overview 👏

## Project Links 

- [GitHub Repo: Fake Drug Names](https://git.generalassemb.ly/tayloroverturf/fake-drug-names)
- [TBD deployment link]() ❌

## Project Description ✅

For Project 2, I will be creating a ✨ *fake prescription drug name generator*. ✨
- Do you ever think to yourself, 'how did they come up with this truly terrible drug name?' when you're watching commercials in between your favorite episode of The Bachelorette?
- Do you ever ask, 'is this an SNL sketch or is this cable TV?' when you hear promotions for Tridesivir, Hydrofam, or Butonial? 

Well, my site will now take the, albeit very little, thinking out of giant drug corporations naming processes!

Enter the *Prescription Drug Name Generator*. A website that will randomize a drug name for you based on my own unique data set alongside a medical API with randomized drug facts.

[Reddit Inspiration](https://res.cloudinary.com/overturf/image/upload/v1635526902/Screen_Shot_2021-10-29_at_8.53.35_AM_jpkz54.png)


## API ✅

I will be using a very strange API, that took me a very long time to find! 
My API is called "[DailyMed](https://dailymed.nlm.nih.gov/dailymed/app-support-web-services.cfm)" and it returns specific drug fact data. I want to use it for randomized drug fact data in order to create some real-looking stats for my fake prescription drugs. DailyMed offers different details on prescription drugs, but the specific data I want is within this [object](https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json), when I make API calls, this is the information I am getting back. I am only using the data within the keys called "title" and I have set up a method to randomize which "title" data I get back. 

I am only giving you a small example of all 100 objects, please use the link above to see the full data set. 

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
{
spl_version: 1,
published_date: "Oct 28, 2021",
title: "PAROXETINE TABLET, FILM COATED, EXTENDED RELEASE [MODAVAR PHARMACEUTICALS LLC]",
setid: "555cfa31-3865-450f-b16b-2f4004af7a67"
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


## Wireframes ✅

- [React Architecture](https://res.cloudinary.com/overturf/image/upload/v1635527154/IMG_5029_srpb6c.heic)
- [Wireframe, Home Page](https://res.cloudinary.com/overturf/image/upload/v1635527182/IMG_5030_yjkcah.heic)
- [Wireframe, Main Page](https://res.cloudinary.com/overturf/image/upload/v1635527215/IMG_5031_bmb1e9.heic)
- [Wireframe, Disclaimer / Footer](https://res.cloudinary.com/overturf/image/upload/v1635527241/IMG_5032_io5ptz.heic)

#### MVP Items
- Find external API, make API call to collect desired data. ✅
- Randomly generate specific data from DailyMed API. ✅
- Create internal data set for name generator. 
- Create random logic for creating full drug names. 
- Display Name and Drug Facts with button functionality. 
- Make routes between Homepage, Main Page and Disclaimer Page. 
- Insert external links. 
- CSS Mobile-First Basic Styling. 

#### PostMVP Items

- CSS Styling to mimic a cheesy prescription drug brand. 
- Generate an interactive pill bottle image for the Main page. 
- Create content for About and Disclaimer components other than lorem ipsum. 
- Use Unsplash for medical stock photos of pills, doctors, etc. 
- Create animation for pill bottle image. 

## Components

| Component | Description | 
| --- | :---: |  
| About | Location: Homepage, the About component will render the 'about' explanation and homepage title. | 
| Image | Location: Main Page, the Image component will render an image, hopefully interactive, of a pill bottle. | 
| Random Name | Location: Main Page, the Random Name component will render a random drug name based on a data set I create. It will use an internal dataset on another .js file. | 
| Random Drug Facts | Location: Main Page, the Random Drug Facts component will render random drug facts, based on an API call to DailyMed. | 
| Medical Disclaimer | Location: Disclaimer Page, the Medical Disclaimer component will render one of those long, blanket, medical disclaimer statements: 'may cause internal bleeding, night sweats, tears coming out your nose...' | 
| Footer | Location: Disclaimer Page, the Footer component will render some blatant self promotion and external links to my LinkedIn, GitHub and Portfolio Site. | 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| About | Medium | 3 hrs| TBD | TBD |
| Image | Low | 3 hrs| TBD | TBD |
| Random Name | High | 10 hrs| TBD | TBD |
| Random Drug Facts | High | 3 hrs| TBD | TBD |
| Medical Disclaimer | Low | 2 hrs| TBD | TBD |
| Footer | Low | 2 hrs| TBD | TBD |


## Additional Libraries ✅
- I would like to use a stock photo library, perhaps Upsplash, if I have time to generate some healthcare, medical, or pill-themed stock photos for my site. 


## Code Snippet ❌

Here is some code that I am proud of! 

```js
//code goes here
```


## Cite My Sources ❌

Here are some online resources that helped me be successful in my project! 

```js
//code goes here
```
