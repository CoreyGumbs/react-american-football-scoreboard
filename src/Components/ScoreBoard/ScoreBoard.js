import React from 'react';
import TopRow from '../TopRow/TopRow';
import BottomRow from '../BottomRow/BottomRow';


const ScoreBoard = props => {
    const  {homeScore, awayScore} =  props;
    return(
        <section className="scoreboard">
            <TopRow  homeScore={homeScore} awayScore={awayScore}  />
             <BottomRow />
        </section>
    )
}

export default ScoreBoard;