import React from 'react';
import BtnContainer from './BtnContainer';

const Buttons = props => {

    const {homeScore, awayScore, setAwayScore, setScore, homeTeamName,
    awayTeamName} = props;

    return (
        <section className="buttons">
            <BtnContainer 
                btnClass={'homeButtons'}  
                teamScore={homeScore} 
    
                scoreTDClass={'homeButtons__touchdown'}
                scoreFGClass={'homeButtons__fieldGoal'}
                touchDown = {'Home Touchdown'}
                fieldGoal ={'Home Field Goal'}
                setScore = {setScore}
                teamName={homeTeamName} 
            />
            {/* <BtnContainer 
                btnClass={'awayButtons'}  
                teamScore={awayScore} 
                setTeamScore={setAwayScore}
                scoreTDClass={'awayButtons__touchdown'}
                scoreFGClass={'awayButtons__fieldGoal'}
                touchDown = {'Away Touchdown'}
                fieldGoal ={'Away Field Goal'}
            /> */}
        </section>
    )
}

export default Buttons;