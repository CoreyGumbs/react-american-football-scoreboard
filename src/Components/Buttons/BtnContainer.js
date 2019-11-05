import React from 'react';
import ScoreBtn from './ScoreBtn';

const BtnContainer = props => {
    const {btnClass,  teamScore,  setTeamScore, scoreTDClass, scoreFGClass, touchDown,
    fieldGoal} =  props;

    return (
        <div className={btnClass}>
            <ScoreBtn scoreClass={scoreTDClass} teamScore={teamScore} setTeamScore = {setTeamScore} scoreType={touchDown} />
            <ScoreBtn scoreClass={scoreFGClass} teamScore={teamScore} setTeamScore = {setTeamScore} scoreType={fieldGoal} />
        </div>
    );
}

export default BtnContainer;