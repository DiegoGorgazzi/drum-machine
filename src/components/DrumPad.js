import React from "react";
import {drumPadList} from "../shared/drumPadList";
import "./DrumPad.css"

const drumPad = (props) => drumPadList.map((item, index) =>

       {return (
         <button className="drum-pad"
          id = {item.padName}
          onClick= {props.clickIt}
          key={index}
          style = {props.styleIt}
          >
          {item.audioIdKey}

          <audio
            className="clip"
            id={item.audioIdKey}
            src={item.audioSrc}
                            >
          </audio>

        </button>
        )
      });


export default drumPad;
