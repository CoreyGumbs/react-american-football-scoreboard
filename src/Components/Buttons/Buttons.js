import React from 'react';
import BtnContainer from './BtnContainer';

const Buttons = props => {

    const {homeScore, awayScore, setScore, homeTeamName,
    awayTeamName} = props;

    return (
        <section className="buttons">

            {/* Home Btn Container */}
            <BtnContainer 
                btnClass={'homeButtons'}  
                teamScore={homeScore} 
                scoreTDClass={'homeButtons__touchdown'}
                scoreFGClass={'homeButtons__fieldGoal'}
                touchDown = {'Home Touchdown'}
                fieldGoal ={'Home Field Goal'}
                safety={'Home Safety'}
                setScore = {setScore}
                teamName={homeTeamName} 
            />

            {/* Away Btn Container */}
            <BtnContainer 
                btnClass={'awayButtons'}  
                teamScore={awayScore} 
                scoreTDClass={'awayButtons__touchdown'}
                scoreFGClass={'awayButtons__fieldGoal'}
                touchDown = {'Away Touchdown'}
                fieldGoal ={'Away Field Goal'}
                safety={'Away Safety'}
                setScore = {setScore}
                teamName={awayTeamName} 
            />

        </section>
    )
}

export default Buttons;