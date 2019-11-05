import React from 'react';
import ScoreBtn from './ScoreBtn';

const BtnContainer = props => {
    
    const {btnClass,  teamScore,  setTeamScore, scoreTDClass, scoreFGClass, touchDown,
    fieldGoal, test} =  props;

    return (
        <div className={btnClass}>
            <ScoreBtn scoreClass={scoreTDClass} teamScore={teamScore} setTeamScore = {setTeamScore} scoreAmount={7} scoreType={touchDown} />
            <ScoreBtn scoreClass={scoreFGClass} teamScore={teamScore} setTeamScore = {setTeamScore} scoreAmount={3} scoreType={fieldGoal} />
        </div>
    );
}

export default BtnContainer;