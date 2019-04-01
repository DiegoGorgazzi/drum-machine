import React from "react";
import "./DrumMachine.css";


const drumMachine = (props) => {
    return (
        <div id="drum-machine">
          <div id="display">
            <audio
              id="audio"
              src="https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
            ></audio>
            <button
              onClick= {props.clickIt}
              value = "https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
              >
                Play 1
            </button>

          </div>
        </div>
    )
};

export default drumMachine;
