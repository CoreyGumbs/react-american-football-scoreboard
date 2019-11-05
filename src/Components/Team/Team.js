import React, {useState} from 'react';


const Team = (props) => {

    const {parentClass, headerClass, scoreClass, teamName, score} = props;
    

    return(

        <div className={parentClass}>
            <h2 className={headerClass}>{teamName}</h2>
            <div className={scoreClass}>{score}</div>
        </div>

    )
}

export default Team;