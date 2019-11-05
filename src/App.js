
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import Buttons from './Components/Buttons/Buttons';

function App() {

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeTeam] = useState('Lions');
  const [awayTeam] = useState('Tigers');

  ///scoreHandler
  const setScore = (name, points) => {
   
    if(name  === homeTeam){
      setHomeScore(homeScore + points);
    }else if (name === awayTeam){
      setAwayScore(awayScore + points);
    }
  
  }
  
  return (
    <div className="container">

      <ScoreBoard  
        homeScore={homeScore} 
        awayScore={awayScore} 
        homeTeamName={homeTeam} 
        awayTeamName={awayTeam}
      />

      <Buttons 
        homeScore={homeScore} 
        setHomeScore={setHomeScore} 
        awayScore={awayScore} setAwayScore={setAwayScore} 
        setScore={setScore} 
        homeTeamName={homeTeam} 
        awayTeamName={awayTeam} 
      />
    </div>
  );
}

export default App;
