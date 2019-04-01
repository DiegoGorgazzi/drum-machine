import React from "react";
import "./DrumMachine.css";


const drumMachine = (props) => {
    return (
        <div id="drum-machine">
          <div id="display">

            <div className="drum-pad"
              id="Crash Cymbal">
              <button
                onClick= {props.clickIt}
                value = "https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
                >
                  Q
                  <audio
                    className="clip"
                    id="Q"
                    src="https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
                    >
                  </audio>
              </button>
            </div>

          </div>
        </div>
    )
};

export default drumMachine;
