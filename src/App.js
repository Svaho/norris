import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    fact: ''
  })


  const fetchFact = async () => {
    const chuckFact = await axios.get(
      'https://api.chucknorris.io/jokes/random'
    );
    console.log(chuckFact.data.value);
    setState({
      ...state,
      fact: chuckFact.data.value
    });
  }

  useEffect( () => {
    fetchFact();
  }, []
  )  
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='title'>
              Chuck Norris Facts
            </h1>
          </div>
          <div className='col-6 factCol'>
            <div className='card'>
              <div className='card-body'>
                <div>
                </div>
              </div>
              <div>
                <button className='btn btn-lg' onClick={fetchFact}>
                  GET A FACT!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <h2>{state.fact}</h2>
      </div>
    </div>
  );
}

export default App;
