import React from 'react';
import Team from '../Team/Team';
import Timer from '../Timer/Timer';


const TopRow = () => {
    return(
        <div className="topRow">
            <Team  parentClass={'home'} headerClass={'home__name'} scoreClass={'home__score'} teamName={'Lions'} />
            <Timer />
            <Team  parentClass={'away'} headerClass={'away__name'} scoreClass={'away__score'} teamName={'Tigers'} />
        </div>
    )
}

export default TopRow;