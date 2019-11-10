import React from 'react';


const ScoreBtn = props => {
    const {scoreClass, scoreAmount, scoreType, setScore, teamName} = props;

    return(
        <button className={scoreClass} onClick={()=>{setScore(teamName, scoreAmount)}}>{scoreType}</button>
    )
}


export default ScoreBtn; 