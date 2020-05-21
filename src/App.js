import React, {useState} from 'react';
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
                  <h1>{state.country.demonym}</h1>
                  <h3>Population {state.country.population}</h3>
                  <p>Subregion : {state.country.subregion}</p>
                  <p>Capital : {state.country.capital}</p>
                  <p>Numeric Code : {state.country.numericCode}</p>
                  <p>Region : {state.country.region}</p>
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
