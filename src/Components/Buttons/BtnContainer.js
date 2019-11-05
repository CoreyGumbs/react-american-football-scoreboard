import React from 'react';
import ScoreBtn from './ScoreBtn';

const BtnContainer = props => {
    
    const {btnClass,  teamScore, scoreTDClass, scoreFGClass, touchDown,
    fieldGoal, setScore, teamName} =  props;

    return (
        <div className={btnClass}>
            <ScoreBtn scoreClass={scoreTDClass} teamName={teamName} setScore={setScore} teamScore={teamScore}  scoreAmount={7} scoreType={touchDown}  />
            <ScoreBtn scoreClass={scoreFGClass} teamName={teamName} setScore={setScore} teamScore={teamScore}  scoreAmount={3} scoreType={fieldGoal} />
        </div>
    );
}

export default BtnContainer;