import React from 'react';

const IconButton = ({value, clickFn}) => {
    return(
        <button
            className="secondaryBtn"
            onClick={clickFn}
        >
            <span>i </span>
            {value}
        </button>
    )
}

export default IconButton;