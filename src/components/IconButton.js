import React from 'react';

const IconButton = ({value, clickFn, iconName}) => {
    return(
        <button
            className="secondaryBtn"
            onClick={clickFn}
        >
            <span>{iconName} </span>
            {value}
        </button>
    )
}

export default IconButton;