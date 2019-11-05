import React from 'react';
import Team from '../Team/Team';
import Timer from '../Timer/Timer';


const TopRow = props => {
    const {homeScore, awayScore, homeTeamName, awayTeamName} = props

    console.log(awayTeamName);
    return(
        <div className="topRow">
            <Team  
                parentClass={'home'} headerClass={'home__name'} scoreClass={'home__score'} teamName={homeTeamName} score={homeScore} />
            <Timer />
            <Team  parentClass={'away'} headerClass={'away__name'} scoreClass={'away__score'} teamName={awayTeamName} score={awayScore} />
        </div>
    )
}

export default TopRow;