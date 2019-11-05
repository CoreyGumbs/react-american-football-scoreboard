import React from 'react';

const BtnContainer = props => {
    const {btnClass} =  props;

    return (
        <div className={btnClass}>
            btn
        </div>
    );
}

export default BtnContainer;