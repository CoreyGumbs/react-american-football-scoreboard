import React from 'react';
import TopRow from '../TopRow/TopRow';
import BottomRow from '../BottomRow/BottomRow';


const ScoreBoard = () => {
    return(
        <section className="scoreboard">
            <TopRow />
             <BottomRow />
        </section>
    )
}

export default ScoreBoard;