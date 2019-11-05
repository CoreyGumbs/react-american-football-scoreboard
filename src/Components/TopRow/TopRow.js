import React from 'react';
import Team from '../Team/Team';
import Timer from '../Timer/Timer';


const TopRow = props => {
    const {homeScore, awayScore} = props
    return(
        <div className="topRow">
            <Team  parentClass={'home'} headerClass={'home__name'} scoreClass={'home__score'} teamName={'Lions'} score={homeScore} />
            <Timer />
            <Team  parentClass={'away'} headerClass={'away__name'} scoreClass={'away__score'} teamName={'Tigers'} score={awayScore} />
        </div>
    )
}

export default TopRow;