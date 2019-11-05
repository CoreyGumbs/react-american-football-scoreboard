import React from 'react';
import BtnContainer from './BtnContainer';

const Buttons = props => {

    const {homeScore, setHomeScore, awayScore, setAwayScore, setScore} = props;

    return (
        <section className="buttons">
            <BtnContainer 
                btnClass={'homeButtons'}  
                teamScore={homeScore} 
                setTeamScore={setHomeScore}
                scoreTDClass={'homeButtons__touchdown'}
                scoreFGClass={'homeButtons__fieldGoal'}
                touchDown = {'Home Touchdown'}
                fieldGoal ={'Home Field Goal'}
                setScore = {setScore}
            />
            <BtnContainer 
                btnClass={'awayButtons'}  
                teamScore={awayScore} 
                setTeamScore={setAwayScore}
                scoreTDClass={'awayButtons__touchdown'}
                scoreFGClass={'awayButtons__fieldGoal'}
                touchDown = {'Away Touchdown'}
                fieldGoal ={'Away Field Goal'}
            />
        </section>
    )
}

export default Buttons;