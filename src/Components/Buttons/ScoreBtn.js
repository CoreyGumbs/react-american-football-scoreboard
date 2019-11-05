import React from 'react';


const ScoreBtn = props => {
    const {scoreClass, teamScore, setTeamScore, scoreAmount, scoreType} = props;

    return(
        <button className={scoreClass} onClick={()=>{setTeamScore(teamScore + scoreAmount)}}>{scoreType}</button>
    )
}


export default ScoreBtn;