import React from 'react';

const SecondaryButton = ({value, clickFn}) => {
    return(
        <button
            className="secondaryBtn"
            onClick={clickFn}
        >
            {value}
        </button>
    )
}

export default SecondaryButton;