import React from 'react';
import "./ProgressBar.css";
import Filler from './Filler/Filler'



function ProgressBar(props) {

    return (
        <div>
            <label>{props.title}</label>
            <div className="progress-bar">
                <Filler {...props} />
            </div>
        </div>
    );
}

export default ProgressBar;
