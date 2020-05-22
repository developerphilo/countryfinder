import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

  function App() {
              // declare the states here
              const [state,setState]=useState({
                search: "",
                country: []
              });

              //getSearch  by destructuring the state and fetching data 
                  const getSearch = (e)=>{
                    if (e.key === "Enter") {
                      fetch(`https://restcountries.eu/rest/v2/name/${state.search}?fullText=true`)
                      .then(response => response.json())
                      .then(data=>{
                        console.log(data[0]);
                        setState(prevState =>{
                          return {...prevState, country: data[0]}
                        });
                      })
                      
                    }
                  }

              // handleinput funcion
              const handleInput=(e)=>{
                let s = e.target.value; 
                setState(prevState => {
                  return {...prevState, search:s}
                });
              }

  return (
    <div className="App">
      <Navbar handleInput={handleInput} getSearch={getSearch}/>
          <div className="country">
              <div>
                  <h1>Demonym : { state.country.demonym === "" ? state.search  : state.country.demonym }</h1>
                  <h2>Native Name : {state.country.nativeName}</h2>
                  <h3>Population {state.country.population}</h3>
                  <p>Subregion : {state.country.subregion}</p>
                  <p>Capital : {state.country.capital}</p>
                  <p>Numeric Code : {state.country.numericCode}</p>
                  <p>Region : {state.country.region}</p>
                  {/* <p>Currency Name : {state.country.currencies.name}</p> */}
                  <p>Cioc : {state.country.cioc}</p>
                  <p>Calling Code : {state.country.callingCodes}</p>
                  <p>Timezone: {state.country.timezones}</p>
                  <p>Domain: {state.country.topLevelDomain}</p>
                  <p>Area: {state.country.area}</p>
              </div>
              <div>
                  <img src={state.country.flag} alt="Logo" />
              </div>    
          </div>
          <Footer />
    </div>
  );
}

export default App;
