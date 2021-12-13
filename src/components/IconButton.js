import React from 'react';

const IconButton = ({value, clickFn}) => {
    return(
        <button
            onClick={clickFn}
        >
            {value}
        </button>
    )
}

export default IconButton;