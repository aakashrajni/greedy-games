import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/toggle/toggleSlice';

const Settings = ({value}) => {
    const dispatch = useDispatch()
    return (
        <div className="settings">
            <h4>Dimensions and Metrics</h4>
            <div className="settingsTabContainer">
            {
                value.map((val) =>{
                    console.log(val);
                    return(
                        <label key={val.id}>
                            <input className="settingCheckbox" type="checkbox" {...val.getToggleHiddenProps()}/>
                            <div className={val.isVisible?"settingsTab tabVisible" : "settingsTab"} >{val.Header}</div>
                        </label>
                    )
                })
            }
            </div>
            <div className="settingActionContainer">
                <SecondaryButton 
                    value="Close" 
                    clickFn={() => dispatch(toggle())
                }/>
                <PrimaryButton 
                    value="Apply Changes" 
                    clickFn={() => dispatch(toggle())}
                />
            </div>
        </div>
    )
}

export default Settings;