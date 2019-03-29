import React from "react";
import "./DrumMachine.css";


const drumMachine = (props) => {
    return (
        <div id="drum-machine">
          <audio
            id="audio"
            src="https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
          ></audio>
          <button
            onClick= {props.clickIt}>
              Play 1
          </button>

        </div>
    )
};

export default drumMachine;
