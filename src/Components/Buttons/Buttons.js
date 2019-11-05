import React from 'react';
import BtnContainer from './BtnContainer';

const Buttons = props => {

    const {homeScore, setHomeScore, awayScore, setAwayScore} = props;

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
            />
            <BtnContainer btnClass={'awayButtons'}  teamScore={awayScore} setTeamScore={setAwayScore}/>
        </section>
    )
}

export default Buttons;