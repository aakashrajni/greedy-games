import React from 'react';

const PrimaryButton = ({value, clickFn}) => {
    return(
        <button
            className="primaryBtn"
            onClick={clickFn}
        >
            {value}
        </button>
    )
}

export default PrimaryButton;