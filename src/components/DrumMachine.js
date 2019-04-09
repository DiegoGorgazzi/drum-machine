import React from "react";
import "./DrumMachine.css";


const drumMachine = (props) => {

    return (
        <div id="drum-machine">
          <div id="display">

            <button className="drum-pad"
              id="Crash-Cymbal"
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
              id="Small-Tom"
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

            <button className="drum-pad"
              id="Bass-kick-Drum"
              onClick= {props.clickIt}
              >
              E

              <audio
                className="clip"
                id="E"
                src="https://freesound.org/data/previews/25/25649_48671-lq.mp3"
                >
              </audio>

            </button>

            <button className="drum-pad"
                id="Medium-Tom"
                onClick= {props.clickIt}
                >
                A

                <audio
                  className="clip"
                  id="A"
                  src="https://freesound.org/data/previews/46/46554_394391-lq.mp3"
                  >
                </audio>

            </button>

            <button className="drum-pad"
                id="Ride-Cymbal"
                onClick= {props.clickIt}
                >
                S

                <audio
                  className="clip"
                  id="S"
                  src="https://freesound.org/data/previews/13/13250_36719-lq.mp3"
                  >
                </audio>

            </button>

            <button className="drum-pad"
                id="Hi-Hat"
                onClick= {props.clickIt}
                >
                D

                <audio
                  className="clip"
                  id="D"
                  src="https://freesound.org/data/previews/165/165321_3008343-lq.mp3"
                  >
                </audio>

            </button>

            <button className="drum-pad"
                id="Snare-Drum"
                onClick= {props.clickIt}
                >
                Z

                <audio
                  className="clip"
                  id="Z"
                  src="https://freesound.org/data/previews/270/270156_1125482-lq.mp3"
                  >
                </audio>

            </button>

            <button className="drum-pad"
                id="Floor-Tom"
                onClick= {props.clickIt}
                >
                X

                <audio
                  className="clip"
                  id="X"
                  src="https://freesound.org/data/previews/41/41948_433684-lq.mp3"
                  >
                </audio>

            </button>

            <button className="drum-pad"
                id="Crash-Cymbal-2"
                onClick= {props.clickIt}
                >
                C

                <audio
                  className="clip"
                  id="C"
                  src="https://freesound.org/data/previews/219/219612_3008343-lq.mp3"
                  >
                </audio>

            </button>

                    {props.children}










          </div>
        </div>
    )
};

export default drumMachine;
