import React, { useState, useEffect } from 'react'
import './App.css'
import Poster from './Poster'

const API_URL = 'https://react-bounty-api.herokuapp.com/v1/bounties'

function App() {
  // State variables
  let [bounties,setBounties] = useState([])
  let [currentBounty, setCurrentBounty] = useState({})

  // Effect hook
  useEffect(() => {
    console.log('Hello!')
    callApi()
  }, [])

  // Function to call the API and retrieve the bounties
  const callApi =()=>{
    fetch(API_URL)
    .then(response=> response.json())
    .then(data=>{
      console.log(data)
      setBounties(data)
    })
    .catch(err=>{
      console.log("err",err)
    })
  }

  let posters = bounties.map((b,i)=>{
    return(
     <Poster key={i} bounty={b}/>  
      )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted Poster Bulletin Board</h1>
        <p>Reduce crime in your neighborhood!</p>
      </header>
      <main>
        {posters}
      </main>
    </div>
  );
}

export default App;
