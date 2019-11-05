import React from 'react';
import BtnContainer from './BtnContainer';

const Buttons = props => {

    const {homeScore, setHomeScore, awayScore, setAwayScore} = props;

    return (
        <section className="buttons">
            <BtnContainer btnClass={'homeButtons'}  teamScore={homeScore} setTeamScore={setHomeScore}/>
            <BtnContainer btnClass={'awayButtons'}  teamScore={awayScore} setTeamScore={setAwayScore}/>
        </section>
    )
}

export default Buttons;