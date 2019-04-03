import React from "react";
import "./DrumMachine.css";


const drumMachine = (props) => {

    return (
        <div id="drum-machine">
          <div id="display">

            <button className="drum-pad"
              id="Crash Cymbal"
              onClick= {props.clickIt}
              >
              Q

              <audio
                className="clip"
                id="Q"
                src="https://freesound.org/data/previews/203/203567_3660887-lq.mp3"
                >
              </audio>

            </button>

            <button className="drum-pad"
              id="Small Tom"
              onClick= {props.clickIt}
              >
              W

              <audio
                className="clip"
                id="W"
                src="https://freesound.org/data/previews/416/416292_8218607-lq.mp3"
                >
              </audio>

            </button>

          </div>
        </div>
    )
};

export default drumMachine;
