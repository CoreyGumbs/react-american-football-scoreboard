import React from 'react';
import TopRow from '../TopRow/TopRow';
import BottomRow from '../BottomRow/BottomRow';


const ScoreBoard = props => {
    const  {homeScore, awayScore, homeTeamName, awayTeamName} =  props;
    return(
        <section className="scoreboard">
            <TopRow  homeScore={homeScore} awayScore={awayScore} homeTeamName={homeTeamName} awayTeamName={awayTeamName}  />
             <BottomRow />
        </section>
    )
}

export default ScoreBoard;