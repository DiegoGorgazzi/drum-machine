import React from "react";
import "./DrumMachine.css";

const drumMachine = (props) => {

    return (
        <div id="drum-machine">
          <div id="display">

                    {props.children}


          </div>
        </div>
    )
};

export default drumMachine;
