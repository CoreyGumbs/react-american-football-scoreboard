import React from 'react';
import ScoreBtn from './ScoreBtn';

const BtnContainer = props => {
    const {btnClass} =  props;

    return (
        <div className={btnClass}>
            btn
        </div>
    );
}

export default BtnContainer;